import React, {Component} from 'react';
class App extends Component {
  constructor(props) {
  super(props);
  this.state = {inputValue:""};
  this.onChange = this.onChange.bind(this);
  this.myUsername = this.myUsername.bind(this);
  }
  changeValue(inputValue) {
    this.setState({ inputValue });
  }

  onChange(event) {
    if(event.key == 'Enter'){
      this.props.onEnter(event.target.value);
      event.target.value = "";
    } else {
      this.changeValue(event.target.value);
    }
  }

  myUsername(event){
    if(event.key == 'Enter'){
      this.props.myUsername(event.target.value);
    }
  }
  render() {


    return (
      <footer className="chatbar">
        <input className="chatbar-username" onKeyPress={this.myUsername} placeholder="Anonymous" />
        <input  onKeyPress={this.onChange} className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
export default App;





