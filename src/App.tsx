import React, { Component } from 'react'
import NavBar from './components/NavBar'
import HomeContent from './components/HomeContent'
import Layout from './components/Layout'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Layout>
          <HomeContent />
        </Layout>
      </div>
    )
  }
}
export default App
