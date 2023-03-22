import './button.scss'

const Button = ({title, width, height, color, backgroundColor}) => {
  return (
    <button className="btn" style={{width, height, color, backgroundColor}}>{title}</button>
  )
}

export default Button