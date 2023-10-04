import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AllBeersPage from './pages/AllBeersPage'
import BeerDetailsPage from './pages/BeerDetailsPage'
import RandomBeerPage from './pages/RandomBeerPage'
import AddBeerPage from './pages/AddBeerPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeersPage />} />
        <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
        <Route path='/beers/random' element={<RandomBeerPage />} />
        <Route path='/beers/new' element={<AddBeerPage />} />

        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </div>
  )
}

export default App
