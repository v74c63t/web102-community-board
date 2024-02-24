import './App.css'
import Card from './components/Card'

function App() {

  const title = 'title'
  const description = 'description'
  const link = '#'

  return (
    <>
     <h1 className="title">COMMUNITY BOARD</h1>
     <Card title={title} description={description} link={link} /> 
    </>
  )
}

export default App
