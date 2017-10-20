import React from 'react';
import BuildNav from './shared/components/buildnav';
import { logout } from './actions/authActions';
import { connect } from 'react-redux';
import './build.css';
import IconFace from 'react-icons/lib/md/face';
import IconHome from 'react-icons/lib/md/home';
import IconMap from 'react-icons/lib/md/map';
import IconAudio from 'react-icons/lib/md/directions-walk';
import IconMessage from 'react-icons/lib/md/message';
import IconMenu from 'react-icons/lib/md/menu';

class BuildWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navMini: false,
            isIphone: true,
            rSelected: 0
        };

        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav = (e) => {
        e.preventDefault();
        this.setState({navMini: !this.state.navMini});
    }
    
    hideNav = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({navMini: false})
    }

    handleLogout = (e) => {
        e.preventDefault();
        this.props.logout();
        this.context.router.push('/pages/signin');
    }

    render() {
        let navMini = this.state.navMini;
        return (
            <div className="builder app-wrapper">
                <BuildNav mini={navMini} toggleNav={this.toggleNav}/>
                <div className={`content-container ${navMini ? 'full' : ''}`}>
                    {/* dropshadow for mobile nav triggering */}
                    <div className="build-device-screen">
                        {
                            /*
                            <div id="device" className={(this.state.isIphone) ? 'iphone' : 'ipad'}>
                                <div id="devicetop" className="iphone-speaker">
                                </div>
                                <div id="screen" className={(this.state.isIphone) ? 'iphone-screen' : 'ipad-screen'}>
                                    <div className="header">
                                        <div className="text-center" style={{color: "#262626", fontSize: 14}}>
                                            
                                            <IconFace size="16" color="#262626" className="profile"/>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <div className="home-tab tab">
                                            <IconHome size="16" color="#868686"/>
                                        </div>
                                        <div className="map-tab tab">
                                            <IconMap size="16" color="#868686"/>
                                        </div>
                                        <div className="active-tab tour-tab tab">
                                            <IconAudio size="16" color="#868686"/>
                                        </div>
                                        <div className="content-tab tab">
                                            <IconMessage size="16" color="#868686"/>
                                        </div>
                                        <div className="menu-tab tab">
                                            <IconMenu size="16" color="#868686" />
                                        </div>
                                    </div>
                                    <div className="audio selected">
                                        <div className="screen-wrapper">                               
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div id="button" onClick={this.ipadSwitch}>
                                        <div id="button-square">
                                        </div>
                                    </div>
                                </a>
                            </div> 
                            */
                        }     
                        <div className="iphone-x">
                            <div className="outer">
                              <div className="inner">
                                <div className="clock"></div>
                                <div className="notch">
                                  <div className="speaker"></div>
                                  <div className="camera"></div>
                                </div>
                                <div className="screen-container">
                                  <div className="fullscreen-bg">
                                    <div className="footer">
                                        <div className="active-tab home-tab tab">
                                            <IconHome size="16" color="#868686"/>
                                        </div>
                                        <div className="map-tab tab">
                                            <IconMap size="16" color="#868686"/>
                                        </div>
                                        <div className="tour-tab tab">
                                            <IconAudio size="16" color="#868686"/>
                                        </div>
                                        <div className="content-tab tab">
                                            <IconMessage size="16" color="#868686"/>
                                        </div>
                                        <div className="menu-tab tab">
                                            <IconMenu size="16" color="#868686" />
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="home-swipe"></div>
                              </div>
                            </div>
                        </div>
                    </div>              
                    <div className="build-page-screen-fixed">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}


BuildWrapper.propTypes = {
  logout: React.PropTypes.func.isRequired
}

BuildWrapper.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { logout })(BuildWrapper);
