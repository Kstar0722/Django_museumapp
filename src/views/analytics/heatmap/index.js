import React, { PropTypes } from 'react';
import {
    CardGroup, Card, CardBlock, CardTitle, CardSubtitle, Row, Progress,
    Nav, NavItem, NavLink
} from 'reactstrap';
import {
    BarChart, Bar, Tooltip
} from 'recharts';
import {Link, IndexLink} from 'react-router';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { loadApps } from '../../../actions/appsActions';

// icons
import IconDatabase from 'react-icons/lib/fa/database';
import IconProduct from 'react-icons/lib/fa/cube';
import IconDownload from 'react-icons/lib/fa/download';
import IconProfit from 'react-icons/lib/fa/credit-card';
import IconFacebook from 'react-icons/lib/fa/facebook-square';
import IconTwitter from 'react-icons/lib/fa/twitter-square';

const ViewHeader = () => (
    <div className="view-header">
        <header className="text-white">
            <h1 className="h5 title text-uppercase">Analytics</h1>
            <p className="mb-0 subtitle">One of our main goals to create additional revenue for you. Here is where you can see the result of our mission.</p>
        </header>
    </div>
);

const ViewContent = ({children}) => (
    <div className="view-content view-components">
        {children}
    </div>
);

class Heatmap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadApps();
    }
    
    render() {
        const apps = this.props.apps;
        
        return (
            <div className="view">
            <ViewHeader/>
            <ViewContent>
                {/* widget set - 1 */}
                <Card>
                    <CardBlock>
                        <Nav pills>
                          <NavItem>
                            <Link to="/analytics" className="nav-link">In App Purchases</Link>
                          </NavItem>
                          <NavItem>
                            <Link to="/analytics/downloads" className="nav-link">App Downloads</Link>
                          </NavItem>
                          <NavItem>
                            <Link to="/analytics/engagement" className="nav-link">Engagement</Link>
                          </NavItem>
                          <NavItem>
                            <Link to="/analytics/heatmap" className="nav-link active">Heat Map</Link>
                          </NavItem>
                        </Nav>
                    </CardBlock>
                </Card>
                <Card>
                    <CardBlock>
                        <CardTitle className="text-uppercase h6">App Heatmaps</CardTitle>
                        <CardSubtitle className="small mb-4 card-subtitle">Select an App to see a heatmap</CardSubtitle>
                        <Row>
                            { 
                                apps.map(function(item, index) {
                                    return <div className="mb-4 col-sm-6 col-md-2 existing-tour" key={index}>
                                        <Card style={{background: `url(${item.cover_image})`}}>
                                            <CardBlock>
                                                <Link to={'/analytics/heatmap/' + item.id}>
                                                </Link>
                                            </CardBlock>
                                        </Card>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center justify-content-center title">
                                                <p className="info">{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </Row>
                    </CardBlock>
                </Card>
            </ViewContent>
            </div>
        )
    }
}


Heatmap.propTypes = {
  apps: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    apps: state.apps.apps
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadApps }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Heatmap);
