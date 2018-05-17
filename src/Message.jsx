import React, {Component} from 'react';
class Message extends Component {
  constructor(props) {
    super(props);
  }
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

    return (
      <div className="message">
        <span className="message-username">{this.props.eachMessage.username}</span>
        {!this.checkImage(this.props.eachMessage.content) &&
          <span className="message-content">{this.props.eachMessage.content}</span>}
        {this.checkImage(this.props.eachMessage.content) &&
          <img className="message-image" src= {this.props.eachMessage.content}/>}
      </div>
      );
  }
}
export default Message;
