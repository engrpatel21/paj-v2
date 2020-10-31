import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { connect } from 'react-redux'
import { login } from '../actions/authActions'
import PropTypes from 'prop-types'

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, login } = this.props;
    e.preventDefault();
    try {
      // await authService.login(this.state);
      await login(this.state)
      // Let <App> know a user has signed up!
      history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  }
  render() {
    const {email, pw} = this.state
    return (
      <main className="Login">
        <h3>Log In</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <button className="btn green">Log In</button>&nbsp;&nbsp;&nbsp;
          <Link className="btn red" to="/">
            Cancel
          </Link>
        </form>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, {login})(LoginPage);
