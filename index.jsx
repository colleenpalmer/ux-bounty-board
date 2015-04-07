/** @jsx React.DOM */
'use strict'
var React = require('react')
require("./scss/app.scss")
require("./scss/BountyCard.scss")

var Header = require('./Header')
var Bounty = require('./BountyCard')


var carddata = [
  {title: "Icon hunt", text: "hunt some icons"},
  {title: "New colors", text: "change colors"},
  {title: "Fix me!", text: "Bacon ipsum dolor amet pork chop rump ground round turducken venison leberkas pork loin jowl pancetta sausage chicken. Chuck drumstick meatball brisket picanha."},
  {title: "New colors", text: "change colors"}
];

var account = [
  { fname: "Colleen", lname: "Palmer", bountyhunter: false, contributor: false, avatar:"http://https://dl.dropboxusercontent.com/u/26366806/citylights.jpg"},
  { fname: "Kyle", lname: "Jensen", bountyhunter: true, contributor: false, avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/whale/128.jpg"},
  { fname: "Blake", lname: "Simkins", bountyhunter: false, contributor: true, avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/blakesimkins/128.jpg"},
];

React.render(<Header />, document.getElementById('header'));
React.render(<Bounty data={carddata}/>, document.getElementById('BountyContainer'));


