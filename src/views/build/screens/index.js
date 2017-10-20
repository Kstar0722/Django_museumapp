import React, { Component } from 'react';
import screenfull from 'screenfull';
import {Link} from 'react-router';

import {
    Button, ButtonGroup,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Progress, Modal, CardTitle, Row, ModalHeader, ModalBody,
    InputGroup, InputGroupAddon, Input, Card, CardBlock,
    Form, FormGroup, Label, FormText, FormFeedback,
     InputGroupButton, Col, Alert, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge
} from 'reactstrap';

import IconHome from 'react-icons/lib/md/home';
import IconMap from 'react-icons/lib/md/map';
import IconWalk from 'react-icons/lib/md/directions-walk';
import IconMessage from 'react-icons/lib/md/message';
import IconMenu from 'react-icons/lib/md/menu';

import {bindActionCreators} from 'redux';
import './style.css';

import { connect } from 'react-redux';

class Screens extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rSelected: 0
        };
        this.cancelBtnClick = this.cancelBtnClick.bind(this);
    }

    cancelBtnClick() {
        // check state and go to /apps/id/edit page
    }
    
    render() {
        return <div className="screens build">
            <header className="mail-head d-flex align-items-center justify-content-between p-4 animated fadeIn">
                <h6 className="text-uppercase">SCREENS</h6>
                <div className="right-elems ml-auto d-flex">
                    <Button className="mr-3" onClick={this.cancelBtnClick}><b>EXIT BUILDER</b></Button>
                    <Button color="info" className="mr-3"><b>SAVE</b></Button>
                    <Button color="primary"><b>SAVE &amp; EXIT</b></Button>
                </div>
            </header> 
            <div className="build-wrapper animated fadeInRightBig">   
                <Row>
                    <div className="col-sm-2 col-md-3">
                        <ListGroup>
                            <ListGroupItem className="justify-content-between">HOME <Badge pill><IconHome size="16" color="#ffffff"/></Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">MAPS <Badge pill><IconMap size="16" color="#ffffff"/></Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">TOURS <Badge pill><IconWalk size="16" color="#ffffff"/></Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">INTERACT <Badge pill><IconMessage size="16" color="#ffffff"/></Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">MORE <Badge pill><IconMenu size="16" color="#ffffff"/></Badge></ListGroupItem>
                        </ListGroup>  
                    </div>    
                    <div className="col-sm-2 col-md-9">
                        <div className="d-flex justify-content-between" style={{minHeight: 200}}>    
                            <div className="footer">
                                {   
                                    /*
                                    <div className={(this.state.rSelected === 2) ? 'active-tab home-tab tab' : 'home-tab tab'} onClick={() => this.onRadioBtnClick(2)}>
                                        <IconHome size="32" color="#868686" onClick={() => this.onRadioBtnClick(2)}/>
                                    </div>
                                    <div className={(this.state.rSelected === 3) ? 'active-tab map-tab tab' : 'map-tab tab'} onClick={() => this.onRadioBtnClick(3)}>
                                        <IconMap size="32" color="#868686" onClick={() => this.onRadioBtnClick(3)}/>
                                    </div>
                                    <div className={(this.state.rSelected === 4) ? 'active-tab tour-tab tab' : 'tour-tab tab'} onClick={() => this.onRadioBtnClick(4)}>
                                        <IconWalk size="32" color="#868686" onClick={() => this.onRadioBtnClick(4)}/>
                                    </div>
                                    <div className={(this.state.rSelected === 5) ? 'active-tab content-tab tab' : 'content-tab tab'} onClick={() => this.onRadioBtnClick(5)}>
                                        <IconMessage size="32" color="#868686" onClick={() => this.onRadioBtnClick(5)}/>
                                    </div>
                                    <div className={(this.state.rSelected === 1) ? 'active-tab menu-tab tab' : 'menu-tab tab'} onClick={() => this.onRadioBtnClick(1)}>
                                        <IconMenu size="32" color="#868686" />
                                    </div>
                                    */
                                }
                            </div>
                        </div>
                    </div>    
                </Row>
            </div>
        </div>
    }
};


export default connect(null)(Screens);