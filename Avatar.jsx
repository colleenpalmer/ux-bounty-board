/** @jsx React.DOM */
'use strict'
var React = require('react')
require("./styles/BountyAvatar.less")

var avdata = [
  {
    key: "94819080",
    fname: 'Colleen Palmer',
    image: "https://pbs.twimg.com/profile_images/1261155890/ic_400x400.jpg",
    email: "cpalmer@instructure.com"
  },
  {
    key: "1826334",
    fname: 'Pixel Palmer',
    image: 'https://pbs.twimg.com/profile_images/1440938955/pixelic_400x400.jpg',
    email: "cpalmer@instructure.com"
  },
  {
    key: "0958943",
    fname: 'Blake Simkins',
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/blakesimkins/128.jpg",
    email: "brianp@instructure.com"
  }
]

module.exports = React.createClass({

    displayName: 'Avatar',

    render: function() {
    return (
      <div className="BHAvatar">
        {this.props.data.map(function (avdata) {
          return (
            <Avatar
              key={avdata.key}
              size={32}
              round={true}
              name={avdata.fname}
              src={avdata.image}
              email={avdata.email}
              className="AvatarImg"
              />
          );
        })}
      </div>
    );
  }
})
