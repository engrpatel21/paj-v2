import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {login, logout} from '../../actions/authActions'

const NavBar = ({ auth, logout }) => {
    return (
    <>
      {auth.isAuthenticated ?
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><a href=" " className="nav-link">Welcome, {auth.user ? auth.user.name : ''} </a></li>
              <li><a href="/users" className="nav-link">Users</a></li>
              <li><a href=" " className="nav-link" onClick={logout}>Log Out</a></li>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><a href="/login" className="nav-link">Log In</a></li>
              <li><a href="/users" className="nav-link">Users</a></li>
              <li><a href="/signup" className="nav-link">Sign Up</a></li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

NavBar.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, {login, logout})(NavBar);
