import { createStore, combineReducers } from 'redux';
import { reducer as flipReducer } from './flip'
const reducer = combineReducers({
  flip: flipReducer,
})

const store = createStore(reducer)

export default store