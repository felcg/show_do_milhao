import React from 'react'
import { Link } from 'react-router-dom'
import './Vitoria.scss'
import fry from '../../assets/vitoria.jpg'
import trofeu from '../../assets/trophy.svg'

const Vitoria = () => (
  <div className="telaVitoria">
    <div className="telaVitoria__tituloContainer">
      <img className="telaVitoria__trofeu" src={trofeu} alt="imagem de um troféu" />
      <h1 className="telaVitoria__titulo">Parabéns!!!</h1>
      <img className="telaVitoria__trofeu" src={trofeu} alt="imagem de um troféu" />
    </div>
    <img className="telaVitoria__imagem" src={fry} alt="meme do fry com o texto 'você ganhou 1 milhão de reais'" />
    <Link to="/"><button className="telaVitoria__botao telaVitoria__botao--voltar">Voltar</button></Link>
    <Link to="/jogo"><button className="telaVitoria__botao telaVitoria__botao--jogarDeNovo">Jogar de novo</button></Link>
  </div>
)

export default Vitoria
