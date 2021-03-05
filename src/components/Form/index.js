import React, { useState } from 'react'
import Link from '../Button'
// import { useHistory } from 'react-router-dom'
import { Container, Label, Required, Note, Input, Dropdown } from './styles'
import { dependencies } from '../../utils/dependencies'

const Form = () => {
  // const history = useHistory()

  const [data, setData] = useState({
    dependencia: ''
    // temporalidad: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.dependencia === '') {
      alert('Llene los campos obligatorios')
    } else {
      // console.log(data)
      fetch('https://neo-analytics-backend.herokuapp.com/api/dependencies/details', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.dependencia
        })
      })
        .then(res => res.json())
        // .then(({ dependence }) => setSearch(dependence))
        .then(response => console.log(response))
    }

    // history.push(`/dashboard?name=${search?.name}`)
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
      {/* <div>{search?.name}</div> */}
      <Container>
        <Label>
          Dependencia <Required>*</Required>
          {/* <Input onChange={handleInputChange} type="text" name="dependencia"/> */}
          <Input list="dependencias" onChange={handleInputChange} name="dependencia" />
          <datalist id="dependencias">
            {
              dependencies.map(item => (
                <option value={item} key={item}></option>
              ))
            }
          </datalist>
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
