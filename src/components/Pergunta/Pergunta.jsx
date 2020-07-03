/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
import { Container, Modal } from 'react-bootstrap'
import listaFinal from './perguntasHelper'
import './Pergunta.scss'
import sadface from '../../assets/sad.png'
import happyface from '../../assets/happy.svg'

const Pergunta = () => {
  const [pergunta, setPergunta] = useState(null)
  const [escolha, setEscolha] = useState(null)
  const [resposta, setResposta] = useState(null)
  const [confirma, setConfirma] = useState(null)
  const [confirmaVisivel, setConfirmaVisivel] = useState(false)
  const [resultadoVisivel, setResultadoVisivel] = useState(false)
  const [perguntaVisivel, setPerguntaVisivel] = useState(true)
  const [ganhando, setGanhando] = useState(true)

  const getPergunta = () => {
    const num = Math.floor(Math.random() * listaFinal.length)
    const pergunta = listaFinal.splice(num, 1)
    setPergunta(pergunta[0])
    setResposta(Number(pergunta[0].resposta))
  }

  const checkResposta = () => {
    if (escolha != null && confirma === true) {
      if (escolha === resposta) {
        console.log('ganhando')
        setGanhando(true)
      } else {
        console.log('perdendo')
        setGanhando(false)
      }
    }
  }

  const handleEscolha = (e) => {
    setConfirmaVisivel(true)
    setPerguntaVisivel(false)
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

  useEffect(() => {
    getPergunta()
  }, [])

  useEffect(() => {
    checkResposta()
  }, [confirma, escolha])

  return (
    <Container className="jogoContainer">
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
            <button className="resultado__botao resultado__botao--parar">Parar</button>
          </div>
        )}

        {ganhando === false
          && (
            <div className="resultado">
              <h3 className="resultado__titulo">Resposta errada :(</h3>
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
