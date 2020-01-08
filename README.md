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

The schema makes no use of the first row in the .csv. Maybe later.

### Data Loading

The UI can't write to the database (yet). Given a .csv it will have to be uploaded via mongoimport in the terminal (not the Mongo shell).

In my case `<databaseName>` was compoundsDB and I used one `<collectionName>` called compounds.

`$ mongoimport -d <databaseName> -c <collectionName> --type csv --file <filename>.csv --headerline`

