/** @jsx React.DOM */
'use strict'
var React = require('react')
var Avatar = require('react-avatar');
require("./styles/BountyAvatar.less")

var avdata = [
  {
    key: "94819080",
    fname: 'Colleen Palmer', 
    image: "https://pbs.twimg.com/profile_images/1261155890/ic_400x400.jpg"
  },
  {
    key: "1826334",
    fname: 'Pixel Palmer',
    image: 'https://pbs.twimg.com/profile_images/1440938955/pixelic_400x400.jpg'
  },
  {
    key: "0958943",
    fname: 'Blake Simkins', 
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/blakesimkins/128.jpg"
  }    
]

var BHAvatar = React.createClass({
  render: function() {        

    return (
      <div className="BHAvatar">
        {this.props.data.map(function (avdata) {
          return (
            <Avatar 
              size={32}
              round={true}
              name={avdata.fname}  
              src={avdata.image}
              className="AvatarImg"
              />                   
          );
        })}
      </div>
    );
  }

});

module.exports = React.createClass({
    
    displayName: 'BHAvatar',

    render: function() {        
    return (       

      <BHAvatar 
        data={avdata} /> 
      );
  }
})
