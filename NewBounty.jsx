/** @jsx React.DOM */
'use strict'
var React = require('react')
var mui = require('material-ui')
var Dialog = mui.Dialog;



module.exports = React.createClass({
    
    displayName: 'Dialog',
    
    render: function(){
        return (
          <Dialog title="Dialog With Custom Actions" actions={customActions}>
            The actions in this window were passed in as an array of react objects.
          </Dialog>
        )
    }
})
