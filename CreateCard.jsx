/** @jsx React.DOM */
'use strict'
var React = require('react')
var mui = require('material-ui')
var RaisedButton = mui.RaisedButton
var FlatButton = mui.FlatButton
var Dialog = mui.Dialog
require("./node_modules/bootstrap/less/bootstrap.less")
require("./styles/CreateCard.less")



module.exports = React.createClass({

    displayName: 'CreateCard',    

    render: function(){        
        return (
          <div className="Create">
            <form>
              <div className="form-padding">
              <div className="form-group">
                <label for="title"><strong>Title</strong></label>
                <input type="text" className="form-control" placeholder="Enter a title for the project"/>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1"><strong>Description</strong></label>
                <textarea className="form-control" placeholder="Enter a description of the issue" rows="3"></textarea>
              </div>
              <div className="form-flex">
                <div className="form-group">                
                  <label for="exampleInputFile"><strong>Ticket Link</strong></label>
                  <input type="text" id="exampleInputFile" className="form-control" placeholder="Paste a link to Jira"/>
                </div>
                <div className="form-group">                
                  <label for="exampleInputFile"><strong>Bounty</strong></label>
                  <input type="text" id="exampleInputFile" className="form-control" placeholder="Enter a dollar amount"/>
                  <p className="help-block">Motivosity Amount</p>
                </div>
              </div>
              </div>
              <div className="form-actions">
              
                <FlatButton 
                className="bh-RaisedButton" 
                label="Cancel" 
                secondary={true}
                 />                   
                <RaisedButton 
                  className="bh-RaisedButton" 
                  label="Create a New Bounty" 
                  primary={true}
                  />
                
              </div>
              
              
            </form>
      
      
          </div>
        )
    }
})