import React from "react";
import UserItem from "./UserItem";
import image from '../img/img1.jpg';
import '../App.css';

class UserList extends React.Component {
    render() {
        const { users, handleDelete } = this.props;

        return(
            <div className="users-list">
                {users.map((user, index) => {
                    return <UserItem
                        name={user.name}
                        email={user.email}
                        image={<img src={ image } alt="logo user"/>}
                        btnDelUser={<button 
                                            className="btn-delete"
                                            onClick={() => handleDelete(user.id)}>
                                            Delete User
                                    </button>}
                        isGoldClient={ user.isGoldClient }
                        key={index}
                    />
                })
                }
            </div>
        )
    }
}

export default UserList;