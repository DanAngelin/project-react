import React from 'react';
import './App.css';
import AddUsersForm from './components/AddUsersForm';
import PostList from './components/PostList';
import UserList from './components/UserList';
import Swal from 'sweetalert2';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: '#F0FFF3',
      color: '#363940',
      users: [],
      posts: [],
      postsHideDisplay: false,
      usersHideDisplay: true
    };
  }

  render() {
    return(
      <div className="App" style = {{background: this.state.background, color: this.state.color}}>

        <AddUsersForm submitAddForm={(event, name, email, isGoldClient) =>
        this.submitAddForm(event, name, email, isGoldClient)} />

        <p>Change Background Color</p>
        <input type='color' className='input-background' onChange={(event) => this.handleBackgroundColor(event)}/>
        
        <p>Change Text Color</p>
        <input type='color' className='input-text' onChange={(event) => this.handleTextColor(event)} />

         {/* BTN HIDE - DISPLAY  */}

        <div className='btn-display'>
        <input 
          type="button" 
          value="Display Users"
          onClick={() => this.handleUsers()} 
        />

        <input 
          type="button" 
          value="Display Posts"
          onClick={() => this.handlePosts()} 
        />
        </div>

        {
          this.state.usersHideDisplay &&
          <div>
            <h1>List Users</h1>
            <UserList users={this.state.users} handleDelete={this.handleDelete}/>
          </div>
        }
        
        {
          this.state.postsHideDisplay &&
          <div>
            <h1>List Posts</h1>
            <PostList posts={this.state.posts}/>
          </div>
        }
      </div>
    );
  }
  // Button Delete Users

  handleDelete = (id) => {
    const newStateUsers = this.state.users.filter(user => user.id !== id)
    this.setState({ users: newStateUsers });
  }

  // Add Form Users

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    })
    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();
    if (name === "") {
      Swal.fire({
        title: 'Oops...',
        text: 'The name field cannot be blank',
        icon: 'warning',
        confirmButtonText: 'Okay'
      })
    } else if (!email.includes("@") || !email.includes(".") || email === "") {
      Swal.fire({
        title: 'Oops...',
        text: 'Please insert a valid email address!',
        icon: 'warning',
        confirmButtonText: 'Okay'
      })
    } else {
      this.setState(prevState => {
        return {
            users: [
              ...prevState.users,
              {
                id: this.getMaxId(prevState.users) + 1,
                name,
                email,
                isGoldClient
              }
            ]
        }
      });
    }
  }

  // FETCH API

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);

        data.forEach(user => {
          user.isGoldClient = false
        })
        this.setState({users: data})
      })

      
    fetch(urlPosts)
    .then(response => response.json())
    .then(data => {
      this.setState({posts: data})
    })
  }

  // CHANGE COLOR - BACKGROUND TEXT

  handleBackgroundColor(event) {
    this.setState({background: event.target.value});
  }

  handleTextColor(event) {
    this.setState({color: event.target.value});
  }

  // HIDE - DISPLAY USERS POSTS

  handlePosts() {
    this.setState({
      postsHideDisplay: !this.state.postsHideDisplay,
      usersHideDisplay: !this.state.usersHideDisplay
    })
   }

   handleUsers() {
    this.setState({
      usersHideDisplay: !this.state.usersHideDisplay,
      postsHideDisplay: !this.state.postsHideDisplay
    })
   }

}

export default App;