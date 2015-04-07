/** @jsx React.DOM */
'use strict'
var React = require('react')
require("./scss/app.scss")
require("./scss/BountyCard.scss")

var Header = require('./Header')

// this'll be what is brought in when done below
// module.exports = React.createClass({

//   displayName: 'BountyCard',

//   render: function() {
//     return (
//       <div>
//         <BountyHeader products={this.props.products}/>
//         <BountyContent />
//         <BountyAction />
//       </div>
//     )
//   }

// })

////

var BountyAction = React.createClass({
    render: function() {
      return (
        <div className="BountyAction">
          <button>Action 1</button>
          <button>Action 1</button>
        </div>
      );
    }
});

var BountyContent = React.createClass({
    render: function() {
      return (
        <div className="BountyContent">
          <h2>Icon Help!</h2>
          <p>A small description and stuff</p>
        </div>
      );
    }
});

var BountyHeader = React.createClass({
    render: function() {
      return (       
        <div className="BountyHeader">
          <h3 className="BountyHeader_Title" >
            {this.props.bhtitle}
          </h3>         
          <p>{this.props.bhtitle} </p>
        </div>
      );
    }
});

var BountyCard = React.createClass({
  render: function() {        
    var bgStyle = {
      backgroundImage: 'url("http://upload.wikimedia.org/wikipedia/commons/c/cd/Panda_Cub_from_Wolong,_Sichuan,_China.JPG")',
      backgroundSize: 'cover'
    } 
    var bgh3 = {
      color: 'white'
    }
    return (
      <div className="BountyCard">
        <div className="BountyCard_Header" style={bgStyle}>
          <h3 style={bgh3}>Panda!</h3>
        </div>
        <BountyContent />
      </div>
    );
  }

});

var BountyContainer = React.createClass({
  render: function() {        

    return (
      <div className="BountyContainer">
        <BountyCard />
      </div>
    );
  }

});



var bhcontent = [
  {bhtitle: "Icon hunt", info: "hunt some icons"},
  {bhtitle: "New colors", info: "change colors"}
  // { title: "Fix this Icon", bounty: "$2", info: "this is an awesome icon fix", patron: true, fund: "$1", commitdate: "1/12/16", jira:"http://ux.inst.com", tilebgd: "#dddddd", tileimg: "https://s3.amazonaws.com/uifaces/faces/twitter/adambetts/128.jpg" },
  // { title: "Change this color", bounty: "$1", info: "moar color", patron: true, fund: "$5", commitdate: "1/12/16", jira:"http://ux.inst.com", tilebgd: "#dddddd", tileimg: "https://s3.amazonaws.com/uifaces/faces/twitter/adambetts/128.jpg" },
];

var account = [
  { fname: "Colleen", lname: "Palmer", bountyhunter: false, contributor: false, avatar:"http://https://dl.dropboxusercontent.com/u/26366806/citylights.jpg"},
  { fname: "Kyle", lname: "Jensen", bountyhunter: true, contributor: false, avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/whale/128.jpg"},
  { fname: "Blake", lname: "Simkins", bountyhunter: false, contributor: true, avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/blakesimkins/128.jpg"},
];

React.render(<Header />, document.getElementById('header'));
React.render(<BountyContainer data={bhcontent}/>, document.getElementById('BountyContainer'));


