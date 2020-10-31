import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, logout } from "../actions/authActions";
import {Menu, Segment} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'

class NavMenu extends Component {

  handleLogout = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  render() {

    const { auth } = this.props
    const {isAuthenticated} = auth
    const loggedOut = (
      <>
        <Menu.Item 
          name='log in'
          as={NavLink}
          exact to='/login'
          className='nav-a'
        />
          <Menu.Item 
          name='sign up'
          as={NavLink}
          exact to='/signup'
          className='nav-a'
        />
      </>
    )
    const loggedIn = (
      <>
        <Menu.Item 
          name='profile'
          as={NavLink}
          exact to='/profile'
          className='nav-a'
        />
        <Menu.Item 
          name='log out'
          as={NavLink}
          exact to='/'
          isActive={()=>false}
          className='nav-a'
          onClick={this.handleLogout}
        />
      </>
    )
    return ( 
      <Segment inverted className={'zero-border'} >
      <Menu inverted pointing secondary>
        <Menu.Item
          name='home'
          as={NavLink}
          exact to ='/'
          className='nav-a'
        />
      {isAuthenticated ? loggedIn : loggedOut}
      </Menu>
    </Segment>
    )
  }
}



NavMenu.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login, logout }
)(NavMenu);
