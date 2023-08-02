import Employeer from '../Employeer'
import './Team.css'


const Team = (props) => {
  return (
    (props.employees.length > 0) ? <section className='team'style={{ backgroundColor: props.colorSecundary }}>
      <h3 style={{ borderColor: props.colorPrimary  }}>{props.name}</h3>
      <div className='employees'>
        {props.employees.map( employee => <Employeer name={employee.name} office={employee.office} image={employee.image} /> )}
      </div>
    </section>
    : ''
  )
}

export default Team