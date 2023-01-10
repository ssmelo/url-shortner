"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
const sequelize_1 = require("sequelize");
const sequelizeConn_1 = __importDefault(require("../database/sequelizeConn"));
const UniqueIdService_1 = __importDefault(require("../services/UniqueIdService"));
const simple_base_converter_1 = require("simple-base-converter");
class Url extends sequelize_1.Model {
}
exports.Url = Url;
Url.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        defaultValue: () => new UniqueIdService_1.default().generateUniqueId()
    },
    shortURL: {
        type: sequelize_1.DataTypes.STRING(2048),
        allowNull: false
    },
    longURL: {
        type: sequelize_1.DataTypes.STRING(2048),
        allowNull: false
    }
}, {
    sequelize: sequelizeConn_1.default,
    modelName: 'url',
    tableName: 'url',
    timestamps: false
});
Url.beforeCreate((url, options) => __awaiter(void 0, void 0, void 0, function* () {
    url.shortURL = (0, simple_base_converter_1._10To62)(url.longURL);
}));
