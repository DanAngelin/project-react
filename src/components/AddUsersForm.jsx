import React from 'react'
import '../App.css'

function AddUsersForm() {
    return (
        <div>
            <form className='addusers'>
                <label htmlFor='name'>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label htmlFor='email'>
                    Email:
                    <input type="text" name="email" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddUsersForm;
