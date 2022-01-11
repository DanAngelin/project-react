import React from 'react';
import './App.css';
import AddUsersForm from './components/AddUsersForm';
import PostList from './components/PostList';
import UserList from './components/UserList'

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
        <input type='color' onChange={(event) => this.handleBackgroundColor(event)}/>
        
        <p>Change Text Color</p>
        <input type='color' onChange={(event) => this.handleTextColor(event)} />

         {/* BTN HIDE - DISPLAY  */}

        <div className='btn-display'>
        <input 
          type="button" 
          value="Hide Users"
          onClick={() => this.handleUsers()} 
        />

        <input 
          type="button" 
          value="Hide Posts"
          onClick={() => this.handlePosts()} 
        />
        </div>

        {
          this.state.usersHideDisplay ?
          <div>
            <h1>List Users</h1>
            <UserList users={this.state.users} />
          </div> :
          null
        }
        
        {
          this.state.postsHideDisplay ?
          <div>
            <h1>List Posts</h1>
            <PostList posts={this.state.posts} />
          </div> :
          null
        }
      </div>
    );
  }

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