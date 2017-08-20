import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    if (!this.props.profile) {
      return <div>No Profile</div>
    }
    return (
      <div id="profile" className="row">
        <div className="col-sm-6 text-centered">
          <img src={this.props.profile[0].image} />
          <h3>{this.props.profile[0].name}</h3>
          <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
            Delete Account
          </button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Delete Account</h5>
                  <button type="button" className="close" data-dismiss="modal" ariaLabel="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Are you sure you wish to delete our account? You will not be able to recover.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-danger">Delete for Reals</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <h5>Privacy</h5>
          <div>
            <label className="custom-control custom-checkbox">
              <input style={{marginRight:'10px'}} type="checkbox" className="custom-control-input" defaultChecked={this.props.profile[0].email_privacy}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Send me emails</span>
            </label>
            <label className="custom-control custom-checkbox">
              <input style={{marginRight:'10px'}} type="checkbox" className="custom-control-input" defaultChecked={this.props.profile[0].push_privacy}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Send me push notifications</span>
            </label>
          </div>
          <h5 style={{marginTop:'20px'}}>Settings</h5>
          <h6 style={{marginTop:'20px'}}>Change Password</h6>
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="inputPassword6">Password</label>
              <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
              <p style={{marginTop:'10px', marginBottom:'0'}}>
                <label htmlFor="inputPassword6">New Password</label>
                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                <p><small id="passwordHelpInline" className="text-muted">
                  Must be 8-20 characters long.
                </small></p>
              </p>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
          <h6 style={{marginTop:'20px'}}>Update Email</h6>
          <form className="form-inline">
            <div className="form-group">
              <p style={{marginTop:'10px'}}>
                <label htmlFor="inputPassword6">Email</label>
                <input type="email" id="inputEmail6" defaultValue={this.props.profile[0].email} className="form-control" aria-describedby="passwordHelpInline"/>
              </p>
            </div>
            <button className="btn btn-primary" type="submit">Update</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(Profile);
