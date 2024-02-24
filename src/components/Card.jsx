import './Card.css'

const Card = ({title, description, link}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <h5>{description}</h5>
      <a href={link}>link</a>
    </div>
  )
}

export default Card;