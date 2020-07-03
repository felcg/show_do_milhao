const dinheiroReducer = (state = 0, action) => {
  switch (action.type) {
  case 'ALTERA_VALOR':
    return action.valor
  case 'PARA':
    return action.valor
  case 'PERDE':
    return action.valor
  default:
    return state
  }
}

export const alteraValor = (valor) => ({
  type: 'ALTERA_VALOR',
  valor,
})

export const mantemDinheiro = (valor) => ({
  type: 'PARA',
  valor,
})

export const perdeDinheiro = (valor) => ({
  type: 'PERDE',
  valor,
})

export default dinheiroReducer
