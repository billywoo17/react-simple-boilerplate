import React, {Component} from 'react';
import Message from './Message.jsx';
class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const message = this.props.messages.map(eachMessage => {
      switch(eachMessage.messageType){
        case "message" :
          return (<Message key={eachMessage.id}eachMessage ={eachMessage} />)
        break;
        case "notification":
          return(<div className="message system" key={eachMessage.id}>
          {eachMessage.oldname} changed their name to {eachMessage.username}.
        </div>)
        break;
      }
    });

    return (
      <main className="messages">
      {message}
      </main>
    );
  }
}
export default MessageList;






