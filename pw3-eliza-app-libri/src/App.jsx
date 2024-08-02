
import './App.css'

import CardBooks from './components/CardBooks'

function App() {
  

  return (
    <>
      <CardBooks
        titulo='Cavernas de Aço'
        autor= 'Isaac Asimov'
      />
      <CardBooks
        titulo='O melhor amigo'
        autor= 'Jose'
      />
      <CardBooks
        titulo='A felicidade'
        autor= 'Maria'
      />
      
    </>
  )
}

export default App
