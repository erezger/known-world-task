import House from '../models/house';

const mongoose = require('mongoose');
const data = require('./init.json');

export class MongooseDb {

  public connect() {
    mongoose.connect('mongodb://localhost/test', {
      useNewUrlParser: true,
      useCreateIndex: true
    }).then(() => {
      // insert json file into db if not exist
      House.insertMany(data.houses, {ordered: false}, err => err);
      console.log('connected to database');
    }).catch((e) => {
      console.log('failed connected to database', e);
    });
  }
}
