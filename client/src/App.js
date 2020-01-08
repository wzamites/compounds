import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {MarkSeries, LineMarkSeries, XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiCall: [],
      selectedAssay: "assay_0",
      chartWidth: 800
    }
  }

  componentDidMount() {
    fetch("/api/", {
      "Access-Control-Allow-Origin": "https://localhost:3000"
    })
      .then(response => response.json())
      .then(data => this.setState({apiCall: data}))
    }

  render() {
    const assayOverTimeArray = []
    for (var i = 0; i < this.state.apiCall.length; i++) {
      if (this.state.selectedAssay in this.state.apiCall[i]) {
        assayOverTimeArray.push({
          x: this.state.apiCall[i].date,
          y: this.state.apiCall[i][this.state.selectedAssay].$numberDecimal
        })
      }
    }

    const realityArray = []
    const mlArray = []
    const assayNameModel = "model_for_" + this.state.selectedAssay
    for (var i = 0; i < this.state.apiCall.length; i++) {
      mlArray.push({
        x:i,
        y: this.state.apiCall[i][assayNameModel].$numberDecimal
      })
      if (this.state.selectedAssay in this.state.apiCall[i]) {
        realityArray.push({
          x: i,
          y: this.state.apiCall[i][this.state.selectedAssay].$numberDecimal
        })
      }
    }

    return (
      <div className="App">
      <ButtonToolbar>
        <ButtonGroup>
          <Button onClick={() => this.setState({selectedAssay: "assay_0"})}>assay_0</Button>
          <Button onClick={() => this.setState({selectedAssay: "assay_1"})}>assay_1</Button>
          <Button onClick={() => this.setState({selectedAssay: "assay_2"})}>assay_2</Button>
          <Button onClick={() => this.setState({selectedAssay: "assay_3"})}>assay_3</Button>
          <Button onClick={() => this.setState({selectedAssay: "assay_4"})}>assay_4</Button>
          <Button onClick={() => this.setState({selectedAssay: "assay_5"})}>assay_5</Button>
          <Button onClick={() => this.setState({selectedAssay: "assay_6"})}>assay_6</Button>
          <Button onClick={() => this.setState({selectedAssay: "assay_7"})}>assay_7</Button>
          <Button onClick={() => this.setState({selectedAssay: "assay_8"})}>assay_8</Button>
          <Button onClick={() => this.setState({selectedAssay: "assay_9"})}>assay_9</Button>
          </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonGroup>
          <Button onClick={() => this.setState({chartWidth: 800})}>Small</Button>
          <Button onClick={() => this.setState({chartWidth: 4000})}>Medium</Button>
          <Button onClick={() => this.setState({chartWidth: 10000})}>Big</Button>
          </ButtonGroup>
      </ButtonToolbar>

      <h5>{this.state.selectedAssay} over time</h5>
        <XYPlot className="inside" height={300} width= {this.state.chartWidth} xType='ordinal'>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries
            data={assayOverTimeArray}/>
        </XYPlot>

      <h5>{this.state.selectedAssay} actual vs predicted</h5>
      <XYPlot width={this.state.chartWidth} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineSeries
        style={{
          strokeWidth: '3px'
        }}
        lineStyle={{stroke: 'red'}}
        data={realityArray}
      />
      <LineSeries
        style={{
          strokeWidth: '3px'
        }}
        lineStyle={{stroke: 'blue'}}
        data={mlArray}
      />
    </XYPlot>
      </div>
    );
  }
}

export default App;
