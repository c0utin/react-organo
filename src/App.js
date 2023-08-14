import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
  {
    name: 'Programação',
    colorPrimary:'#57C278',
    colorSecundary:'#D9F7E9'
  },
  {
    name: 'Front-end',
    colorPrimary:'#82CFFA',
    colorSecundary:'#E8F8FF'
  },
  {
    name: 'Data Science',
    colorPrimary:'#A6D157',
    colorSecundary:'#F0F8E2'
  },
  {
    name: 'Devops',
    colorPrimary:'#E06B69',
    colorSecundary:'#FDE7E8'
  },
  {
    name: 'UX e Design',
    colorPrimary:'#DB6EBF',
    colorSecundary:'#FAE9F5'
  },
  {
    name: 'Mobile',
    colorPrimary:'#FFBA05',
    colorSecundary:'#FFF5D9'
  },
    {
    name: 'Inovação e Gestão',
    colorPrimary:'#FF8A29',
    colorSecundary:'#FFEEDF'
  },
]

  const [employees, setEmployees] = useState([])

  const whenRegistredEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} registredEmprloyee={employee => whenRegistredEmployee(employee)}/>
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        colorPrimary={team.colorPrimary} 
        colorSecundary={team.colorSecundary}
        employees={employees.filter(employee => employee.team === team.name)} 
      />)}
      <Footer />
    </div>
  );
}

export default App;
