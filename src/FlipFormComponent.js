import React, { PureComponent } from 'react'
import { reduxForm, Field } from 'redux-form'

class FlipFormComponent extends PureComponent {
  render() {
    return (
      <form>
        <Field name='bet' component='input' type='number' />
        <button type='submit'>HEADS</button>
        <button type='submit'>TAILS</button>
      </form>
    )
  }
}

export default reduxForm({ form: 'bet' })(FlipFormComponent)