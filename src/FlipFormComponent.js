import React, { PureComponent } from 'react'
import { reduxForm, Field } from 'redux-form'
import { play } from './store/flip'

class FlipFormComponent extends PureComponent {
  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field name='amount' component='input' type='number' />
        <Field name="choice" component="select">
          <option value="heads">HEADS</option>
          <option value="tails">TAILS</option>
        </Field>
        <button type='submit'>BET</button>
      </form >
    )
  }
}
const onSubmit = ({ amount, choice }, dispatch) => {
  dispatch(
    play(amount, choice))

}
export default reduxForm({
  form: 'bet',
  onSubmit,
  initialValues: {
    amount: 2
  }
})(FlipFormComponent)