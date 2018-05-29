import { createStore, combineReducers } from 'redux';
import { reducer as flipReducer } from './flip'
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
  flip: flipReducer,
  form: formReducer,
})

const store = createStore(reducer)

export default store