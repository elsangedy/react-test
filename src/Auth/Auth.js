import React, { Component } from 'react'

import './Auth.css'

class Auth extends Component {
  state = {
    signIn: false,
    signUp: false
  }

  handleClick(box) {
    this.setState({
      signIn: box === 'signIn',
      signUp: box === 'signUp'
    })
  }

  render() {
    const container = ['Auth__Container']
    const boxSignIn = ['Auth__Box Auth__Box--signIn']
    const boxSignUp = ['Auth__Box Auth__Box--signUp']

    if (this.state.signIn || this.state.signUp) {
      container.push('Auth__Container--open')

      if (this.state.signIn) {
        boxSignIn.push('Auth__Box--open')
      } else {
        boxSignUp.push('Auth__Box--open')
      }
    }

    return (
      <div className="Auth" {...this.props}>
        <div className={container.join(' ')}>
          <div className={boxSignIn.join(' ')} onClick={this.handleClick.bind(this, 'signIn')}>
            <div>SIGN IN</div>
          </div>
          <div className={boxSignUp.join(' ')} onClick={this.handleClick.bind(this, 'signUp')}>
            <div>SIGN UP</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Auth
