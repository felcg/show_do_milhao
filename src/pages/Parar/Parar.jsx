import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import parar from '../../assets/parar.jpg'
import hehe from '../../assets/embarrassed.svg'
import './Parar.scss'

const Parar = () => {
  const dinheiro = useSelector((state) => state.dinheiro)

  return (
    <div className="telaParar">
      <div className="telaParar__tituloContainer">
        <img className="telaParar__emoji" src={hehe} alt="emoji envergonhado" />
        {dinheiro === 0
          ? <h1 className="telaParar__titulo">Você não ganhou nada :( <br /> Mas dinheiro não é tudo!</h1>
          : <h1 className="telaParar__titulo">Muito bem, você ganhou <br /> <span>R${dinheiro.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}!!!</span></h1>}
        <img className="telaParar__emoji" src={hehe} alt="emoji envergonhado" />
      </div>
      <img className="telaParar__imagem" src={parar} alt="meme com o texto 'não posso responder errado se eu não responder'" />
      <Link to="/"><button className="telaParar__botao telaParar__botao--voltar">Voltar</button></Link>
      <Link to="/jogo"><button className="telaParar__botao telaParar__botao--jogarDeNovo">Jogar de novo</button></Link>
    </div>
  )
}

export default Parar
