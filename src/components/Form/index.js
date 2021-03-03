import React, { useState } from 'react'
import Link from '../Button'
import { useHistory } from 'react-router-dom'
import { Container, Label, Required, Note, Input, Dropdown } from './styles'

const Form = () => {
  const history = useHistory()

  const [data, setData] = useState({
    dependencia: '',
    temporalidad: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.dependencia === '') {
      alert('Llene los campos obligatorios')
    } else {
      console.log('Enviando datos...' + data.dependencia + data.temporalidad)
    }

    history.push('/dashboard')
  }

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleDropdownChange = (e) => {
    console.log(e.target)
    setData({
      ...data,
      temporalidad: e.target.value
    })
  }

  return (
    <>
      <Container>
        <Label>
          Dependencia <Required>*</Required>
          <Input onChange={handleInputChange} type="text" name="dependencia"/>
        </Label>
        <Label>
          Temporalidad
          <Dropdown onChange={handleDropdownChange}>
            <option></option>
            <option value="ultimo-mes" name="ultimo-mes">Último mes</option>
            <option value="3-meses" name="3-meses">3 meses</option>
            <option value="6-meses" name="6-meses">6 meses</option>
            <option value="ultimo-anho" name="ultimo-anho">Último año</option>
            <option value="2020" name="2020">2020</option>
            <option value="2019" name="2019">2019</option>
          </Dropdown>
        </Label>
        <Note>* Campos obligatorios</Note>
      </Container>
      <Link handleSubmit={handleSubmit}>
        Buscar
      </Link>
    </>
  )
}

export default Form
