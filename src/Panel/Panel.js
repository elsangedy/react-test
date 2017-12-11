import React, { Component } from 'react'

import './Panel.css'

class Panel extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="Panel">
        {children}
      </div>
    )
  }
}

export default Panel
