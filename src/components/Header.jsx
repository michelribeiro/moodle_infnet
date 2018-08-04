import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import "../scss/header"

class Header extends Component {

    render() {
       const { dataUser } = this.props;

        return (
            <header>
                <Row>
                    <Col xs={12} sm={8} className="headerTitle">
                    <p>ADS
                        <small>/ Moodle Data - Infnet</small>
                    </p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <section className="box_user">
                            <Image src={dataUser.userpictureurl} circle />
                            <p>Olá {dataUser.firstname}.</p>
                        </section>
                    </Col>
                </Row>
            </header>
            
        )
    }
}
export default Header;