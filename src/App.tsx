import React, { Component } from 'react'
import HomeContent from './components/HomeContent'
import Layout from './components/Layout'
import Image from './components/Image'
import Teamwork from './static/teamwork.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <HomeContent />
          <Image image={Teamwork} />
        </Layout>
      </div>
    )
  }
}
export default App
