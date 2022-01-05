import React from 'react';
// import UserItem from './components/UserItem';
import './App.css';
import AddUsersForm from './components/AddUsersForm';
import UserList from './components/UserList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: '#F0FFF3',
      color: '#363940',
      users: [
      ]
    };
  }

  render() {
    return(
      <div className="App" style = {{background: this.state.background, color: this.state.color}}>

        <AddUsersForm />

        <h1>List Users</h1>
        <UserList users={this.state.users} />

        <p>Change Background Color</p>
        <input type='color' onChange={(event) => this.handleBackgroundColor(event)}/>
        
        <p>Change Text Color</p>
        <input type='color' onChange={(event) => this.handleTextColor(event)} />
      </div>
    );
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({users: data})
      })
  }

  handleBackgroundColor(event) {
    console.log(event.target.value);
    this.setState({background: event.target.value});
  }

  handleTextColor(event) {
    console.log(event.target.value);
    this.setState({color: event.target.value});
  }
}

export default App;