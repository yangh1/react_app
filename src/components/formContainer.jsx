import React from 'react';
import axios from 'axios';

class FormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        
        if (this.state.firstName.length == 0) {
            alert("Please enter first name!");
            return;
        }
        if (this.state.lastName.length == 0) {
            alert("Please enter last name!");
            return;
        }

        this.props.handleSubmit(this.state);

        this.setState({
            firstName: "",
            lastName: "",
            phone: "",
            email: ""
        });
    }

    render() {
        return (
            <div class="form-container">
                <div class="form">
                    First Name:
                    <input
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleChange}
                    /><br />
                    Last Name:
                    <input
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleChange}
                    /><br />
                    Phone Number:
                    <input
                        type="text"
                        value={this.state.phone}
                        name="phone"
                        onChange={this.handleChange}
                    /><br />
                    e-mail:
                    <input
                        type="text"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                    /><br />
                </div>
                <button onClick={this.handleSubmit} type="button" class="btn btn-success">Add New Contact</button>
            </div>
        );
    }

}

export default FormContainer;