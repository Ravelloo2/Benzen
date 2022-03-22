import React, { Component } from 'react';
import axios from "axios";
export default class CreatePersonal extends Component {
    constructor(props) {
        super(props)
        this.onChangefName = this.onChangefName.bind(this);
        this.onChangelName = this.onChangelName.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangebKonto = this.onChangebKonto.bind(this);
        this.state = {
            fName: '',
            lName: '',
            email: '',
            bKonto: ''
        }
    }

    onChangefName(e) {
        this.setState({ fName: e.target.value })
    }
    onChangelName(e) {
        this.setState({ lName: e.target.value })
    }
    onChangeemail(e) {
        this.setState({ email: e.target.value })
    }
    onChangebKonto(e) {
        this.setState({ bKonto: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const personalObject = {
            fName: this.state.fName,
            lName: this.state.lName,
            email: this.state.email,
            bKonto: this.state.bKonto
        };
        axios.post('http://localhost:3001/personal', personalObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({
            fName: '',
            lName: '',
            email: '',
            bKonto: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label className='fName'>Förnamn:</label><br />
                <input type="text" value={this.state.fName} onChange={this.onChangefName} className='fName'></input><br />

                <label className='lName'>Efternamn:</label><br />
                <input type="text" value={this.state.lName} onChange={this.onChangelName} className='lfName'/><br />

                <label className='email'>Mail:</label><br />
                <input type="text" value={this.state.email} onChange={this.onChangeemail} className='email'/><br />

                <label className='bKonto'>Bankkonto:</label><br />
                <input type="number" value={this.state.bKonto} onChange={this.onChangebKonto} className='bKonto'/><br />

                <input type='submit' value="Create Personal" id='submitBtn' />
            </form>
        )
    }

}

