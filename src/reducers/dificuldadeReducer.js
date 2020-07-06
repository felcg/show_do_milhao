const dificuldadeReducer = (state = 'Fácil', action) => {
  switch (action.type) {
  case 'ALTERA_DIFICULDADE':
    return action.dificuldade
  default:
    return state
  }
}

export const alteraDificuldade = (dificuldade) => ({
  type: 'ALTERA_DIFICULDADE',
  dificuldade,
})

export default dificuldadeReducer
