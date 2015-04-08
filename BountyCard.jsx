/** @jsx React.DOM */
'use strict'
var React = require('react')
require("./styles/BountyCard.less")



var BountyAction = React.createClass({
    render: function() {
      return (       
        <div className="BountyAction">
          <button className="BountyAction_Button BountyAction_Button-Fund">FUND</button>
          <button className="BountyAction_Button BountyAction_Button-Claim">CLAIM IT</button>
        </div>
      );
    }
});

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
var BountyHeader = React.createClass({

    render: function() {
      return (       
        
        <div className="BountyCard_Header">
          <div className="BountyCard_Header-Link">
            <a href="#">
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

var BountyCard = React.createClass({

    render: function() {
      return (       
        <div className="BountyCard">
          <div className="BountyContent_Flex">
            <BountyHeader title={this.props.title} />
            <BountyContent text={this.props.text} price={this.props.price} />          
          </div>
          <BountyAction />
        </div>
      );
    }
});

var BountyCardWrap = React.createClass({
  render: function() {        

    return (
      <div className="BountyCardWrap">
        {this.props.data.map(function (carddata) {
          return (
            <BountyCard 
              title={carddata.title} 
              text={carddata.text}
              price={carddata.price} />                   
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





