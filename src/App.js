import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import FormContainer from './components/formContainer.jsx';
import TableContainer from './components/tableContainer.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: []
        }

        axios.get('/contacts')
            .then((response) => {
                if (response.data.succ) {
                    console.log(response.data.result);
                    this.setState({ contacts: response.data.result });
                }
                else
                    alert(response.data.result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    addNewContact(contact) {

        axios.post('/contacts', contact)
            .then((response) => {
                if (response.data.succ)
                    this.setState({ contacts: this.state.contacts.concat(response.data.result) });
                else
                    alert(response.data.result);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    removeContact(contact, index) {

        axios.delete('/contacts/' + contact._id, {})
            .then((response) => {
                if (response.data.succ){
                    const temp = this.state.contacts;
                    temp.splice(index, 1);
                    this.setState({contacts: temp}); 
                }
                else
                    alert(response.data.result);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="App">
                <Header />
                <FormContainer handleSubmit={contact => this.addNewContact(contact)} />
                <TableContainer handleRemove={(contact,index) => this.removeContact(contact, index)} contacts={this.state.contacts} />
            </div>
        );
    }

}
export default App;