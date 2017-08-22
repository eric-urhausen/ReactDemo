import React, { Component } from 'react';
import { connect } from 'react-redux';

class Project extends Component {
  render() {
    const project = _.filter(this.props.projects, { 'project_id': this.props.match.params.id });
    return (
      <div id="project">
        <div className="card">
          <div className="card-header">
            <h3>Project Status</h3>
          </div>
          <div className="card-body" >
            <h4 className="card-title">Project Timeline</h4>
            <div style={{display:'inline-flex',marginBottom:'20px'}} >
              <li className="col-sm-2" style={{backgroundColor: '#fff'}}/>
              <li className={`col-sm-1 ${project[0].phase >= 1 ? 'active' : ''}`}><i className="fa fa-fw fa-2x fa-search"/><p>Finding Partners</p></li>
              <li className={`col-sm-1 ${project[0].phase >= 2 ? 'active' : ''}`}><i className="fa fa-fw fa-2x fa-handshake-o"/><p>Parnters Matched</p></li>
              <li className={`col-sm-1 ${project[0].phase >= 3 ? 'active' : ''}`}><i className="fa fa-fw fa-2x fa-cogs"/><p>Designs Sorted</p></li>
              <li className={`col-sm-1 ${project[0].phase >= 4 ? 'active' : ''}`}><i className="fa fa-fw fa-2x fa-cube"/><p>Sample Started</p></li>
              <li className={`col-sm-1 ${project[0].phase >= 5 ? 'active' : ''}`}><i className="fa fa-fw fa-2x fa-truck"/><p>Samples Shipped</p></li>
              <li className={`col-sm-1 ${project[0].phase >= 6 ? 'active' : ''}`}><i className="fa fa-fw fa-2x fa-check-circle"/><p>Samples Confirmed</p></li>
              <li className={`col-sm-1 ${project[0].phase >= 7 ? 'active' : ''}`}><i className="fa fa-fw fa-2x fa-archive"/><p>Production Complete</p></li>
              <li className={`col-sm-1 ${project[0].phase >= 8 ? 'active' : ''}`}><i className="fa fa-fw fa-2x fa-truck"/><p>Product Shipped</p></li>
              <li className="col-sm-2" style={{backgroundColor: '#fff'}}/>
            </div>
            <h4 className="card-title">Current Status Information</h4>
            <hr/>
            <div className="row">
              <div className="col-sm-6">
                <p><span><strong>STATUS: </strong></span> {project[0].status}</p>
                <p><span><strong>DATE STARTED: </strong></span> {project[0].started_on}</p>
                <p><span><strong>DATE COMPLETED: </strong></span> {project[0].completed_on}</p>
              </div>
              <div className="col-sm-6">
                <p><span><strong>NOTES: </strong></span> {project[0].notes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps)(Project);
