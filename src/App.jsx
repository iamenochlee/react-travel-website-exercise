import Header from './components/Header'
import Main from './components/MainContent'
import data from './data';

function App() {

  const Cards = data.map((card, index) => {
    return (
      <Main 
        key = {index}
        card = {card}
      />
    )
  })

  

  return (
    <div className="App">
      <Header />
      <div className='main'>
        {Cards}
      </div>
    </div>
  )
}

export default App
