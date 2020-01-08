# Compounds
Application built with the MERN stack-- MongoDB, Express, React, and Node.js

Other noteworthy packages include react-vis from Uber, Mongoose, and Bootstrap

## Database

MongoDB is set to run locally on 3000 (and React on 8000)

### Schema

The following is the BSON schema written for Mongoose to understand

```
{
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
}
```

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
