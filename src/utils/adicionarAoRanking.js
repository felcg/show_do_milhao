const adicionarAoRanking = (name, valor) => {
  let ranking = localStorage.getItem(name)

  ranking = ranking ? JSON.parse(ranking) : []
  ranking.push(valor)

  localStorage.setItem(name, JSON.stringify(ranking))
}

export default adicionarAoRanking
