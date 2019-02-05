import validator from 'validator'

interface IValidation {
  [field: string]: any
}

interface IRule {
  [field: string]: any
}
interface IState {
  [field: string]: any
}
class FormValidation {
  validations: object[]

  constructor(validations: object[]) {
    this.validations = validations
  }

  validate(state: IRule) {
    let validation = this.valid()

    this.validations.forEach((rule: IRule) => {
      if (!validation[rule.field].isInvalid) {
        const field_value = state[rule.field].toString()
        const args = rule.args || []
        const validation_method =
          typeof rule.method === 'string'
            ? (validator as any)[rule.method]
            : rule.method
        if (validation_method(field_value, ...args, state) !== rule.validWhen) {
          validation[rule.field] = { isInvalid: true, message: rule.message }
          validation.isValid = false
        }
      }
    })

    return validation
  }

  valid() {
    let validation: IValidation = {}

    this.validations.map(
      (rule: IRule) =>
        (validation[rule.field] = { isInvalid: false, message: '' })
    )

    return { isValid: true, ...validation } as { [key: string]: any }
  }
}

export default FormValidation
