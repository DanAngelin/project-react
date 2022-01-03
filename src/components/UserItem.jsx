import React from 'react';

const UserItem = function(props) {

    const { name, email } = props;

    return(
        <div>
            <h2 style={{color: 'red'}}> { name } </h2>
            <p> { email } </p>
        </div>
    );
}



export default UserItem;