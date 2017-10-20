import React, { Component } from 'react';
import screenfull from 'screenfull';
import {Link} from 'react-router';

import {
    Button, ButtonGroup,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Progress, Modal, CardTitle, Row, ModalHeader, ModalBody,
    InputGroup, InputGroupAddon, Input, Card, CardBlock,
    Form, FormGroup, Label, FormText, FormFeedback,
    InputGroupButton, Col, Alert, ButtonToolbar,
    ButtonDropdown
} from 'reactstrap';

import {bindActionCreators} from 'redux';

import IconFace from 'react-icons/lib/md/face';
import IconChat from 'react-icons/lib/fa/comments-o';
import IconHome from 'react-icons/lib/md/home';
import IconMap from 'react-icons/lib/md/map';
import IconAudio from 'react-icons/lib/md/directions-walk';
import IconMessage from 'react-icons/lib/md/message';
import IconMenu from 'react-icons/lib/md/menu';
import IconInfo from 'react-icons/lib/md/info';
import IconLocation from 'react-icons/lib/md/location-city';
import IconEvent from 'react-icons/lib/md/event';
import IconPicture from 'react-icons/lib/md/photo';
import IconEye from 'react-icons/lib/md/remove-red-eye';
import IconNewEvent from 'react-icons/lib/md/event-available';
import IconPictures from 'react-icons/lib/md/photo-library';
import IconShare from 'react-icons/lib/md/share';
import IconQuestion from 'react-icons/lib/fa/question-circle';

import { updateApp, loadAppMore, loadAllAppTypes } from '../../../actions/appsActions';
import { loadTour, loadToursMap } from '../../../actions/tourActions';

import { connect } from 'react-redux';
import './style.css'

class General extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isIphone: true,
            rSelected: 0,
            tour: null
        };

        this.props.loadTour(this.props.router.params.id).then(
          (res) => this.setState({ tour: res.data, title : res.data.title,  description : res.data.description, price : res.data.price, langauge_id : res.data.langauge_id, type_id : res.type_id}),
          (err) => this.setState({ tour: [] })
        );

        this.cancelBtnClick = this.cancelBtnClick.bind(this);
    }

    cancelBtnClick() {
        // check state and go to /apps/id/edit page
    }

    componentDidMount() {
        this.props.loadToursMap(this.props.router.params.id);
        this.props.loadAppMore(this.props.router.params.id);
        this.props.loadAllAppTypes();
    }

    onAppUpdate = (e) => {
        e.preventDefault();
        if (this.state.title.trim() == "") {
            this.setState({ visible: true });
        } else {
            let appData = this.state.tour; 
            appData.title = this.state.title;
            appData.description = this.state.description;
            appData.language_id = this.state.language_id;
            appData.price = this.state.price;
            appData.appType = this.state.tour.type_id;
           
            this.props.updateApp(this.context.router.params.id, appData);

            this.setState({ modal: false });
        }
    }

    render() {
        const loadLanguages = this.props.languages;
        const loadCategories = this.props.categories;
        const appTypes = this.props.appTypes;
        let tour = this.state.tour;

        var el = null;

         if (this.state.tour) {
        
            el =  ( <div className="general build">
                    <header className="mail-head d-flex align-items-center justify-content-between p-4 animated fadeIn">
                        <h6 className="text-uppercase">INFORMATION</h6>
                        <div className="right-elems ml-auto d-flex">
                            <Button className="mr-3" onClick={this.cancelBtnClick}><b>EXIT BUILDER</b></Button>
                            <Button color="info" className="mr-3"><b>SAVE</b></Button>
                            <Button color="primary"><b>SAVE &amp; EXIT</b></Button>
                        </div>
                    </header> 
                    <div className="build-wrapper animated fadeInRightBig">
                        <Row>
                            <div className="col-sm-12">
                                <div className="mb-5">
                                    <ButtonGroup className="mb-3 general-tab-menu">
                                        <Button className="active">APP INFO</Button>
                                        <Button>WELCOME SCREEN</Button>
                                        <Button>BRANDING</Button>
                                    </ButtonGroup>
                                </div>
                                <Form onSubmit={this.onAppUpdate}>
                                    <FormGroup row>
                                        <Label for="appTypes" sm={3}>App Type</Label>
                                        <Col sm={9}>
                                            <Input type="select" name="type_id" value={this.state.type_id} onChange={this.onSelectChange} >
                                                {appTypes.map(function (item, index) {
                                                    return <option key={item.id} value={item.id}>{item.title}</option>
                                                })}
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={3}>Title</Label>
                                        <Col sm={9}><Input type="text" id="title" placeholder="Name your tour." value={this.state.title} name="title" onChange={this.onInputChange} /></Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleSearch" sm={3}>Description</Label>
                                        <Col sm={9}><Input type="text" id="exampleDescription" value={this.state.description} placeholder="Describe your tour." name="description" onChange={this.onInputChange} /></Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleNumber" sm={3}>Language</Label>
                                        <Col sm={9}>
                                            <Input type="select" name="language_id" onChange={this.onSelectChange} value={this.state.language_id} >
                                                {loadLanguages.map(function (item, index) {
                                                    return <option key={item.id} value={item.id}>{item.display_name}</option>
                                                })}
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleDate" sm={3}>Price</Label>
                                        <Col sm={9}>
                                            <Input type="select" name="price" onChange={this.onSelectChange} value={this.state.price}>
                                                <option value="0.0">Free</option>
                                                <option>0.49</option>
                                                <option>0.99</option>
                                                <option>1.49</option>
                                                <option>1.99</option>
                                                <option>2.99</option>
                                                <option>3.99</option>
                                                <option>4.99</option>
                                                <option>5.99</option>
                                                <option>6.99</option>
                                                <option>7.99</option>
                                                <option>8.99</option>
                                                <option>9.99</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={12} className="">
                                            <Button color="primary">Update</Button>{' '}
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </Row>
                    </div>
                </div>
            )
        }
        return el;
    }
};

function mapStateToProps(state, ownProps) {
  return {
    more: state.apps.more,
    tourMapsData: state.tours.mapsData,
    categories: state.apps.categories,
    languages: state.apps.languages,
    appTypes : state.apps.appTypes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadTour, loadToursMap, loadAppMore, updateApp, loadAllAppTypes}, dispatch)
}

General.contextTypes = {
  router: React.PropTypes.object.isRequired
};

General.propTypes = {
  loadTour: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(General);
