import React from 'react'
import '../App.css'

class AddUsersForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        };
    }

    updateName(event) {
        this.setState({name: event.target.value})
    }

    updateEmail(event) {
        this.setState({email: event.target.value})
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked})
    }

    render() {
        const { name, email, isGoldClient } = this.state;
        const { submitAddForm } = this.props;

        return (
                <form className='add-users'
                onSubmit={(event) => submitAddForm(event, name, email, isGoldClient)}>
                    <h2>Add Users</h2>

                    <label htmlFor='name'>
                        Name:
                        <input type="text" name="name"
                        onChange={(event) => this.updateName(event)} />
                    </label>

                    <label htmlFor='email'>
                        Email:
                        <input type="text" name="email"
                        onChange={(event) => this.updateEmail(event)} />
                    </label>

                    <label htmlFor="is-gold-client">
                        Client Gold:
                        <input type="checkbox"
                            name="is-gold-client"
                            value="true"
                            onChange={(event) => this.updateIsGoldClient(event)}
                        />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
        )
    }
}

export default AddUsersForm;
