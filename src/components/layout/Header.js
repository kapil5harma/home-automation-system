import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  // goToRoute = route => {
  //   this.props.history.push(route);
  // };

  render() {
    const headerStyle = {
      background: '#343a40',
      color: '#fff',
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    return (
      <div className='Header' style={headerStyle}>
        <h2 className='heading text-center p-4 mb-0'>
          <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
            Home Automation System
          </Link>
        </h2>
        {/* <div className='links'>
          <h4 onClick={() => this.goToRoute('settings')}>Settings</h4>
          <h4 onClick={() => this.goToRoute('visualize')}>Visualize</h4>
          <h4 onClick={() => this.goToRoute('report')}>Report</h4>
        </div> */}
      </div>
    );
  }
}

export default withRouter(Header);
