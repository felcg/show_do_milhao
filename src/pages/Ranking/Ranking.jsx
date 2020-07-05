/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Link } from 'react-router-dom'
import './Ranking.scss'
import trofeu from '../../assets/trophy.svg'

const Ranking = () => {
  const ranking = JSON.parse(localStorage.getItem('ranking'))
  let top10 = []
  if (ranking) {
    top10 = ranking.sort((a, b) => b.valor - a.valor).slice(0, 10)
  }

  return (
    <>
      {ranking
        ? (
          <div className="ranking">

            <h1 className="ranking__titulo">Top 10 Jogadores</h1>
            {top10.map((jogador, index) => (
              index + 1 === 1
                ? (
                  <div key={index} className="ranking__fileira--campeao">
                    <img className="telaVitoria__trofeu" src={trofeu} alt="imagem de um troféu" />
                    <p className="ranking__fileira--nome">{jogador.nome}</p>
                    <p className="ranking__fileira--valor">R${(jogador.valor).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                  </div>
                )
                : (
                  <div key={index} className="ranking__fileira">
                    <p className="ranking__fileira--posicao">{index + 1} </p>
                    <p className="ranking__fileira--nome">{jogador.nome}</p>
                    <p className="ranking__fileira--valor">R${(jogador.valor).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                  </div>
                )
            ))}

            <Link to="/" className="ranking__voltar"><button className="botao__jogar">Voltar</button></Link>
          </div>
        )
        : (
          <div className="ranking--vazio">
            <div>
              <p>Ainda não temos um ranking, que tal começarmos a jogar?</p>
              <Link to="/"><button className="botao__jogar">Voltar</button></Link>
            </div>
          </div>
        )}
    </>
  )
}

export default Ranking
