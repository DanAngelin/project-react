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

    // Reset Input Value

    resetInputValue(event) {
        event.preventDefault();
        event.target.reset();
        this.setState({
            name: '',
            email: '',
            isGoldClient: false
        })
      };


    render() {
        const { name, email, isGoldClient } = this.state;
        const { submitAddForm } = this.props;

        return (
            <div>
                <h2>Add Users</h2>
                <form className='add-users'
                onSubmit={(event) => {submitAddForm(event, name, email, isGoldClient); this.resetInputValue(event)}}>

                    <label htmlFor='name'>
                        Name:
                        <input  type="text" name="name" className='input-name'
                                onChange={(event) => this.updateName(event)} 
                                value={this.state.name}
                        />
                    </label>

                    <label htmlFor='email'>
                        Email:
                        <input  type="text" name="email" className='input-email' placeholder='xyz@email.com'
                                onChange={(event) => this.updateEmail(event) } 
                                value={this.state.email}
                        />
                    </label>

                    <label htmlFor="is-gold-client">
                        Client Gold:
                        <input  type="checkbox"
                                name="is-gold-client"
                                value="true"
                                onChange={(event) => this.updateIsGoldClient(event)} checked={isGoldClient}
                        />
                    </label>

                    <input type="submit" value="Submit" className='btn-submit'  />
                </form>
                </div>
        )
    }
}

export default AddUsersForm;
