import React from 'react';
import '../App.css';

const UserItem = function(props) {

    const { name, email, salary, image, isGoldClient } = props;

    return(
        <div>
            <div className="image-users">
                { image }
            </div>
            <h2> { name } </h2>
            <p> { email } </p>
            <p> { salary } </p>
            { isGoldClient.includes('.io') || isGoldClient.includes('.biz') ? <h3>Client Gold</h3> : <h3>Client Silver</h3>}
        </div>
    );
}



export default UserItem;