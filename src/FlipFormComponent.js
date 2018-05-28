import React, { PureComponent } from 'react'
import { reduxForm, Field } from 'redux-form'
import { play } from './store/flip'

class FlipFormComponent extends PureComponent {
  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field name='bet' component='input' type='number' />
        <button type='submit'>HEADS</button>
        <button type='submit'>TAILS</button>
      </form>
    )
  }
}
const onSubmit = ({ bet }, dispatch) => {
  dispatch(play(bet))
  console.log(bet)
}
export default reduxForm({
  form: 'bet',
  onSubmit,
})(FlipFormComponent)