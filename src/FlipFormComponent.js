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
          <option value="1">HEADS</option>
          <option value="0">TAILS</option>
        </Field>
        <button type='submit'>BET</button>
      </form >
    )
  }
}
const onSubmit = ({ amount, choice }, dispatch) => {
  dispatch(play(amount, choice))
  //console.log('amount: ' + amount, 'choice: ' + choice, 'flipResult: ' + flipResult, 'eval: ' + (choice === flipResult))

}
export default reduxForm({
  form: 'bet',
  onSubmit,
})(FlipFormComponent)