import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class SideBar extends Component {
  render() {
    const newCount = _.filter(this.props.projects, { 'new': true });
    return (
      <div className="sidebar col-sm-4 col-md-3 col-lg-2">
        <div className="sidebar-img-conainer">
          <img className="sidebar-img" src="http://www.trysourcify.com/images/sourcify-logo-dark.png"/>
        </div>
        <Link to="/"><li><i className="fa fa-fw fa-home" />Dashboard<span className="badge badge-secondary">{newCount.length ? newCount.length : ''}</span></li></Link>
        <Link to="/profile"><li><i className="fa fa-fw fa-user" />Profile</li></Link>
        <Link to="/partners"><li><i className="fa fa-fw fa-address-card" />Partners<span className="badge badge-secondary">4</span></li></Link>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps)(SideBar);
