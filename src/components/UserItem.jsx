import React from 'react';
import '../App.css';

const UserItem = function(props) {

    const { name, email, salary, image } = props;

    return(
        <div>
            <div className="image-users">
                { image }
            </div>
            <h2> { name } </h2>
            <p> { email } </p>
            <p> { salary } </p>
        </div>
    );
}



export default UserItem;