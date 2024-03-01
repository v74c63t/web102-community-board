import './Button.css'

const Button = ({link, children}) => {
  return (
    <a className='link' href={link}>{children}</a>
  )
}

export default Button;