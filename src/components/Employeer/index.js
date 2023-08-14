import './Employeer.css'

const Employeer = ({ name, image, office, backgroundColorCard }) => {

  return (
    <div className='employeer'>
      <div className='title'style={{ backgroundColor: backgroundColorCard }}>
        <img src={image} alt={name} />
      </div>
      <div className='baseboard'>
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  )
}

export default Employeer