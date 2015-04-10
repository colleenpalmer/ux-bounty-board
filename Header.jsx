/** @jsx React.DOM */
'use strict'
var React = require('react')
require("./styles/Header.less")
var mui = require('material-ui')

var RaisedButton = mui.RaisedButton
var FlatButton = mui.FlatButton
var Dialog = mui.Dialog
var DropDownMenu = mui.DropDownMenu

var NewBounty = require('./NewBounty')
var CreateCard = require('./CreateCard')



module.exports = React.createClass({

    displayName: 'Header',    

    handleClick: function(event) {      
      this.refs.myDialog.show()
    },
    render: function(){
        var menuItems = [
           { payload: '1', text: 'My Account' },
           { payload: '2', text: 'Settings' },
           { payload: '3', text: 'Logout' }
        ];
        return (
          <header className="Header">
            <h1 className="Header_Title">UX Bounty Board</h1>
            <DropDownMenu menuItems={menuItems} />
            <div className="HeaderAction">
              <RaisedButton 
                className="bh-RaisedButton" 
                label="Create a New Bounty" 
                secondary={true}
                onClick={this.handleClick} />
              <Dialog ref="myDialog" title="New Bounty" >
                <CreateCard />
              </Dialog>
            </div>
            
          </header>
        )
    }
})