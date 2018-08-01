import React, { Component } from "react";

import { Panel, FormGroup, FormControl, HelpBlock, Alert } from 'react-bootstrap';
import "../scss/login";
import { paths, services, autentication } from "../config/path";
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Redirect } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userid      : '',
			formValid   : false,
            password    : ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.buildUrl = this.buildUrl.bind(this);
      }
      
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      

      buildUrl() {
        const pathLogin = paths.LOGIN+autentication.USERNAME+this.state.userid+autentication.PASSWORD+encodeURIComponent(this.state.password)+services.SERVICE;
        this.props.handleSubmit(pathLogin);
      }    

    render() {
        if (this.props.redirect)
            return <Redirect to='/home' />;
        else
        return (
            <div className="login">
                <div className="containerLogin">
                    {
                        this.props.boxError &&
                            <Alert bsStyle="danger">
                                {this.props.message}
                            </Alert>
                    }
                    <Panel>
                        <Panel.Heading>
                            Access to infnet moodle data
                        </Panel.Heading>
                        <Panel.Body>
                            <form>
                                <FormGroup
                                    controlId="userid"
                                    bsSize="large">
                                    <FormControl
                                        value={this.state.userid}
                                        onChange={this.handleInputChange}
                                        type="text"
                                        name="userid"
                                        placeholder="user.name" />
                                    <FormControl.Feedback />
                                    <HelpBlock><p>Ex: user.name<strike>@ai.infnet.edu.br</strike></p></HelpBlock>
                                </FormGroup>

                                <FormGroup
                                    controlId="password"
                                    bsSize="large">
                                    <FormControl
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        placeholder="Password" />
                                    <FormControl.Feedback />
                                </FormGroup>
                                <a className="btn btn-primary btn-lg btn-block" disabled={this.state.formValid} onClick={this.buildUrl.bind(this)}>Login</a>
                            </form>
                        </Panel.Body>
                    </Panel>
                </div>
            </div>

        )
    }
}

export default Login;