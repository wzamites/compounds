const express = require('express');
const mongoose = require('mongoose');

const app = express()
const apiPort = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:user123@ds261567.mlab.com:61567/heroku_n7stzfqz",
{useNewUrlParser: true, useUnifiedTopology: true})

const compoundSchema = new mongoose.Schema ({
  smiles : String,
  identifier : String,
  date : String,
  assay_0 : mongoose.Schema.Types.Decimal128,
  assay_1 : mongoose.Schema.Types.Decimal128,
  assay_2 : mongoose.Schema.Types.Decimal128,
  assay_3 : mongoose.Schema.Types.Decimal128,
  assay_4 : mongoose.Schema.Types.Decimal128,
  assay_5 : mongoose.Schema.Types.Decimal128,
  assay_6 : mongoose.Schema.Types.Decimal128,
  assay_7 : mongoose.Schema.Types.Decimal128,
  assay_8 : mongoose.Schema.Types.Decimal128,
  assay_9 : mongoose.Schema.Types.Decimal128,
  model_for_assay_0 : mongoose.Schema.Types.Decimal128,
  model_for_assay_1 : mongoose.Schema.Types.Decimal128,
  model_for_assay_2 : mongoose.Schema.Types.Decimal128,
  model_for_assay_3 : mongoose.Schema.Types.Decimal128,
  model_for_assay_4 : mongoose.Schema.Types.Decimal128,
  model_for_assay_5 : mongoose.Schema.Types.Decimal128,
  model_for_assay_6 : mongoose.Schema.Types.Decimal128,
  model_for_assay_7 : mongoose.Schema.Types.Decimal128,
  model_for_assay_8 : mongoose.Schema.Types.Decimal128,
  model_for_assay_9 : mongoose.Schema.Types.Decimal128
})

const Compound = mongoose.model("compound", compoundSchema)

app.get("/api", function(req, res) {
  Compound.find({}, function(err, items) {
    res.json(items);
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"))
}

app.listen(apiPort, function() {
  console.log("it's running");
})

//mongodb://localhost:27017/compoundsDB
//mongodb://user:user123@ds261567.mlab.com:61567/heroku_n7stzfqz
