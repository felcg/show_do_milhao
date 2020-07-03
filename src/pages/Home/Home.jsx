import React from 'react'
import { Container, Button } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import './home.scss'

const Home = () => (
  <Container className="homeContainer">
    <img src={logo} alt="logo do show do milhão" />
    <p>Está pronto para começar o jogo?</p>
    <Button className="botao__jogar">Jogar</Button>
  </Container>
)

export default Home
