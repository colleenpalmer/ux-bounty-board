/** @jsx React.DOM */
'use strict'
var React = require('react')

require("./node_modules/normalize/index.styl")
require("./styles/vendor/flexboxgrid.less")
require("./styles/app.less")


var Header = require('./Header')
var Bounty = require('./BountyCard')
var Firebase = require('firebase')

React.render(<Header />, document.getElementById('header'));
React.render(<Bounty data={new Firebase("https://bounty-dev.firebaseio.com/openBounties/")} />, document.getElementById('BountyContainer'));
