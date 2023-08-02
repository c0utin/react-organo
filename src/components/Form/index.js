import TextArea from '../TextArea'
import Dropdown from '../Dropdown'
import Button from '../Button'
import './Form.css'
import { useState } from 'react'

const Form = (props) => {

  const [name,setName] = useState('');
  const [office,setOffice] = useState('');
  const [image,setImage] = useState('');
  const [team, setTeam] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    props.registredEmprloyee({
      name,
      office,
      image,
      team 
    })
  }

  return(
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextArea 
          mandatory={true}
          label="Nome"
          placeholder="Digite seu nome" 
          value={name}
          changed={value => setName(value)}
        />
        <TextArea 
          mandatory={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={office}
          changed={value => setOffice(value)} 
        />
        <TextArea 
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          changed={value => setImage(value)}
        />
        <Dropdown
          mandatory={true}
          label="Time"
          items={props.teams} 
          value={team}
          changed={value => setTeam(value)}
         />
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}

export default Form