import React from 'react';
import UserItem from './components/UserItem';
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: '#F0FFF3'
    };
  }

  render() {
    return(
      <div className="App" style = {{background: this.state.background}}>
        <h1>List Users</h1>
        <UserItem name="Dan Angelin" email="dan.angelin@hotmail.com" />
        <UserItem name="Bill Walker" email="bill.walker@example.com" />
        <UserItem name="Bessie Castillo" email="bessie.castillo@example.com" />

        <input type='color' onChange={(event) => this.handleBackgroundColor(event)}/>
      </div>
    );
  }

  handleBackgroundColor(event) {
    console.log(event.target.value);
    this.setState({background: event.target.value});
  }
}

export default App;