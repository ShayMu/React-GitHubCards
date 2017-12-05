import React from 'react';
import axios from 'axios';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userNameInput: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.get(`https://api.github.com/users/${this.state.userNameInput}`)
            .then((response) => {
                this.props.onSubmit(response.data);
                this.setState({ userNameInput: '' });
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter Git Username..."
                    value={this.state.userNameInput}
                    onChange={(event) => this.setState({ userNameInput: event.target.value })} />
                <button type="submit">Add Card</button>
            </form>
        );
    }
};

export default Form;