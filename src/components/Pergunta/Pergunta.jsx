/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Modal, ProgressBar } from 'react-bootstrap'
import listaFinal from './perguntasHelper'
import './Pergunta.scss'
import sadface from '../../assets/sad.png'
import happyface from '../../assets/happy.svg'
import { alteraValor } from '../../reducers/dinheiroReducer'
import Valores from '../Valores/Valores'

const Pergunta = () => {
  const [pergunta, setPergunta] = useState(null)
  const [escolha, setEscolha] = useState(null)
  const [resposta, setResposta] = useState(null)
  const [confirma, setConfirma] = useState(null)
  const [confirmaVisivel, setConfirmaVisivel] = useState(false)
  const [resultadoVisivel, setResultadoVisivel] = useState(false)
  const [ganhando, setGanhando] = useState()
  const dinheiro = useSelector((state) => state.dinheiro)
  const dispatch = useDispatch()
  const [tempo, setTempo] = useState(60)
  const [intervalo, setIntervalo] = useState()

  const timer = () => {
    let sec = 61
    setIntervalo(setInterval(() => {
      sec -= 1
      setTempo(sec)
      if (sec === 0) {
        clearInterval(intervalo)
        setResultadoVisivel(true)
        setGanhando(false)
      }
    }, 1000))
  }

  const getPergunta = () => {
    const num = Math.floor(Math.random() * listaFinal.length)
    const pergunta = listaFinal.splice(num, 1)
    setPergunta(pergunta[0])
    setResposta(Number(pergunta[0].resposta))
    clearInterval(intervalo)
    timer()
  }

  const handleGanharDinheiro = () => {
    if (dinheiro < 5000) {
      dispatch(alteraValor(dinheiro + 1000))
    }

    if (dinheiro === 5000) {
      dispatch(alteraValor(dinheiro * 2))
    }

    if (dinheiro > 5000 && dinheiro < 50000) {
      dispatch(alteraValor(dinheiro + 10000))
    }

    if (dinheiro === 50000) {
      dispatch(alteraValor(dinheiro * 2))
    }

    if (dinheiro > 50000 && dinheiro < 1000000) {
      dispatch(alteraValor(dinheiro + 100000))
    }

    if (dinheiro === 500000) {
      dispatch(alteraValor(dinheiro * 2))
    }
  }

  const handlePerderDinheiro = () => {
    dispatch(alteraValor(dinheiro / 2))
  }

  const handleParar = () => {
    dispatch(alteraValor(dinheiro))
  }

  const handleEscolha = (e) => {
    setConfirmaVisivel(true)
    setEscolha(Number(e.target.dataset.number) + 1)
  }

  const handleProxima = () => {
    getPergunta()
    setResultadoVisivel(false)
  }

  const handleResultado = (valor) => {
    setConfirmaVisivel(false)
    setResultadoVisivel(valor)
  }

  const handleConfirma = (valor) => {
    setConfirma(valor)
    setConfirmaVisivel(false)
    handleResultado(valor)
  }

  const checkResposta = () => {
    if (escolha === resposta) {
      handleGanharDinheiro()
      setGanhando(true)
    } else {
      handlePerderDinheiro()
      setGanhando(false)
    }
  }

  useEffect(() => {
    getPergunta()
  }, [])

  useEffect(() => {
    if (confirma === true) {
      checkResposta()
      setConfirma(false)
    }
  }, [confirma])

  return (
    <Container className="jogoContainer">

      <div className="timer">
        <ProgressBar>
          <ProgressBar now={tempo} max={60} variant="primary" label={`${tempo}s`} />
        </ProgressBar>

      </div>

      {pergunta != null
      && (
        <div className="questao">
          <div className="questao__tituloContainer">
            <h3 className="questao__titulo">{pergunta.titulo}</h3>
          </div>
          {pergunta.alternativas.map((alternativa, index) => (
            <p key={alternativa} className="questao__alternativa" data-number={index} onClick={(e) => handleEscolha(e)}>
              <span>{alternativa.substring(0, 2)}</span>
              {alternativa.substring(2)}
            </p>
          ))}
        </div>
      )}

      <Valores />

      <Modal centered show={confirmaVisivel} onHide={() => setConfirmaVisivel(false)}>
        <div className="confirmacao">
          <p className="confirmacao__titulo">Você está certo disso?</p>
          <button className="confirmacao__botao confirmacao__botao--confirmar" onClick={() => handleConfirma(true)}>Sim</button>
          <button className="confirmacao__botao confirmacao__botao--cancelar" onClick={() => handleConfirma(false)}>Não</button>
        </div>
      </Modal>

      <Modal centered show={resultadoVisivel} onHide={() => setResultadoVisivel(false)}>

        {ganhando === true && (
          <div className="resultado">
            <h3 className="resultado__titulo">Certa resposta!</h3>
            <img className="resultado__imagem" src={happyface} alt="emoji de rosto feliz" />
            <button className="resultado__botao resultado__botao--continuar" onClick={handleProxima}>Continuar</button>
            <button className="resultado__botao resultado__botao--parar">Parar <br />
              <h5 className="resultado__valorAtual">(saia com R${dinheiro.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')})</h5>
            </button>
          </div>
        )}

        {ganhando === false
          && (
            <div className="resultado">
              {tempo > 0 ? <h3 className="resultado__titulo">Resposta errada :(</h3> : <h3 className="resultado__titulo">O tempo acabou :(</h3>}
              <img className="resultado__imagem" src={sadface} alt="emoji de rosto triste" />
              <button className="resultado__botao resultado__botao--continuar" onClick={handleProxima}>Começar novo jogo</button>
              <button className="resultado__botao resultado__botao--parar">Voltar para o início</button>
            </div>
          )}

      </Modal>

    </Container>
  )
}

export default Pergunta
