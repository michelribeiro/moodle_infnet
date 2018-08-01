import React, { Component } from "react";
import {Glyphicon, Grid, Row, Col} from 'react-bootstrap';
import Alert from 'react-bootstrap/lib/Alert';
import Header from "../components/Header"
import { Redirect } from "react-router-dom";
import { paths, autentication, services, wsfunction } from "../config/path";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data      : '',
            redirect  : false
        }
    }

	getDataStudent() {
        const token = this.props.UserData;
        if(token !="") {
            const dataStudent = paths.PATH_BASE+autentication.WSTOKEN+token+services.MOODLEJSON+wsfunction.DATA_USER;
            fetch(dataStudent)
            .then(response => response.json())
            .then(data => this.setApi(data))
            .catch(error => console.log("Error: ", error))
        }
    }

    setApi(data) {
        this.setState(
            {
                data: data
            }
        )        
    }

    componentWillMount() {
        localStorage.getItem('UserData') && this.setState({
            data: JSON.parse(localStorage.getItem('UserData'))
        })
    }
    
    componentDidMount() {
        if(!localStorage.getItem('UserData')) {
            this.setState({redirect: true})
        } else {
            this.getDataStudent()
        }
        
    }

	componentWillUpdate(nextProps, nextState) {
        localStorage.setItem("UserData", JSON.stringify(nextState.data));
        localStorage.setItem("UserDataDate", Date.now())
	}

    render() {
        if(this.state.redirect) {
            return <Redirect to='/' />
        }
        else {
            

            return (
                <Grid>
                    <Header dataUser={this.state.data} />

                    {/* <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <p>1 coluna{}</p>
                            {this.state.data.fullname}
                        </Col>
                    </Row> */}


                    <Alert bsStyle="warning">
                        <Glyphicon glyph="bullhorn" />
                        <h2>Essa é a home</h2>
                        <p>Bem vindo. </p>
                        <a href="#/detail">Ir para o detalhe</a>
                    </Alert>
                </Grid>
            )
        }
    }
}

export default Home;