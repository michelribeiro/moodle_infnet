import React, { Component } from "react";
import { ListGroupItem } from 'react-bootstrap';
import { paths, autentication, services, wsfunction } from "../config/path";
var moment = require('moment');

class ListTps extends Component {

    constructor(props) {
        super(props);

        this.index = `tpList_${props.key_id}`;
        
        this.state = {
            late: false,
            [this.index]: []
        }

        // this.state[this.index] = [];
    }
    
    getIndex() {
        return this.index
    }

    getTps() {

        fetch(paths.PATH_BASE +services.MOODLEJSON+"&" + autentication.WSTOKEN+JSON.parse(sessionStorage.getItem('token'))+wsfunction.GET_ASSIGNMENTS+services.DETAIL_COURSE+this.props.listTp.id+services.FILE_URL+services.FILTER)
        .then(response => response.json())
        .then(items => this.setApiListTps(items.courses[0].assignments))
        .catch(error => console.log("Error: ", error))

    }

    setApiListTps(list) {
        let listTps = {};
        listTps[this.getIndex()] = list;

        this.setState(listTps);
        this.getCompetencies()
    }

    getCompetencies() {
        
        console.log(paths.PATH_BASE+services.MOODLEJSON+services.COURSE+this.props.listTp.id+services.FILTER+services.FILE_URL+wsfunction.COMPETENCE+autentication.WSTOKEN+JSON.parse(sessionStorage.getItem('token')))
    }

    componentWillMount() {
        let listTps = {};
        let sessionStorageIndex = sessionStorage.getItem(this.getIndex());
        listTps[this.getIndex()] = JSON.parse(sessionStorageIndex);

        if(sessionStorageIndex) {
            this.setState(listTps)
        }
    }

    componentDidMount() {
        this.getTps();
    }

    componentWillUpdate(nextProps, nextState) {
        sessionStorage.setItem(
            this.getIndex(),
            JSON.stringify(nextState[this.getIndex()])
        );
    }

    convertDate(convert) {
        if(convert && convert !=0) {
            let convDate = new Date(convert * 1000);
            let dateDue = convDate.toLocaleDateString();
            return dateDue
        }
        return "There's no date!"
    }

    // calculationData() {
        
    // }

    render() {

        return (
            <span>
                {
                    this.state[this.getIndex()].map((item, key) => {
                        return (
                            <ListGroupItem key={key}>
                                {item.name}
                                <br />
                                <small className={this.state.late ? 'late' : ''}>End Date: <span>{this.convertDate(item.duedate)}</span></small>
                            </ListGroupItem>
                        )
                    })
                }
            </span>
        )
    }
}

export default ListTps;