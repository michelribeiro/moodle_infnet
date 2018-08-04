import React, { Component } from "react";
import { Col, Panel, ListGroup } from 'react-bootstrap';
import ListTps from './listTps'

class PanelClassesDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
    }

    changeNameClass(name) {
        return name
    }

    componentDidMount() {

    }

    filterClasses(classes) {

        return  classes.filter((i) => {
            return i.category === 441 
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                {
                    classes.length > 0 ?
                        this.filterClasses(classes).map((item, key) => {
                            return (
                                <Col xs={12} md={4} key={key}>
                                    <Panel>
                                        <Panel.Heading>{this.changeNameClass(item.fullname)}</Panel.Heading>
                                        <Panel.Body>
                                            <ListGroup>
                                                <ListTps key_id={key} listTp={item} />
                                            </ListGroup>
                                        </Panel.Body>
                                    </Panel>
                                </Col>
                            )
                        }
                    ) : null
                }
            </div>
        )
    }
}

export default PanelClassesDetail;