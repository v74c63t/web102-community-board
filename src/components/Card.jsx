import './Card.css'
import Button from './Button'

const Card = ({event}) => {

  return (
    <div className='card' style={{backgroundColor: event["color"]}}>
      <img src={`../../src/assets/images/${event["eventName"]}.png`} alt='event img'/>
      <div className="title-container">
        <h2>{event["eventName"]}</h2>
      </div>
      <div className="description-container">
        <h4>{event["eventDescription"]}</h4>
      </div>
      <div className='link-container'>
        {event["eventLinks"].map((eventLink, i) => {
          return <Button key={i} link = {eventLink["link"]}>{eventLink["text"]}</Button>
        })}
      </div>
    </div>
  )
}

export default Card;