import React from 'react';
import { Component } from 'react';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    //name: 'Claire', email: 'claire@turing.io', password: 'qwer1234'
    sendLogin() {
        console.log(this.state)
        let thePost = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: this.state.email,
                    password: this.state.password,
                }
            )
        }
        console.log(thePost)
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', thePost)
            .then(res => console.log(res.json()))
            .catch(err => console.log(err))
    }
    formUpdate(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
            <section style={mainSectionStyle}>
                <div style={divStyle}>
                    <input type="text" name="email" id="" placeholder='Username' style={inputStyle} value={this.state.email} onChange={(e) => this.formUpdate(e)}/>
                    <input type="text" name="password" id="" placeholder='Password' style={inputStyle} value={this.state.password} onChange={(e) => this.formUpdate(e)}/>
                    <button style={buttonStyle} onClick={() => this.sendLogin()}>Login</button>
                </div>
            </section>
        )
    }
}

let mainSectionStyle = {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridGap: '10px',
    alignContent: 'center',
    justifyContent: 'center',
}

let inputStyle = {
    fontFamily: 'Open Sans, sans-serif',
    marginTop: '2%',
    width: '200px',
    height: '40px',
    placeSelf: 'center'
}

let divStyle = {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '15%',
    height: '260px',
    width: '320px',
    overflowY: 'scroll',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '40',
    marginBottom: '210px',
    marginTop: '20px',
    boxShadow: '10px 15px 35px #888888',
    paddingBottom: '20px',
    placeSelf: 'center',
    backgroundColor: '#F3EED9'
}

let buttonStyle = {
    cursor: 'pointer',
    fontFamily: 'Open Sans, sans-serif',
    width: '150px',
    height: '40px',
    placeSelf: 'center',
    borderRadius: '5%',
}