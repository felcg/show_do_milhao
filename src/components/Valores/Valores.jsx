import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { alteraValor } from '../../reducers/dinheiroReducer'
import './Valores.scss'

const Valores = () => {
  const [valores, setValores] = useState({ errar: 0, parar: 0, acertar: '1 Mil' })
  const dinheiro = useSelector((state) => state.dinheiro)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleValores = (atual) => {
    const tratarNumero = (numero) => {
      const numeroTratado = numero.toString()
      if (numeroTratado.length < 4) {
        return numeroTratado
      }

      if (numeroTratado.length < 5 && numeroTratado[1] === '5') {
        return numeroTratado
      }

      if (numeroTratado.length < 5) {
        return `${numeroTratado.substring(1, 0)} MIL`
      }

      if (numeroTratado.length < 6) {
        return `${numeroTratado.substring(2, 0)} MIL`
      }

      if (numeroTratado.length < 7) {
        return `${numeroTratado.substring(3, 0)} MIL`
      }

      if (numeroTratado.length === 7) {
        return `${numeroTratado.substring(1, 0)} MILHÃO`
      }

      return numeroTratado
    }

    const acertar = (valor, lucro) => ({
      errar: tratarNumero(atual / 2),
      parar: tratarNumero(atual),
      acertar: tratarNumero(valor + lucro),
    })

    if (atual !== 0) {
      setValores(acertar(atual, 1000))
    }

    if (atual === 5000) {
      setValores(acertar(atual, 5000))
    }

    if (atual > 5000) {
      setValores(acertar(atual, 10000))
    }

    if (atual === 50000) {
      setValores(acertar(atual, 50000))
    }

    if (atual > 50000) {
      setValores(acertar(atual, 100000))
    }

    if (atual === 500000) {
      setValores({ errar: 0, parar: tratarNumero(atual), acertar: tratarNumero(1000000) })
    }

    if (atual === 1000000) {
      history.push('/vitoria')
      dispatch(alteraValor(0))
    }
  }

  useEffect(() => {
    handleValores(dinheiro)
  }, [dinheiro])

  return (
    <div className="valores">
      <div className="valores__bloco valores__bloco--errar">
        <h2>{valores.errar}</h2>
        <h3>Errar</h3>
      </div>
      <div className="valores__bloco valores__bloco--parar">
        <h2>{valores.parar}</h2>
        <h3>Parar</h3>
      </div>
      <div className="valores__bloco valores__bloco--acertar">
        <h2>{valores.acertar}</h2>
        <h3>Acertar</h3>
      </div>
    </div>
  )
}

export default Valores
