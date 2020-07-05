import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import adicionarAoRanking from '../../utils/adicionarAoRanking'
import { alteraValor } from '../../reducers/dinheiroReducer'
import parar from '../../assets/parar.jpg'
import hehe from '../../assets/embarrassed.svg'
import './Parar.scss'

const Parar = () => {
  const dinheiro = useSelector((state) => state.dinheiro)
  const jogador = useSelector((state) => state.nome)
  const dispatch = useDispatch()

  useEffect(() => {
    adicionarAoRanking('ranking', { nome: jogador, valor: dinheiro })
    dispatch(alteraValor(0))
  }, [])

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
      <div className="telaParar__botoes">
        <Link to="/"><button className="telaParar__botao telaParar__botao--voltar">Voltar</button></Link>
        <Link to="/jogo"><button className="telaParar__botao telaParar__botao--jogarDeNovo">Jogar de novo</button></Link>
      </div>

    </div>
  )
}

export default Parar
