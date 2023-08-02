import './TextArea.css'

const TextArea = (props) => {

  const modifiedPlaceholder = `${props.placeholder}...` 

  const anyChange = (event) => {
    props.changed(event.target.value)
  }

  return (
    <div className="text-area">
      <label>
        {props.label}
      </label>
      <input value={props.textAreaValue} onChange={anyChange} required={props.mandatory} placeholder= {modifiedPlaceholder} />
    </div>
  )
}

export default TextArea