import React, { Component } from 'react'
import HomeContent from './components/HomeContent'
import SignUpForm from './components/SignUpForm'
import Layout from './components/Layout'
import Teamwork from './static/teamwork.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <HomeContent />
          <img src={Teamwork} />
          <SignUpForm />
        </Layout>
      </div>
    )
  }
}
export default App
