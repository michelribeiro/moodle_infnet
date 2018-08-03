import React, { Component } from "react";
import { Glyphicon, Grid, Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import Alert from 'react-bootstrap/lib/Alert';
import Header from "../components/Header"
import PanelClassesDetail from "../components/panelClassDetail";
import { Redirect } from "react-router-dom";
import { paths, autentication, services, wsfunction } from "../config/path";


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: '',
            redirect: false,
            token: '',
            classes: '',
            userid: ''
        }
    }

    getDataStudent() {
        let token = this.props.UserData;
        if (token != "") {
            localStorage.setItem("token", JSON.stringify(token));
            let dataStudent = paths.PATH_BASE + services.MOODLEJSON + autentication.WSTOKEN + token + wsfunction.DATA_USER;
            fetch(dataStudent)
                .then(response => response.json())
                .then(studentData => this.getInfoUser(studentData))
                .catch(error => console.log("Error: ", error))
        }
    }

    getInfoUser(studentData) {
        this.setState(
            {
                data: studentData
            }
        )
        this.fetchDataClassesStudent();
    }

    fetchDataClassesStudent() {
        fetch(paths.PATH_BASE + autentication.WSTOKEN + JSON.parse(localStorage.getItem('token')) + "&" + services.MOODLEJSON + wsfunction.COLLEGE_SUBJECTS + autentication.USERID + this.state.data.userid)
            .then(response => response.json())
            .then(items => this.setApiStudentClass(items))
            .catch(error => console.log("Error: ", error))
    }

    setApiStudentClass(items) {
        this.setState(
            {
                classes: items
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
        if (!localStorage.getItem('UserData')) {
            this.setState({ redirect: true })
        } else {
            this.getDataStudent();
        }
        this.convertTimeStamp();
    }

    componentWillUpdate(nextProps, nextState) {

        localStorage.setItem("UserData", JSON.stringify(nextState.data));
        localStorage.setItem("UserDataDate", Date.now());

        localStorage.setItem("classes", JSON.stringify(nextState.classes));
        localStorage.setItem("userid", JSON.stringify(nextState.data.userid));
    }

    // para converter as datas dos TPs
    convertTimeStamp() {
        let convDate = new Date(1534215300 * 1000);
        console.log("home",convDate.toLocaleDateString())
    }

    render() {

        const { data } = this.state;
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
        else {

            return (
                <Grid>
                    <Header dataUser={data} />

                    <Row>
                        <PanelClassesDetail classes={this.state.classes} />
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