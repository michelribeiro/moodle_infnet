import React, { Component } from "react";
import {Glyphicon, Grid, Row, Col, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import Alert from 'react-bootstrap/lib/Alert';
import Header from "../components/Header"
import { Redirect } from "react-router-dom";
import { paths, autentication, services, wsfunction } from "../config/path";
import { format } from "util";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data      : '',
            redirect  : false,
            token     : '',
            classes   : '',
            userid    : ''
        }
    }

	getDataStudent() {
        let token = this.props.UserData;
        if(token !="") {
            localStorage.setItem("token", JSON.stringify(token));
            let dataStudent = paths.PATH_BASE+services.MOODLEJSON+autentication.WSTOKEN+token+wsfunction.DATA_USER;
            fetch(dataStudent)
            .then(response => response.json())
            .then(data => this.getInfoUser(data))
        }
    }

    getInfoUser(data) {
        this.setState(
            {
                data: data
            }
        )
        this.fetchDataClassesStudent();
    }

    fetchDataClassesStudent() {
        fetch(paths.PATH_BASE+autentication.WSTOKEN+ JSON.parse(localStorage.getItem('token')) +"&"+services.MOODLEJSON+wsfunction.COLLEGE_SUBJECTS+autentication.USERID+this.state.data.userid)
        .then(response => response.json())
        .then(classes => this.setApiStudentClass(classes))
        .catch(error => console.log("Error: ", error))
    }

    setApiStudentClass(classes) {
        this.setState(
            {
                classes: classes
            }
        )
    }

    componentWillMount() {
        localStorage.getItem('UserData') && this.setState({
            data: JSON.parse(localStorage.getItem('UserData'))
        })
        // se comentar as linhas abaixo irão ver o serviço indo buscar na api via http e não no cache.
        localStorage.getItem('classes') && this.setState({
            classes: JSON.parse(localStorage.getItem('classes'))
        })
    }
    
    componentDidMount() {
        if(!localStorage.getItem('UserData')) {
            this.setState({redirect: true})
        } else {
            this.getDataStudent();
            if(!this.state.userid) {
                this.fetchDataClassesStudent();
            }
        }
    }

	componentWillUpdate(nextProps, nextState) {
        
        localStorage.setItem("UserData", JSON.stringify(nextState.data));
        localStorage.setItem("UserDataDate", Date.now());

        localStorage.setItem("classes", JSON.stringify(nextState.classes));
        localStorage.setItem("userid", JSON.stringify(nextState.data.userid));
    }

    render() {
        
        const { data } = this.state;

        if(this.state.redirect) {
            return <Redirect to='/' />
        }
        else {

            return (
                <Grid>
                    <Header dataUser={data} />

                    <Row className="show-grid">
                        <Col xs={12} md={12}>

                        <Panel>
                            <Panel.Heading>Your classes</Panel.Heading>
                            <Panel.Body>
                                <ListGroup>

                                    {
                                        this.state.classes.length > 0 ?
                                        this.state.classes.filter((visible) => { return visible.category === 441}).map((item, key) => {
                                            return (
                                                <ListGroupItem key={key}>{item.fullname}</ListGroupItem>
                                            )
                                        }) : null
                                    }
                                    

                                </ListGroup>
                            </Panel.Body>
                        </Panel>


                        </Col>
                    </Row>


                    <Alert bsStyle="warning">
                        <Glyphicon glyph="bullhorn" />
                    </Alert>
                </Grid>
            )
        }
    }
}

export default Home;