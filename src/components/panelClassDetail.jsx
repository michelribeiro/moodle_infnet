import React, { Component } from "react";
import { Col, Panel, ListGroup } from 'react-bootstrap';
import ListTps from './listTps'

class PanelClassesDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: ''
        }
    }

    changeNameClass(name) {
        return name
    }

    render() {
        const { classes } = this.props;
        return (
            <div>

                {
                    classes.length > 0 ?
                        classes.filter((visible) => { return visible.category === 441 }).map((item, key) => {
                            return (
                                <Col xs={12} md={4} key={key}>
                                    <Panel>
                                        <Panel.Heading>{this.changeNameClass(item.fullname)}</Panel.Heading>
                                        <Panel.Body>
                                            <ListGroup>
                                                <ListTps listTp={item} />
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