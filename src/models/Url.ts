import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Optional } from "sequelize";
import sequelizeConn from "../database/sequelizeConn";
import UniqueIdService from "../services/UniqueIdService";
import { convertBase, _10To62 } from "simple-base-converter";

interface UrlAttributes {
  id: bigint;
  shortURL: string;
  longURL: string;
}

export interface UrlInput extends Optional<UrlAttributes, 'id' | 'shortURL'> {}
export interface UrlOutput extends Required<UrlAttributes> {}

export class Url extends Model<UrlAttributes, UrlInput> implements UrlAttributes {
  id!: bigint;
  shortURL!: string;
  longURL!: string;
}

Url.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  shortURL: {
    type: DataTypes.STRING(2048),
    unique: true
  },
  longURL: {
    type: DataTypes.STRING(2048),
    allowNull: false,
    unique: true
  }
}, {
  sequelize: sequelizeConn,
  modelName: 'url',
  tableName: 'url',
  timestamps: false
});

Url.beforeCreate(async (url, options) => {
  const idStr = new UniqueIdService().generateUniqueId().toString();

  let idBigInt = BigInt(idStr);
  url.id = idBigInt;

  var digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let base = BigInt( digits.length );
  let result = '';
  
  while ( 0 < idBigInt ) {
    result = digits.charAt( Number( idBigInt % base ) ) + result;
    idBigInt = idBigInt / base;
  }

  url.shortURL = result;
});