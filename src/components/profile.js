import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    if (!this.props.profile) {
      return <div>No Profile</div>
    }
    return (
      <div id="profile">
        <div className="col-sm-6 text-centered">
          <img src={this.props.profile[0].image} />
          <h3>{this.props.profile[0].name}</h3>
          <button type="button" className="btn btn-danger">Delete Account</button>
        </div>
        <div className="col-sm-6">
          <h5>Privacy</h5>
          <div>
            <label className="custom-control custom-checkbox">
              <input style={{marginRight:'10px'}} type="checkbox" className="custom-control-input" checked={this.props.profile[0].email_privacy}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Send me emails</span>
            </label>
            <label className="custom-control custom-checkbox">
              <input style={{marginRight:'10px'}} type="checkbox" className="custom-control-input" checked={this.props.profile[0].push_privacy}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Send me push notifications</span>
            </label>
          </div>
          <h5 style={{marginTop:'20px'}}>Settings</h5>
          <h6 style={{marginTop:'20px'}}>Change Password</h6>
          <form className="form-inline">
            <div className="form-group">
              <label for="inputPassword6">Password</label>
              <input type="password" id="inputPassword6" className="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
              <p style={{marginTop:'10px'}}>
                <label for="inputPassword6">New Password</label>
                <input type="password" id="inputPassword6" className="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
                <small id="passwordHelpInline" className="text-muted">
                  Must be 8-20 characters long.
                </small>
              </p>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
          <h6 style={{marginTop:'20px'}}>Update Email</h6>
          <form className="form-inline">
            <div className="form-group">
              <p style={{marginTop:'10px'}}>
                <label for="inputPassword6">Email</label>
                <input type="email" id="inputEmail6" value={this.props.profile[0].email} className="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
              </p>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
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
