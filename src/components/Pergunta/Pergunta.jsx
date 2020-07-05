/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Modal, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { alteraValor } from '../../reducers/dinheiroReducer'
import listaFinal from './perguntasHelper'
import shuffle from '../../utils/shuffle'

import Valores from '../Valores/Valores'

import './Pergunta.scss'
import sadface from '../../assets/sad.png'
import happyface from '../../assets/happy.svg'
import carta from '../../assets/cartas black.svg'
import placa from '../../assets/placas black.svg'
import convidados from '../../assets/convidado black.svg'
import pular from '../../assets/skip black.svg'
import parar from '../../assets/stop black.svg'
import rei from '../../assets/HEART-13-KING.svg'
import um from '../../assets/HEART-1.svg'
import dois from '../../assets/HEART-2.svg'
import tres from '../../assets/HEART-3.svg'

const Pergunta = () => {
  const [pergunta, setPergunta] = useState(null)
  const [escolha, setEscolha] = useState(null)
  const [resposta, setResposta] = useState(null)
  const [confirma, setConfirma] = useState(null)
  const [cartaEscolhida, setCartaEscolhida] = useState(null)
  const [aviso, setAviso] = useState('')
  const [pulos, setPulos] = useState(3)
  const [genios, setGenios] = useState(1)
  const [placas, setPlacas] = useState(1)
  const [cartas, setCartas] = useState(1)
  const [respostasGenios, setRespostasGenios] = useState([])
  const [respostasPlacas, setRespostasPlacas] = useState([])
  const [escolhasCartas, setEscolhasCartas] = useState([])
  const [confirmaVisivel, setConfirmaVisivel] = useState(false)
  const [avisoVisivel, setAvisoVisivel] = useState(false)
  const [geniosVisivel, setGeniosVisivel] = useState(false)
  const [placasVisivel, setPlacasVisivel] = useState(false)
  const [cartasVisivel, setCartasVisivel] = useState(false)
  const [confirmaPararVisivel, setConfirmaPararVisivel] = useState(false)
  const [resultadoVisivel, setResultadoVisivel] = useState(false)
  const [ganhando, setGanhando] = useState()
  const [tempo, setTempo] = useState(60)
  const [intervalo, setIntervalo] = useState()

  const dinheiro = useSelector((state) => state.dinheiro)
  const dispatch = useDispatch()
  const jogador = useSelector((state) => state.nome)

  const pararTimer = () => {
    clearInterval(intervalo)
  }

  const timer = () => {
    let sec = 61
    setIntervalo(setInterval(() => {
      sec -= 1
      setTempo(sec)
      if (sec === 0) {
        pararTimer()
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

    if (dinheiro > 50000 && dinheiro < 500000) {
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
    setConfirmaPararVisivel(true)
  }

  const handleEscolha = (e) => {
    setConfirmaVisivel(true)
    setEscolha(Number(e.target.dataset.number) + 1)
  }

  const handleProxima = () => {
    getPergunta()
    setResultadoVisivel(false)
  }

  const handleComecarDeNovo = () => {
    dispatch(alteraValor(0))
    setPulos(3)
    setPlacas(1)
    setCartas(1)
    setGenios(1)
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

  const handlePular = () => {
    if (pulos === 0) {
      setAviso('Seus pulos acabaram :(')
      setAvisoVisivel(true)
    } else {
      getPergunta()
      setPulos(pulos - 1)
    }
  }

  const handleGenios = () => {
    if (genios === 0) {
      setAviso('Sua ajuda dos Gênios acabou :(')
      setAvisoVisivel(true)
    } else {
      const random = Math.floor((Math.random() * 4) + 1)
      const geniosArray = [resposta, resposta, resposta, random]
      setRespostasGenios(shuffle(geniosArray))
      setGenios(genios - 1)
      setGeniosVisivel(true)
    }
  }

  const handlePlacas = () => {
    if (placas === 0) {
      setAviso('Sua ajuda das Placas acabou :(')
      setAvisoVisivel(true)
    } else {
      const getRandom = () => {
        const number = Math.floor((Math.random() * 4) + 1)
        return number
      }

      const placasArray = []

      Array.from({ length: 4 }, () => (placasArray.push(getRandom(), resposta)))

      setRespostasPlacas(shuffle(placasArray))
      setPlacas(placas - 1)
      setPlacasVisivel(true)
    }
  }

  const limparPerguntas = (carta) => {
    let valor = ''
    switch (carta) {
    case ('K'):
      valor = 0
      break
    case ('A'):
      valor = 1
      break
    case ('2'):
      valor = 2
      break
    case ('3'):
      valor = 3
      break
    default:
      0
    }

    if (pergunta !== null) {
      const alternativasArray = []
      const restante = pergunta.alternativas.map((a, i) => i + 1)
      const index = restante.indexOf(resposta)
      restante.splice(index, 1)

      restante.map((numero) => {
        const questao = document.getElementById(`alternativa${numero}`)
        return alternativasArray.push(questao)
      })

      Array.from({ length: valor }).map((x, index) => {
        const desabilitada = alternativasArray[index]
        desabilitada.style.pointerEvents = 'none'
        desabilitada.style.background = '#5a5a5a'
        desabilitada.style.color = '#dedede'
        return null
      })
    }
  }

  const handleCartas = () => {
    if (cartas === 0) {
      setAviso('Sua ajuda das Cartas acabou :(')
      setAvisoVisivel(true)
    } else {
      const CartasArray = [
        { str: 'K', img: rei },
        { str: 'A', img: um },
        { str: '2', img: dois },
        { str: '3', img: tres },
      ]

      setEscolhasCartas(shuffle(CartasArray))
      setCartas(cartas - 1)
      setCartasVisivel(true)
    }
  }

  const escolheCarta = (e) => {
    const div = e.target
    div.style.border = 'none'
    div.style.padding = '0'
    const carta = e.target.querySelector('img')
    carta.style.display = 'block'
    const cartas = document.getElementsByClassName('cartas')[0]
    cartas.style.pointerEvents = 'none'

    setInterval(() => {
      setCartasVisivel(false)
    }, 1000)

    setCartaEscolhida(carta.dataset.str)
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
    pararTimer()
  }, [resultadoVisivel])

  useEffect(() => {
    pararTimer()
    timer()
  }, [pergunta])

  useEffect(() => {
    if (pergunta !== null) {
      limparPerguntas(cartaEscolhida)
    }
  }, [cartaEscolhida])

  useEffect(() => {
    if (confirma === true) {
      checkResposta()
      setConfirma(false)
    }
  }, [confirma])

  return (
    <>
      <Container className="jogoContainer">

        <div className="nomeJogador"><span className="nomeJogador__tag">Jogador(a):</span> {jogador} </div>
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
            <p key={alternativa} className="questao__alternativa" id={`alternativa${index + 1}`} data-number={index} onClick={(e) => handleEscolha(e)}>
              <span>{alternativa.substring(0, 2)}</span>
              {alternativa.substring(2)}
            </p>
          ))}
        </div>
      )}

        <Valores />

      </Container>

      <div className="decisoesContainer">
        <div className="decisoes">
          <div onClick={handleParar} role="button" aria-hidden>
            <img className="decisoes__imagem" src={parar} alt="circulo branco com letra x no meio" />
            <p className="decisoes__texto">PARAR</p>
          </div>
        </div>
        <div className="decisoes">
          <div onClick={handlePular} role="button" aria-hidden>
            <img className="decisoes__imagem" src={pular} alt="seta para a direita" />
            <p className="decisoes__quantidade">{pulos}</p>
            <p className="decisoes__texto">PULAR</p>
          </div>
        </div>
        <div className="decisoes">
          <div onClick={handleGenios} role="button" aria-hidden>
            <img className="decisoes__imagem" src={convidados} alt="chapeu de estudante graduado" />
            <p className="decisoes__quantidade">{genios}</p>
            <p className="decisoes__texto">GÊNIOS</p>
          </div>
        </div>
        <div className="decisoes">
          <div onClick={handlePlacas} role="button" aria-hidden>
            <img className="decisoes__imagem" src={placa} alt="imagem de placas empilhadas" />
            <p className="decisoes__quantidade">{placas}</p>
            <p className="decisoes__texto">PLACAS</p>
          </div>
        </div>
        <div className="decisoes">
          <div onClick={handleCartas} role="button" aria-hidden>
            <img className="decisoes__imagem" src={carta} alt="imagem de cartas" />
            <p className="decisoes__quantidade">{cartas}</p>
            <p className="decisoes__texto">CARTAS</p>
          </div>
        </div>
      </div>

      <Modal centered show={confirmaVisivel} onHide={() => setConfirmaVisivel(false)}>
        <div className="confirmacao">
          <p className="confirmacao__titulo">Você está certo(a) disso, {jogador}?</p>
          <button className="confirmacao__botao confirmacao__botao--confirmar" onClick={() => handleConfirma(true)}>Sim</button>
          <button className="confirmacao__botao confirmacao__botao--cancelar" onClick={() => handleConfirma(false)}>Não</button>
        </div>
      </Modal>

      <Modal centered show={confirmaPararVisivel} onHide={() => setConfirmaPararVisivel(false)}>
        <div className="confirmacao">
          <p className="confirmacao__titulo">Você está certo(a) disso, {jogador}?</p>
          <Link to="/parar">
            <button className="confirmacao__botao confirmacao__botao--confirmar" onClick={pararTimer}>Sim</button>
          </Link>
          <button className="confirmacao__botao confirmacao__botao--cancelar" onClick={() => setConfirmaPararVisivel(false)}>Não</button>
        </div>
      </Modal>

      <Modal centered show={resultadoVisivel} onHide={() => setResultadoVisivel(false)}>

        {ganhando === true && (
          <div className="resultado">
            <h3 className="resultado__titulo">Certa resposta!</h3>
            <img className="resultado__imagem" src={happyface} alt="emoji de rosto feliz" />
            <button className="resultado__botao resultado__botao--continuar" onClick={handleProxima}>Continuar</button>
            <Link to="/parar"><button className="resultado__botao resultado__botao--parar" onClick={pararTimer}>Parar</button></Link>
            <h5 className="resultado__valorAtual">(saia com R${dinheiro.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')})</h5>
          </div>
        )}

        {ganhando === false
          && (
            <div className="resultado">
              {tempo > 0 ? <h3 className="resultado__titulo">Resposta errada :(</h3> : <h3 className="resultado__titulo">O tempo acabou :(</h3>}
              <img className="resultado__imagem" src={sadface} alt="emoji de rosto triste" />
              <button className="resultado__botao resultado__botao--continuar" onClick={handleComecarDeNovo}>Começar novo jogo</button>
              <Link to="/"><button className="resultado__botao resultado__botao--parar" onClick={pararTimer}>Voltar para o início</button></Link>
            </div>
          )}

      </Modal>

      <Modal centered show={avisoVisivel} onHide={() => setAvisoVisivel(false)}>
        <div className="aviso">
          <p className="aviso__titulo">{aviso}</p>
          <button className="aviso__botao aviso__botao--confirmar" onClick={() => setAvisoVisivel(false)}>Ok</button>
        </div>
      </Modal>

      <Modal centered show={geniosVisivel} onHide={() => setGeniosVisivel(false)}>
        <div className="genios">
          <p className="genios__titulo">Nossos Gênios conversaram e essas foram as escolhas feitas:</p>
          <div className="genios__escolhas">
            {respostasGenios.map((resposta) => (
              <div className="genios__escolhas__escolha">{resposta}</div>
            ))}
          </div>
          <button className="genios__botao genios__botao--confirmar" onClick={() => setGeniosVisivel(false)}>Ok</button>
        </div>
      </Modal>

      <Modal centered show={placasVisivel} onHide={() => setPlacasVisivel(false)}>
        <div className="placas">
          <p className="placas__titulo">Nossa plateia fez as seguites escolhas:</p>
          <div className="placas__escolhas">
            {respostasPlacas.map((resposta) => (
              <div className="placas__escolhas__escolha">{resposta}</div>
            ))}
          </div>
          <button className="placas__botao placas__botao--confirmar" onClick={() => setPlacasVisivel(false)}>Ok</button>
        </div>
      </Modal>

      <Modal centered show={cartasVisivel} onHide={() => setCartasVisivel(false)}>
        <div className="cartas">
          <p className="cartas__titulo">{jogador}, escolha uma das cartas a seguir:</p>
          <div className="cartas__escolhas">
            {escolhasCartas.map((resposta) => (
              <div onClick={(e) => escolheCarta(e)} role="button" aria-hidden key={resposta.str} className="cartas__escolhas__escolha">
                <img className="cartas__escolhas__escolha--escondida" src={resposta.img} alt="circulo branco com letra x no meio" data-str={resposta.str} />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Pergunta
