import React, {Component} from 'react';
class App extends Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" value= {this.props.currentUser} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
export default App;





