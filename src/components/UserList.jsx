import React from "react";
import UserItem from "./UserItem";
import image from '../img/img1.jpg';

class UserList extends React.Component {

    render() {
        const { users } = this.props;

        return(
            <div className="Users">
                {users.map((user, index) => {
                    return <UserItem
                        name={user.name}
                        email={user.email}
                        image={<img src={ image } alt="logo user"/>}
                        isGoldClient={user.website}
                        key={index}
                    />
                })
                }
            </div>
        )
    }
}

export default UserList;