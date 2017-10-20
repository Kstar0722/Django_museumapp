import React, { Component } from 'react';
import screenfull from 'screenfull';
import {Link} from 'react-router';

import {
    Button, ButtonGroup,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Progress, Modal, CardTitle, Row, ModalHeader, ModalBody,
    InputGroup, InputGroupAddon, Input, Card, CardBlock,
    Form, FormGroup, Label, FormText, FormFeedback,
     InputGroupButton, Col, Alert
} from 'reactstrap';

import {bindActionCreators} from 'redux';

import { connect } from 'react-redux';

class More extends Component {
    constructor(props) {
        super(props);
        this.cancelBtnClick = this.cancelBtnClick.bind(this);
    }

    cancelBtnClick() {
        // check state and go to /apps/id/edit page
    }
    
    render() {
        return <div className="more build">
            <header className="mail-head d-flex align-items-center justify-content-between p-4 animated fadeIn">
                <h6 className="text-uppercase">MORE</h6>
                <div className="right-elems ml-auto d-flex">
                    <Button className="mr-3" onClick={this.cancelBtnClick}><b>EXIT BUILDER</b></Button>
                    <Button color="info" className="mr-3"><b>SAVE</b></Button>
                    <Button color="primary"><b>SAVE &amp; EXIT</b></Button>
                </div>
            </header>
            <div className="build-wrapper animated fadeInRightBig">
                <h6 className="mb-4 text-uppercase">SOCIAL MEDIA ACCOUNTS</h6>
                <Row>
                    <div className="col-sm-6 col-md-2 new-tour">
                    </div>
                </Row>
            </div>
        </div>
    }
};


export default connect(null)(More);