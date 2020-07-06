const perguntasReducer = (state = [], action) => {
  switch (action.type) {
  case 'ALTERA_PERGUNTAS':
    return action.perguntas
  default:
    return state
  }
}

export const alteraPerguntas = (perguntas) => ({
  type: 'ALTERA_PERGUNTAS',
  perguntas,
})

export default perguntasReducer
