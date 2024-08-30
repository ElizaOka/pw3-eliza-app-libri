
/*importa o css*/
import './App.css'

/*import CardBooks from './components/CardBooks'*/
import NavBar from './components/layout/NavBar'

/* IMPORTA O COMPONENTE DE <CONTEINER*/
import Container from './components/layout/Container'

import Home from './components/pages/Home'
import ListBooks from './components/pages/ListBooks'
import CreateBooks from './components/pages/CreateBooks'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
      {/* estrutura de navegação */}
      <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route path= '/'  element ={<Home/>}/>
              <Route path='/listBook' element ={<ListBooks/>}/>
              <Route path='/createBook' element ={<createBooks/>}/>

          </Route>
        </Routes>
      </Container>
      </BrowserRouter>
      
    </>
  )
}

export default App
