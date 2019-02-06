import React, { Component } from 'react'
import HomeContent from './components/HomeContent'
import SignUpForm from './components/SignUpForm'
import Layout from './components/Layout'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <HomeContent />
          <SignUpForm />
        </Layout>
      </div>
    )
  }
}
export default App
