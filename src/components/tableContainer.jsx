import React from 'react';
import axios from 'axios';
import ContactCell from './contactCell.jsx'

class TableContainer extends React.Component {

    render() {
        return(
            <div class="table-container">
            <table class="table table-striped table-inverse">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>e-mail</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.contacts.map((contact, index)=>{
                        return <ContactCell handleRemove={this.props.handleRemove} index={index} contact={contact}/>;
                    })}
                </tbody>
            </table>
        </div>
        );
    }

}

export default TableContainer;