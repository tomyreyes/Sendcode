import React, { Component } from 'react'
import FormValidation from './utils/FormValidation'
import styled from 'styled-components'

const ContentContainer = styled.section`
  width: 50vw;
  text-align: center;
`
const Form = styled.form``
const FormInput = styled.input`
  font-size: 1.4em;
  margin-bottom: 1rem;
`
const FormLabel = styled.label`
  font-size: 1.4rem;
`
const FormButton = styled.button``
const FormTitle = styled.h1`
  font-size: 2rem;
`
const ErrorLabel = styled.div``

interface IValidation {
  [field: string]: any
}
interface IState {
  name: string
  email: string
  code: string
  validation: any
  errorMessage: any
  serverResponse: any
}

class SignUpForm extends Component<{}, IState> {
  validation: IValidation
  submitted: boolean
  state: IState

  constructor(props: any) {
    super(props)
    this.validation = new FormValidation([
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Remember to include your name.'
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'That is not a valid email.'
      },
      {
        field: 'code',
        method: this.verifyCode,
        validWhen: true,
        message: 'That is not a valid code.'
      }
    ])
    this.state = {
      name: '',
      email: '',
      code: '',
      validation: this.validation.valid(),
      errorMessage: null,
      serverResponse: null
    }

    this.submitted = false
  }

  verifyCode = () => this.state.code === '123456'
  handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value }: any = e.currentTarget
    e.preventDefault()
    this.setState({
      [name]: value
    } as IState)
  }

  handleFormSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, email, code } = this.state
    const validation = this.validation.validate(this.state)
    this.setState({ validation })
    this.submitted = true
    console.log('sent')
    // if (validation.isValid) {
    //   axios
    //     .post('http://localhost:5000/user/login', {
    //       email,
    //       password
    //     })
    //     .then(res => {
    //       this.setState({ serverResponse: res.data.message })
    //     })
    //     .catch(err => {
    //       this.setState({ serverResponse: err.message })
    //     })
    // }
  }

  public render() {
    let validation = this.submitted
      ? this.validation.validate(this.state)
      : this.state.validation

    const { serverResponse } = this.state
    return (
      <ContentContainer>
        <FormTitle>Sign Up</FormTitle>

        <Form onSubmit={this.handleFormSubmit as any}>
          <div>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput
              type="text"
              name="name"
              onChange={this.handleInputChange}
            />
            <ErrorLabel>{validation.name.message}</ErrorLabel>
          </div>
          <div>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <FormInput
              type="text"
              name="email"
              onChange={this.handleInputChange}
            />
            <ErrorLabel>{validation.email.message}</ErrorLabel>
          </div>
          <div>
            <FormLabel htmlFor="code">Code:</FormLabel>
            <FormInput
              type="text"
              name="code"
              onChange={this.handleInputChange}
            />
            <ErrorLabel>{validation.code.message}</ErrorLabel>
          </div>
          <FormButton type="submit" onClick={this.handleFormSubmit as any}>
            <FormLabel>Submit</FormLabel>
          </FormButton>
          <ErrorLabel>{serverResponse}</ErrorLabel>
        </Form>
      </ContentContainer>
    )
  }
}
export default SignUpForm
