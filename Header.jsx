/** @jsx React.DOM */
'use strict'
var React = require('react')
require("./styles/Header.less")
var mui = require('material-ui')
var RaisedButton = mui.RaisedButton;

var NewBounty = require('./NewBounty')

var ButtonRound = React.createClass({
    render: function() {
      
      return (       
      
        <div className="HeaderAction">
          <button 
            className="bh-ButtonRound"
            >

            {this.props.label}
          </button>          
        </div>
        
      );
    }
});



module.exports = React.createClass({
    
    displayName: 'Header',
    
    render: function(){
        return (
          <header className="Header">
            <h1 className="Header_Title">Unclaimed Bounties</h1>
            <div className="HeaderAction">
              <RaisedButton className="bh-RaisedButton" label="Create a New Bounty" primary={true} />
            </div>
          </header>
        )
    }
})