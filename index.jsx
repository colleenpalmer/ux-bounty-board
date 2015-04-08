/** @jsx React.DOM */
'use strict'
var React = require('react')
require("./node_modules/normalize/index.styl")
require("./styles/app.less")  

var Header = require('./Header')
var Bounty = require('./BountyCard')

var carddata = [
  {title: "Replace the weird “send” icon", text: "hunt some icons", price: "$2.00"},
  {title: "Ugly button that needs to be fixed in Calendar", text: "change colorschange colorschange colorschange colorschange colorschange colors", price: "$12.00"},
  {title: "Tiny MCE needs minor button enhancements", text: "Bacon ipsum dolor amet pork chop rump ground round turducken venison leberkas pork loin jowl pancetta sausage chicken. Chuck drumstick meatball brisket picanha.", price: "$5.00"},
  {title: "3 icons need to be updated to font icons", text: "change colors", price  : "$5.00"},
  {title: "3 icons need to be updated to font icons", text: "change colors", price  : "$5.00"},
  {title: "3 icons need to be updated to font icons", text: "change colors", price  : "$5.00"}
];

var account = [
  { fname: "Colleen", lname: "Palmer", bountyhunter: false, contributor: false, avatar:"http://https://dl.dropboxusercontent.com/u/26366806/citylights.jpg"},
  { fname: "Kyle", lname: "Jensen", bountyhunter: true, contributor: false, avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/whale/128.jpg"},
  { fname: "Blake", lname: "Simkins", bountyhunter: false, contributor: true, avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/blakesimkins/128.jpg"},
];

React.render(<Header />, document.getElementById('header'));
React.render(<Bounty data={carddata}/>, document.getElementById('BountyContainer'));


