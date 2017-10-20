import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
import {Collapse} from 'reactstrap';

// icons
import ScrollArea from 'react-scrollbar';

import IconInfo from 'react-icons/lib/md/info';
import IconMap from 'react-icons/lib/md/map';
import IconBlurOn from 'react-icons/lib/md/blur-on';
import IconZone from 'react-icons/lib/md/settings-input-antenna';
import IconWalk from 'react-icons/lib/md/directions-walk';
import IconAdd from 'react-icons/lib/md/add-box';
import IconRestaurant from 'react-icons/lib/md/local-restaurant';
import IconMore from 'react-icons/lib/md/more';
import IconScreens from 'react-icons/lib/md/view-quilt';
import IconMessage from 'react-icons/lib/md/message';

import './style.css';


class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }
    handleClick = (index, e) => {
        let c = e.currentTarget.className;
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            selected: (c.indexOf('selected') >= 0) ? '' : index
        })
    }
    handleOpen = (index, e) => {
        e.stopPropagation();
        this.setState({
            selected: index
        })
    }


    render() {
        return <div>
            <header className="nav-head">
                <Link to={'/apps/' + this.context.router.params.id + '/build/info'}>
                    <img src="/images/builder.png" />
                </Link>
                <div className={`toggle-dot ${this.props.mini ? 'active': ''}`} onClick={this.props.toggleNav}></div>
            </header>
            <ScrollArea className="nav-list-container build-primary" horizontal={false} verticalScrollbarStyle={{width: '4px', marginLeft: '10px'}}>
                <ul className="list-unstyled nav-list clearfix">
                    <li onClick={this.handleClick.bind(this, 0)} className={(this.state.selected === 0) ? 'selected': ''}>
                        <IndexLink to={'/apps/' + this.context.router.params.id +'/build/info'} activeClassName="active">
                            <IconInfo size="18" className="icon-dashboard"/>
                            <span className="name">General Info</span>
                        </IndexLink>
                    </li>
                    <li onClick={this.handleClick.bind(this, 1)} className={(this.state.selected === 1) ? 'selected': ''}>
                        <Link to={'/apps/' + this.context.router.params.id +'/build/screens'} activeClassName="active">
                            <IconScreens size="18"/>
                            <span className="name">App Screens</span>
                        </Link>
                    </li>
                    <li onClick={this.handleClick.bind(this, 2)} className={(this.state.selected === 2) ? 'selected': ''}>
                        <Link to={'/apps/' + this.context.router.params.id +'/build/maps'} activeClassName="active">
                            <IconMap size="18" />
                            <span className="name">Maps</span>
                        </Link>
                    </li>
                    <li onClick={this.handleClick.bind(this, 3)} className={(this.state.selected === 3) ? 'selected': ''}>
                        <Link to={'/apps/' + this.context.router.params.id +'/build/interact'} activeClassName="active">
                            <IconMessage size="18"/>
                            <span className="name">INTERACT</span>
                        </Link>
                    </li>
                    <li onClick={this.handleClick.bind(this, 4)} className={(this.state.selected === 4) ? 'selected': ''}>
                        <Link to={'/apps/' + this.context.router.params.id +'/build/beacons'} activeClassName="active">
                            <IconBlurOn size="18"/>
                            <span className="name">Beacons</span>
                        </Link>
                    </li>
                    <li onClick={this.handleClick.bind(this, 6)} className={(this.state.selected === 6) ? 'selected': ''}>
                        <Link to={'/apps/' + this.context.router.params.id +'/build/tours'} activeClassName="active">
                            <IconWalk size="18"/>
                            <span className="name">Tours</span>
                        </Link>
                    </li>
                    <li onClick={this.handleClick.bind(this, 8)} className={(this.state.selected === 8) ? 'selected': ''}>
                        <Link to={'/apps/' + this.context.router.params.id +'/build/restaurant'} activeClassName="active">
                            <IconRestaurant size="18"/>
                            <span className="name">Restaurant</span>
                        </Link>
                    </li>
                    <li onClick={this.handleClick.bind(this, 9)} className={(this.state.selected === 9) ? 'selected': ''}>
                        <Link to={'/apps/' + this.context.router.params.id +'/build/more'} activeClassName="active">
                            <IconMore     size="18"/>
                            <span className="name">More</span>
                        </Link>
                    </li>
                    {}
                </ul>
                {/* end scroll-area */}
            </ScrollArea>
        </div>
    }
}

class BuildNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <nav className={`site-build-nav  ${this.props.mini ? 'mini' : ''}`} role="navigation">
            <NavList/>
        </nav>
    }
}

NavList.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default BuildNav;