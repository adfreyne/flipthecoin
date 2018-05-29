import { createStore, combineReducers } from 'redux';
import { reducer as flipReducer } from './flip'
import { reducer2 as calcReducer } from './flip'

import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
  flip: flipReducer,
  form: formReducer,
  calc: calcReducer,
})

const store = createStore(reducer)

export default store