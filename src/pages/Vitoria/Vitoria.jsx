import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import adicionarAoRanking from '../../utils/adicionarAoRanking'
import { alteraValor } from '../../reducers/dinheiroReducer'
import './Vitoria.scss'
import fry from '../../assets/vitoria.jpg'
import trofeu from '../../assets/trophy.svg'

const Vitoria = () => {
  const dinheiro = useSelector((state) => state.dinheiro)
  const jogador = useSelector((state) => state.nome)
  const dispatch = useDispatch()

  useEffect(() => {
    adicionarAoRanking('ranking', { nome: jogador, valor: dinheiro })
    dispatch(alteraValor(0))
  }, [])

  return (
    <div className="telaVitoria">
      <div className="telaVitoria__tituloContainer">
        <img className="telaVitoria__trofeu" src={trofeu} alt="imagem de um troféu" />
        <h1 className="telaVitoria__titulo">Parabéns!!! <br /> Você é um gênio mesmo</h1>
        <img className="telaVitoria__trofeu" src={trofeu} alt="imagem de um troféu" />
      </div>
      <img className="telaVitoria__imagem" src={fry} alt="meme do fry com o texto 'você ganhou 1 milhão de reais'" />
      <div className="telaVitoria__botoes">
        <Link to="/"><button className="telaVitoria__botao telaVitoria__botao--voltar">Voltar</button></Link>
        <Link to="/jogo"><button className="telaVitoria__botao telaVitoria__botao--jogarDeNovo">Jogar de novo</button></Link>
      </div>
    </div>
  )
}

export default Vitoria
