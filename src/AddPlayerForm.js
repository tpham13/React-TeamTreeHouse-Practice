import React from 'react';

//To add/submit player, AddPlayerForm needs access to the App.js state (player). We can use a callback props to send data up to App.js
class AddPlayerForm extends React.Component {

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value});
    }

    handleSubmit = (e) => {
        // if we don't call preventDefault on event object, it will result in the browser posting a request back to the server. 
        // that would cause our app to reload in the browser, which mean that we'd lose all of our app state in the process
        e.preventDefault();
        this.props.addPlayer(this.state.value);

    }
    render() {
        console.log(this.state.value)
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="test"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name"
                />
                <input 
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}
export default AddPlayerForm;