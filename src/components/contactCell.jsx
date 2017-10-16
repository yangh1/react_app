import React from 'react';

class ContactCell extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(event){
        this.props.handleRemove(this.props.contact, this.props.index);
    }

    render() {
        return (
            <tr>
                <td>{this.props.contact.firstName}</td>
                <td>{this.props.contact.lastName}</td>
                <td>{this.props.contact.phone}</td>
                <td>{this.props.contact.email}</td>
                <td>
                    <button onClick={this.handleRemove} type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }

}
export default ContactCell;