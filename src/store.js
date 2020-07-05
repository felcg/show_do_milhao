// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import dinheiroReducer from './reducers/dinheiroReducer'
import nomeReducer from './reducers/nomeReducer'

const reducer = combineReducers({
  dinheiro: dinheiroReducer,
  nome: nomeReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(),
)

export default store
