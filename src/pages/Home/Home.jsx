/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react'
import Switch from 'react-switch'
import { useForm } from 'react-hook-form'
import {
  Container, Button, Modal, Form,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { alteraNome } from '../../reducers/nomeReducer'
import { alteraTimer } from '../../reducers/timerReducer'
import { alteraDificuldade } from '../../reducers/dificuldadeReducer'
import { alteraPerguntas } from '../../reducers/perguntasReducer'
import preparaPerguntas from '../../components/Pergunta/perguntasHelper'
import logo from '../../assets/logo.png'

import './home.scss'

const Home = () => {
  const [modalVisivel, setModalVisivel] = useState(false)
  const [opcoesVisivel, setOpcoesVisivel] = useState(false)

  const timer = useSelector((state) => state.timer)
  const dificuldade = useSelector((state) => state.dificuldade)
  const { register, handleSubmit, errors } = useForm()

  const dispatch = useDispatch()
  const history = useHistory()

  const handleTimer = () => {
    dispatch(alteraTimer(!timer))
  }

  const handleDificuldade = (e) => {
    dispatch(alteraDificuldade(e.target.value))
    dispatch(alteraPerguntas(preparaPerguntas(e.target.value)))
  }

  const onSubmit = () => {
    history.push('/jogo')
  }

  useEffect(() => {
    dispatch(alteraPerguntas(preparaPerguntas(dificuldade)))
  }, [])

  return (
    <Container className="homeContainer">
      <img src={logo} alt="logo do show do milhão" />
      <p>Está pronto para começar o jogo?</p>
      <Button className="botao" onClick={() => setModalVisivel(true)}>Jogar</Button>
      <Link to="/ranking"><Button className="botao">Ranking</Button></Link>
      <Button className="botao" onClick={() => setOpcoesVisivel(true)}>Opções</Button>

      <Modal centered show={modalVisivel} onHide={() => setModalVisivel(false)} backdrop="static" keyboard={false}>
        <div className="nome">
          <p className="nome__titulo">Por favor me diga seu nome:</p>
          <form className="nomeForm" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="nomeForm__inputText"
              type="text"
              name="nome"
              ref={register({ required: true, maxLength: 15 })}

              onChange={(e) => dispatch(alteraNome(e.target.value))}
            />
            {errors.nome && errors.nome.type === 'required' && <span className="nomeForm__erro">O nome é obrigatório</span>}
            {errors.nome && errors.nome.type === 'maxLength' && <span className="nomeForm__erro">O limite de caracteres é 15</span> }
            <div className="nomeForm__botoes">
              <input className="botao nomeForm__inputBotao" type="submit" value="Enviar" />
              <Button className="botao botao__voltar nomeForm__inputBotao" onClick={() => setModalVisivel(false)}>Voltar</Button>
            </div>

          </form>

        </div>
      </Modal>

      <Modal centered show={opcoesVisivel} onHide={() => setOpcoesVisivel(false)} backdrop="static" keyboard={false}>
        <div className="opcoes">
          <p className="opcoes__titulo">Opções</p>
          <div className="opcoes__bloco">
            <p>Timer </p>
            <Switch onChange={handleTimer} checked={timer} />
          </div>
          <div className="opcoes__bloco">
            <p>Dificuldade </p>
            <Form.Control
              as="select"
              onChange={(e) => handleDificuldade(e)}
              defaultValue={dificuldade}
              className="opcoes__bloco--dificuldade"
            >
              <option hidden value="">{dificuldade}</option>
              <option>Fácil</option>
              <option>Médio</option>
              <option>Difícil</option>
            </Form.Control>
          </div>

          <Button className="botao botao__voltar" onClick={() => setOpcoesVisivel(false)}>Voltar</Button>

        </div>
      </Modal>

    </Container>
  )
}

export default Home
