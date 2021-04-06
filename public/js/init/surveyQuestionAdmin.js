/******/ (() => { // webpackBootstrap
/*!******************************************!*\
  !*** ./resources/js/init/surveyTable.js ***!
  \******************************************/
// require('../Components/surveyTable');
var data = JSON.parse(document.getElementById('data').dataset.json).map(function (e) {
  // e["Action"] = '<b>bb</b>';
  e.u = e.user.name;
  return e;
}); //custom formatter definition

var printIcon = function printIcon(cell, formatterParams, onRendered) {
  //plain text value
  return "\n        <button wire:click=\"edit(".concat(cell.getRow().getData().id, ")\" class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\">Edit</button>\n        <button wire:click=\"delete(").concat(cell.getRow().getData().id, ")\" class=\"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded\">Delete</button>\n    ");
};

var table = new Tabulator("#table", {
  data: data,
  //assign data to table
  history: true,
  //allow undo and redo actions on the table
  pagination: "local",
  //paginate the data
  paginationSize: 10,
  //allow 7 rows per page of data
  movableColumns: true,
  //allow column order to be changed
  resizableRows: true,
  //allow row order to be changed
  columns: [//define the table columns
  {
    title: "ID",
    field: "id"
  }, {
    title: "Title",
    field: "name"
  }, {
    title: "Aviable From",
    field: "aviableFrom",
    formatter: "datetime"
  }, {
    title: "Aviable To",
    field: "aviableTo",
    formatter: "datetime"
  }, {
    title: "Creation date",
    field: "created_at",
    formatter: "datetime"
  }, {
    title: "Created by",
    field: "u"
  }, {
    title: "Public",
    field: "public",
    formatter: "tickCross"
  }, {
    title: "Enabled",
    field: "enabled",
    formatter: "tickCross"
  }, {
    formatter: printIcon,
    hozAlign: "center"
  } // {title:"Gender", field:"gender", width:95, editor:"select", editorParams:{values:["male", "female"]}},
  // {title:"Rating", field:"rating", formatter:"star", hozAlign:"center", width:100, editor:true},
  // {title:"Color", field:"col", width:130, editor:"input"},
  // {title:"Date Of Birth", field:"dob", width:130, sorter:"date", hozAlign:"center"},
  // {title:"Driver", field:"car", width:90,  hozAlign:"center", formatter:"tickCross", sorter:"boolean", editor:true},
  ]
});
/******/ })()
;