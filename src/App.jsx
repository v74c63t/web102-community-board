import './App.css'
import Card from './components/Card'
import data from './data.json'

function App() {

  const eventData = data['data']
  
  return (
    <>
      <h1 className="title">COMMUNITY BOARD</h1>
      <div className="container">
        {eventData.map((event, i) => {
          return (
            <Card 
              key={i}
              img = {`../../src/assets/images/${event["eventName"]}.png`} 
              title = {event["eventName"]}
              description = {event["eventDescription"]}
              link = {event["eventCards"]}
              color = {event["color"]} />
            )
        })}
      </div>
    </>
  )
}

export default App
