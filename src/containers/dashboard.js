import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  renderProjects(projects) {
    return projects.map((project) => {
      return (
        <div
          key={project.name}
        >
          {project ?
            <Link to={`/project/${project.project_id}`}>
              <div className="row new-detail">
                <span className="col-sm-4">{project.name}</span>
                <span  className="col-sm-4">Status: {project.status}</span>
                <span className="col-sm-4">{project.completed_on ? `Completed on: ${project.completed_on}` : `Started on: ${project.started_on}`}</span>
              </div>
            </Link>
          : null}
        </div>
      );
    });
  }
  render() {
    const updates = _.filter(this.props.projects, { 'new': true });
    const complete = _.filter(this.props.projects, { 'complete': true });
    const notComplete = _.filter(this.props.projects, { 'new': false, 'complete': false, 'new':false });
    return (
      <div id="dashboard">
        <h3>Create New Project</h3>
        <button className="btn btn-info" type="button" data-toggle="modal" data-target="#exampleModalDash" >
         + Create
        </button>

        <div className="modal fade" id="exampleModalDash" tabIndex="-1" role="dialog" aria-labelledby="exampleModalDash" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalDashLabel">Create New Project</h5>
                <button type="button" className="close" data-dismiss="modal" ariaLabel="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Select category</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option value='Glasses'>Glasses</option>
                      <option value='Watches'>Watches</option>
                      <option value='Towels'>Towels</option>
                      <option value='Hats'>Hats</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Input Quantity</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="2000"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Uplaod Specs</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-info">Create</button>
              </div>
            </div>
          </div>
        </div>

        {updates.length ?
          <div>
            <h3>New Updates</h3>
            {this.renderProjects(updates)}
          </div> : null
        }
        {complete.length ?
          <div>
            <h3>Completed</h3>
            {this.renderProjects(complete)}
          </div> : null
        }
        {complete.length ?
          <div>
            <h3>Other Prjoects</h3>
            {this.renderProjects(notComplete)}
          </div> : null
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps)(Dashboard);
