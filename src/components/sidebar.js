import React, { Component } from 'react';
import { Link} from 'react-router-dom'

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar col-sm-4 col-md-3 col-lg-2">
        <div className="sidebar-img-conainer">
          <img className="sidebar-img" src="http://www.trysourcify.com/images/sourcify-logo-dark.png"/>
        </div>
        <Link to="/"><li><i className="fa fa-fw fa-home" />Dashboard</li></Link>
        <Link to="/profile"><li><i className="fa fa-fw fa-user" />Profile</li></Link>
        <Link to="/partners"><li><i className="fa fa-fw fa-address-card" />Partner<span className="badge badge-secondary">4</span></li></Link>
      </div>
    );
  }
}

export default SideBar;
