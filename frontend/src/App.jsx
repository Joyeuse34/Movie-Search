import './App.css'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import Favorites from './pages/Favorite'
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
      </Routes>
    </main>
    </div>
  )
}




export default App
