/** @jsx React.DOM */
'use strict'
var React = require('react')
require("./scss/Header.scss")

module.exports = React.createClass({
    
    displayName: 'Header',
    
    render: function(){
        return (
          <header>
            <h1>UX Bounty Board</h1>
            <div>
              <button href="#blah">Create New Bounty</button>
            </div>            
          </header>
        )
    }
})