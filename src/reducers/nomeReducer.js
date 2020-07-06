const nomeReducer = (state = 'Jovem Gênio', action) => {
  switch (action.type) {
  case 'ALTERA_NOME':
    return action.nome
  default:
    return state
  }
}

export const alteraNome = (nome) => ({
  type: 'ALTERA_NOME',
  nome,
})

export default nomeReducer
