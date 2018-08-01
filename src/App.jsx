import React, { Component } from 'react';

import { BrowserRouter as Router, Route, HashRouter, Redirect } from "react-router-dom";
// import axios from "axios";

import Home from "./pages/Home";
import Login from "./pages/Login";

import "./scss/base";
import "./js/scrips"

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			boxError    : false,
			message     : '',
			userProfile : '',
			redirect    : false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		// this.getDataStudent = this.getDataStudent.bind(this);
	}

	// pegar token com o login
	handleSubmit(path) {
		this.fetchGetUserApi(path);
    }

	fetchGetUserApi(path) {
        fetch(path)
        .then(response => response.json())
        .then(result => this.setApiLogin(result))
        .catch(error => this.showError(error))
        event.preventDefault();
	}
	
    setApiLogin(result) {
        result.errorcode === "invalidlogin" ? this.setState({message: result.error.substring(0, 33),boxError: true}) : null
        result.errorcode === "missingparam" ? this.setState({message: "some thing wrong!",boxError: true}) : null
        !result.errorcode ? (
			this.setState(
				{
					boxError: false,
					userProfile: result.token,
					redirect: true
				}
			)) : null
	}

    showError(error) {
        this.setState(
            {
                message: `There is something wrong with server! ;)${error}`,
                boxError: true
            }
        )
    }
	
	// criar outro fetch com o token pra pegar Nome e userId

	// criar outro fetch com token e userid pra pegar as materias

	render() {
		return (
			<Router>
				<HashRouter>
					<div>
						<Route exact path="/home" render={(props) => (
							<Home UserData={this.state.userProfile} redirect={this.state.redirect} />
						)} />

						<Route exact path="/" render={(props) => (
							<Login handleSubmit={this.handleSubmit.bind(this)} message={this.state.message} redirect={this.state.redirect} boxError={this.state.boxError} />
						)} />
					</div>
				</HashRouter>
			</Router>
		)
	}
}

export default App;
