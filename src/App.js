import React from 'react';
import UserItem from './components/UserItem';
import './App.css';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import AddUsersForm from './components/AddUsersForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: '#F0FFF3',
      color: 'blue'
    };
  }

  render() {
    return(
      <div className="App" style = {{background: this.state.background, color: this.state.color}}>
        <AddUsersForm />
        <h1>List Users</h1>
        <UserItem image={<img src={img1} alt="logo user"/>} 
                  name="Dan Angelin" email="dan.angelin@hotmail.com" 
                  salary="15.000&#8364;"
        />
        <UserItem image={<img src={img2} alt="logo user"/>} 
                  name="Bill Walker" email="bill.walker@example.com" 
                  salary="12.500&#8364;"
        />
        <UserItem image={<img src={img3} alt="logo user"/>} 
                  name="Bessie Castillo" 
                  email="bessie.castillo@example.com" 
                  salary="13.000&#8364;"
        />
        <p>Change Background Color</p>
        <input type='color' onChange={(event) => this.handleBackgroundColor(event)}/>
        <p>Change Text Color</p>
        <input type='color' onChange={(event) => this.handleTextColor(event)} />
      </div>
    );
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