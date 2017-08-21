import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import _ from 'lodash';

class Partners extends Component {
  renderProjects(projects) {
    if (projects < 1) {
      return <div>No Projects At this time</div>
    }
    return projects.map((project_id) => {
      const project = _.find(this.props.projects, _.matches({'project_id': project_id}));
      return (
        <div
          key={project_id}
        >
          {project ?
            <Link to={`/project/${project.project_id}`}>
              <div className="row project-detail">
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
  renderPartners() {
    return this.props.partners.map((partner) => {
    //  console.log(partner.projects, this.props)
      return (
        <li
          key={partner.name}
          className="list-group-item"
        >
          <img className="partner_img" src={partner.img}/>
          <h4>{partner.name}</h4>
          <a href={`mailto:${partner.email}`}>{partner.email}</a>
          <a href={`tel:${partner.phone}`} style={{marginLeft:'20px'}}>{partner.phone}</a>
          <p>
            <button className="btn btn-info" type="button" data-toggle="collapse" data-target={`#${partner.id}`} aria-expanded="false" aria-controls={partner.id}>
              Show More
            </button>
          </p>
          <div className="collapse" id={partner.id}>
            <div className="card card-body">
              {this.renderProjects(partner.projects)}
            </div>
          </div>
        </li>
      );
    });
  }
  render() {
    if (!this.props.partners) {
      return <div>No Partners At this time</div>
    }
    return (
      <div id="partners">
        {this.renderPartners()}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    partners: state.partners,
    projects: state.projects
  };
}

export default connect(mapStateToProps)(Partners);
