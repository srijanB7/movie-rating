
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { SingleMovie } from './pages/SingleMovie'
import { Starred } from './pages/Starred'
import { AddMovie } from './pages/AddMovie'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movie/:id" element={<SingleMovie/>}/>
        <Route path="/starred" element={<Starred />}/>
        <Route path="/addMovie" element={<AddMovie />} />
      </Routes>
    </>
  )
}

export default App
