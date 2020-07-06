/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Ranking.scss'
import trofeu from '../../assets/trophy.svg'

const Ranking = () => {
  const [resetVisivel, setResetVisivel] = useState(false)
  const ranking = JSON.parse(localStorage.getItem('ranking'))
  let top10 = []
  if (ranking) {
    top10 = ranking.sort((a, b) => b.valor - a.valor).slice(0, 10)
  }

  const handleReset = () => {
    localStorage.clear()
    setResetVisivel(false)
  }

  return (
    <>
      {ranking
        ? (
          <div className="ranking">

            <div className="ranking__bloco">
              <h1 className="ranking__titulo">Top 10</h1>
              <button className="botao botao__voltar" onClick={() => setResetVisivel(true)}>Reiniciar ranking</button>
            </div>
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

            <Link to="/" className="ranking__voltar"><button className="botao">Voltar</button></Link>

          </div>

        )
        : (
          <div className="ranking--vazio">
            <div>
              <p>Ainda não temos um ranking, que tal começarmos a jogar?</p>
              <Link to="/"><button className="botao">Voltar</button></Link>
            </div>
          </div>
        )}

      <Modal centered show={resetVisivel} backdrop="static" keyboard={false} onHide={() => setResetVisivel(false)}>
        <div className="confirmacao">
          <p className="confirmacao__titulo">Tem certeza? <br /> Não poderá voltar atrás.</p>
          <button className="confirmacao__botao confirmacao__botao--confirmar" onClick={handleReset}>Sim</button>
          <button className="confirmacao__botao confirmacao__botao--cancelar" onClick={() => setResetVisivel(false)}>Não</button>
        </div>
      </Modal>
    </>
  )
}

export default Ranking
