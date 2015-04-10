/** @jsx React.DOM */
'use strict'
var React = require('react')

require("./styles/BountyCard.less")

var Avatar = require('./Avatar')



/// Here's where the fun stuff begins...

// Card - Action Buttons
var BountyAction = React.createClass({

    handleClickFund: function(event) {      
      document.body.classList.remove('claim');
      document.body.classList.add('funded');
    },    
    handleClickClaim: function(event) {     
      document.body.classList.remove('funded'); 
      document.body.classList.add('claim');
    },    
    render: function() {
      return (   
        <div className="BountyAction_Wrap">
          <div className="BountyAction_Avatar">
            <Avatar />
          </div>
          <div className="BountyAction">          
            <button className="BountyAction_Button BountyAction_Button-Fund" onClick={this.handleClickFund}><span>FUND</span></button>
            <button className="BountyAction_Button BountyAction_Button-Claim" onClick={this.handleClickClaim}><span>CLAIM IT</span></button>
          </div>
        </div>
      );
    }
});

// Card - Content Block
var BountyContent = React.createClass({

    render: function() {
      return (  
        <div className="BountyContent">     
          <header className="BountyContent_Price">
            <h4>Current Bounty</h4>
            <h3>
              <span>{this.props.price}</span>
            </h3>
          </header>
          <div className="BountyContent_Text" >
            {this.props.text}
          </div>          
        </div>
      );
    }
});

// Card - Header Block
var BountyHeader = React.createClass({

    render: function() {
      return (       
        
        <div className="BountyCard_Header">
          <div className="BountyCard_Header-Link">
            <a href={this.props.jira} >
              View Details
              <img src="images/arrow.svg" />
            </a>
          </div>
          <h3 className="BountyCard_Header-Title" >
            {this.props.title}
          </h3> 
        </div>
        
      );
    }
});

// Card

var BountyCard = React.createClass({

    render: function() {
      return (       
        <div className="BountyCard" id={this.props.fid}>
          <div className="BountyContent_Flex">
            <BountyHeader title={this.props.title} jira={this.props.jira} />
            <BountyContent text={this.props.text} price={this.props.price} fname={this.props.contributors} />          
          </div>          
          <BountyAction />
        </div>
      );
    }
});


// Wrap around Card - can prolly get rid of this at somepoint...
var BountyCardWrap = React.createClass({
  render: function() {        

    return (
      <div className="BountyCardWrap">
        {this.props.data.map(function (carddata) {
          return (
            <BountyCard 
              title={carddata.title} 
              text={carddata.text}
              price={carddata.price}
              jira={carddata.jira}
              key={carddata.key}
              fid={carddata.fid}          
              />                   
          );
        })}
      </div>
    );
  }

});


module.exports = React.createClass({
    
    displayName: 'Bounty',

    render: function() {        

    return (
      <div className="BountyContainer">
        <BountyCardWrap data={this.props.data} />
      </div>
    );
  }
})





