"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var BootstrapTable = _interopRequire(require("./BootstrapTable"));

var TableHeaderColumn = _interopRequire(require("./TableHeaderColumn"));

window.BootstrapTable = BootstrapTable;
window.TableHeaderColumn = TableHeaderColumn;
module.exports = {
  BootstrapTable: BootstrapTable,
  TableHeaderColumn: TableHeaderColumn
};