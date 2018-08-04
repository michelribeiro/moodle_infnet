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
            token: '',
            data: '',
            redirect: false,
            classes: '',
            userid: ''
        }
    }
    //pegar dados do estudante (nome e userid)
    getDataStudent() {
        let token = this.props.userData;
        if (token != "") {
            sessionStorage.setItem("token", JSON.stringify(token));
            fetch(paths.PATH_BASE + services.MOODLEJSON + autentication.WSTOKEN + token + wsfunction.DATA_USER)
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

    // pego a lista de Materias
    fetchDataClassesStudent() {
        fetch(paths.PATH_BASE + autentication.WSTOKEN + JSON.parse(sessionStorage.getItem('token')) + "&" + services.MOODLEJSON + wsfunction.COLLEGE_SUBJECTS + autentication.USERID + this.state.data.userid)
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
        sessionStorage.getItem('UserData') && this.setState({
            data: JSON.parse(sessionStorage.getItem('UserData'))
        })
        // se comentar as linhas abaixo irão ver o serviço indo buscar na api via http e não no cache.
        sessionStorage.getItem('classes') && this.setState({
            classes: JSON.parse(sessionStorage.getItem('classes'))
        })
    }

    componentDidMount() {
        if (!sessionStorage.getItem('UserData') ||
            !sessionStorage.getItem('classes')) {
            this.setState({ redirect: true })
        } else {
            this.getDataStudent();
        }
        this.convertTimeStamp();
    }

    componentWillUpdate(nextProps, nextState) {

        sessionStorage.setItem("UserData", JSON.stringify(nextState.data));
        sessionStorage.setItem("UserDataDate", Date.now());

        sessionStorage.setItem("classes", JSON.stringify(nextState.classes));
        sessionStorage.setItem("userid", JSON.stringify(nextState.data.userid));
    }

    // para converter as datas dos TPs
    convertTimeStamp() {
        let convDate = new Date(1534215300 * 1000);
        console.log("home",convDate.toLocaleDateString())
    }

    render() {

        const { data, classes } = this.state;

        if (this.state.redirect) {
            return <Redirect to='/' />
        }
        else {

            return (
                <Grid>
                    <Header dataUser={data} />
                    <Row>
                        <PanelClassesDetail classes={classes} />
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