/** @jsx React.DOM */
'use strict'
var React = require('react')

require("./node_modules/normalize/index.styl")

require("./styles/app.less")  

var Header = require('./Header')
var Bounty = require('./BountyCard')

// My totally Fake Data
var carddata = [
  {
    key: "123432454",
    title: "Replace the weird “send” icon", 
    text: "hunt some icons", 
    price: "$2.00", 
    jira: "http://cuteoverload.com",
    fid: "claimed"   
  },
  {
    key: "98475094375",
    title: "Ugly button that needs to be fixed in Calendar", 
    text: "We have a really uggo button. Needs2fix.", 
    price: "$5.00",
    jira: "http://cuteoverload.com",
    fid: "funded"
  },
  {
    key: "94t792546",
    title: "Add icon to publish button", 
    text: "This button needs an icon. We should get it in there stat!", 
    price: "$2.00",
    jira: "http://cuteoverload.com"
  },
  {
    key: "94235432",
    title: "Make UX prettier on modals", 
    text: "There are some modals that still need a facelift.", 
    price: "$8.00",
    jira: "http://cuteoverload.com"
  },
  {
    key: "8943275435",
    title: "Add new feature to dashboard", 
    text: "We've got a new thingymabob that needs adding.", 
    price: "$3.00",
    jira: "http://cuteoverload.com"
  },
  {
    key: "6434255",
    title: "Change color on button to use our color variables.", 
    text: "This blue isn't really working. We need it to bring in our primary blue.", 
    price: "$1.00",
    jira: "http://cuteoverload.com"
  }            
];


React.render(<Header />, document.getElementById('header'));
React.render(<Bounty data={carddata} />, document.getElementById('BountyContainer'));


