'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const collectionClass = require('./collection-class');
const whiskeySchema = require('./whiskey.schema');
const beerSchema = require('./beer.schema');


const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/gf-lab04';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const WhiskeyModel = whiskeySchema(sequelize, DataTypes);
const BeerModel = beerSchema(sequelize, DataTypes);

// create associations between tables

WhiskeyModel.hasMany(BeerModel, { foreignKey: 'beerId', sourceKey: 'id' });
BeerModel.belongsTo(WhiskeyModel, { foreignKey: 'beerId', targetKey: 'id' });

module.exports = {
  sequelize,
  whiskeyInterface: new collectionClass(WhiskeyModel),
  beerInterface: new collectionClass(BeerModel),
};
