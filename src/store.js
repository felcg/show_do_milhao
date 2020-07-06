// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import dinheiroReducer from './reducers/dinheiroReducer'
import nomeReducer from './reducers/nomeReducer'
import dificuldadeReducer from './reducers/dificuldadeReducer'
import timerReducer from './reducers/timerReducer'
import perguntasReducer from './reducers/perguntasReducer'

const reducer = combineReducers({
  dinheiro: dinheiroReducer,
  nome: nomeReducer,
  dificuldade: dificuldadeReducer,
  timer: timerReducer,
  perguntas: perguntasReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(),
)

export default store
