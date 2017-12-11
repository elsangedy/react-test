import React, { Component } from 'react'

import Auth from './Auth/Auth'
import { Panel, Card } from './Panel'

const Header = () => (
  <div>My Header Component</div>
)

class DemoPanel extends Component {
  state = {
    body: null
  }

  onOpen() {
    return new Promise((resolve, reject) => setTimeout(() => {
      setTimeout(() => this.setState({
        body: <Header />
      }), 100)

      resolve()
    }, 2000))
  }

  onClose() {
    return new Promise((resolve, reject) => setTimeout(resolve, 4000))
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Panel>
          <Card title="Account" header={<Header />} body={this.state.body} onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} />
          <Card title="Access" header="header content access" body={<Auth style={{ height: '500px' }} />} />
        </Panel>
      </div>
    )
  }
}

export default DemoPanel
