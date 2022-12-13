// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {userInput: '', passwordInput: ''}

  getUsername = event => {
    this.setState({userInput: event.target.value})
  }

  getPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  getLogin = async event => {
    event.preventDefault()
    const {userInput, passwordInput} = this.state

    const userDetails = {userInput, passwordInput}
    // console.log(userDetails)

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
  }

  render() {
    // console.log(passwordInput)
    return (
      <div className="login-page-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt=" website login"
          className="login-img"
        />
        <div className="login-details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="log-logo"
          />
          <form onSubmit={this.getLogin}>
            <div className="input-label-cont">
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <br />
              <input
                type="text"
                id="username"
                placeholder="Username"
                onChange={this.getUsername}
                className="input"
              />
            </div>
            <div className="input-label-cont">
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <br />
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={this.getPassword}
                className="input"
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
