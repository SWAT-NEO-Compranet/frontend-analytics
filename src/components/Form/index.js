import React from 'react'
import Link from '../Button'
// import { useHistory } from 'react-router-dom'
import { Container, Label, Input, Dropdown } from './styles'
import search from '../../images/search.svg'
import { acronysm } from '../../utils/acronysm'
import PropTypes from 'prop-types'

const Form = ({ handleSearch, setState, state }) => {
  // const history = useHistory()

  // const [data, setData] = useState({
  //   dependencia: ''
  //   // temporalidad: ''
  // })

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleDropdownChange = (e) => {
    setState({
      ...state,
      interval: e.target.value
    })
  }

  return (
    <>
      <Container>
        <Label>
          Dependencia
          {/* <Input onChange={handleInputChange} type="text" name="dependencia"/> */}
          <Input
            list="dependencias"
            onChange={handleInputChange}
            name="dependence"
            placeholder="Escoja una dependencia"
          />
          <datalist id="dependencias">
            {
              acronysm.map(item => (
                <option value={item} key={item}></option>
              ))
            }
          </datalist>
        </Label>
        <Label>
          Temporalidad
          <Dropdown onChange={handleDropdownChange}>
            {/* <option></option> */}
            <option value="3" name="3-meses">3 meses</option>
            <option value="6" name="6-meses">6 meses</option>
            <option value="12" name="last_year">Último año</option>
            <option value="24" name="last_two_years">Últimos dos año</option>
            <option value="36" name="last_three_years">Últimos tres año</option>
            <option value="48" name="last_four_years">Últimos cuatro año</option>
            <option value="60" name="last_five_years">Últimos cinco año</option>
          </Dropdown>
        </Label>
        <Link handleSubmit={handleSearch}>
          <img src={search} alt="Lupa"/>
        </Link>
      </Container>
    </>
  )
}

Form.propTypes = {
  handleSearch: PropTypes.func,
  state: PropTypes.object,
  setState: PropTypes.object
}

export default Form
