/** @jsx React.DOM */
'use strict'
var React = require('react')
require("./scss/BountyCard.scss")


var BountyAction = React.createClass({
    render: function() {
      return (       
        <div className="BountyAction">
          <button>doom</button>
          <button>not doom</button>
        </div>
      );
    }
});

var BountyContent = React.createClass({

    render: function() {
      return (       
        <p className="BountyHeader_Info" >
          {this.props.text}
        </p>
      );
    }
});
var BountyHeader = React.createClass({

    render: function() {
      return (       
        
        <div className="BountyCard_Header">
          <h3 className="BountyHeader_Title" >
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
          <BountyHeader title={this.props.title} />
          <BountyContent text={this.props.text} />
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
              text={carddata.text} />                   
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





