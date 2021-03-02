import React, { useState } from 'react'
import Button from '../Button'
import { Container, Label, Required, Note, Input, Dropdown } from './styles'

const Form = () => {
  const [data, setData] = useState({
    dependencia: '',
    temporalidad: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if(data.dependencia === ""){
      alert("Llene los campos obligatorios")
    } else{
      console.log("Enviando datos..." + data.dependencia + data.temporalidad)
    }
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
    <Container onSubmit={handleSubmit}>
      <Label>
        Dependencia <Required>*</Required>
      </Label>
      <Input onChange={handleInputChange} type="text" name="dependencia"/>
      <Label>
         Temporalidad
      </Label>
      <Dropdown onChange={handleDropdownChange}>
        <option></option>
        <option value="ultimo-mes" name="ultimo-mes">Último mes</option>
        <option value="3-meses" name="3-meses">3 meses</option>
        <option value="6-meses" name="6-meses">6 meses</option>
        <option value="ultimo-anho" name="ultimo-anho">Último año</option>
        <option value="2020" name="2020">2020</option>
        <option value="2019" name="2019">2019</option>
      </Dropdown>
      <Note>* Campos obligatorios</Note>
      <Button>
        BUSCAR
      </Button>
    </Container> 
  )
}

export default Form
