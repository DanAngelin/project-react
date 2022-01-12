import React from 'react';
import '../App.css';

const UserItem = function(props) {

    const { image, name, email, isGoldClient, btnDelUser } = props;

    return(
        <div>
            <div className="image-users">
                { image }
            </div>
            <h2> { name } </h2>
            <p> { email } </p>
            { isGoldClient && <h3>Client GOLD</h3> }
            { btnDelUser }
        </div>
    );
}



export default UserItem;