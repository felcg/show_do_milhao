import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container, Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { alteraNome } from '../../reducers/nomeReducer'
import logo from '../../assets/logo.png'
import './home.scss'

const Home = () => {
  const [modalVisivel, setModalVisivel] = useState(false)
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = () => {
    history.push('/jogo')
  }

  return (
    <Container className="homeContainer">
      <img src={logo} alt="logo do show do milhão" />
      <p>Está pronto para começar o jogo?</p>
      <Button className="botao__jogar" onClick={() => setModalVisivel(true)}>Jogar</Button>
      <Link to="/ranking"><Button className="botao__jogar">Ranking</Button></Link>

      <Modal centered show={modalVisivel} onHide={() => setModalVisivel(false)}>
        <div className="nome">
          <p className="nome__titulo">Por favor me diga seu nome:</p>
          <form className="nomeForm" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="nomeForm__inputText"
              type="text"
              name="nome"
              ref={register({ required: true, maxLength: 10 })}

              onChange={(e) => dispatch(alteraNome(e.target.value))}
            />
            {errors.nome && errors.nome.type === 'required' && <span className="nomeForm__erro">O nome é obrigatório</span>}
            {errors.nome && errors.nome.type === 'maxLength' && <span className="nomeForm__erro">O limite de caracteres é 10</span> }
            <input className="botao__jogar nomeForm__inputBotao" type="submit" value="Enviar" />
          </form>

        </div>
      </Modal>
    </Container>
  )
}

export default Home
