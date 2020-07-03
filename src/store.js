// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import dinheiroReducer from './reducers/dinheiroReducer'

const reducer = combineReducers({
  dinheiro: dinheiroReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(),
)

export default store
