import React, {Component} from 'react';
class Message extends Component {
  constructor(props) {
    super(props);
  }
  //checking if extension is image file
 checkImage(link){
    const extension =  /(?:\.([^.]+))?$/.exec(link)[1];
    const supported = {
      jpg: true,
      png: true,
      gif: true
    }
    return supported[extension];
  }

  render(){
    var divStyle = {
      color: this.props.eachMessage.messageColor,
    }
    return (
      <div className="message">
        <div><span style style={divStyle} className="message-username">{this.props.eachMessage.username}</span></div>
        {!this.checkImage(this.props.eachMessage.content) &&
          <span className="message-content">{this.props.eachMessage.content}</span>}
        {this.checkImage(this.props.eachMessage.content) &&
          <div><img className="message-image"  src= {this.props.eachMessage.content}/></div>}
      </div>
      );
  }
}
export default Message;
