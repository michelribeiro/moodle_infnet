import React, { Component } from "react";
import { ListGroupItem } from 'react-bootstrap';
import { paths, autentication, services, wsfunction } from "../config/path";

class ListTps extends Component {

    constructor(props) {
        super(props);

        this.state = {
            performanceTestListing: ''
        }
    }
    
    getTps() {
        fetch(paths.PATH_BASE +services.MOODLEJSON+"&" + autentication.WSTOKEN+JSON.parse(localStorage.getItem('token'))+wsfunction.GET_ASSIGNMENTS+services.DETAIL_COURSE+this.props.listTp.id+services.FILE_URL+services.FILTER)
            .then(response => response.json())
            .then(items => this.setApiListTps(items.courses[0].assignments))
            .catch(error => console.log("Error: ", error))
    }

    setApiListTps(list) {
        this.setState({performanceTestListing: list})
        console.log(">>>", this.state.performanceTestListing)
    }

    componentDidMount() {
        this.getTps();
    }

    componentWillMount() {
        localStorage.getItem('performanceTestListing') && this.setState({
            performanceTestListing: JSON.parse(localStorage.getItem('performanceTestListing'))
        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem("performanceTestListing", JSON.stringify(nextState.performanceTestListing));
    }

    convertDate(convert) {
        let convDate = new Date(convert * 1000);
        return convDate.toLocaleDateString();
    }

    render() {
        return (
            <span>
                {
                    this.state.performanceTestListing.length > 0 ?

                        this.state.performanceTestListing.map((item, key) => {
                            return (
                                <ListGroupItem key={key}>
                                    {item.name}
                                    <br />
                                    <small>end Date: {this.convertDate(item.duedate)}</small>
                                </ListGroupItem>
                            )
                        })
                    : null
                }
            </span>
        )
    }
}

export default ListTps;