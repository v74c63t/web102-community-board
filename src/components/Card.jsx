import './Card.css'

const Card = ({img, title, description, link, color}) => {
  console.log(img, title, description, link, color)
  return (
    <div className='card' style={{backgroundColor: color}}>
      <img src={img} alt='event img'/>
      <h2>{title}</h2>
      <h4>{description}</h4>
      <a href={link}>Event Cards</a>
    </div>
  )
}

export default Card;