import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import ResidentCard from './components/ResidentCard'

function App() {
  const [location, setLocation] = useState()

  const getDataDimension = (idDimension) => {
    const URL = `https://rickandmortyapi.com/api/location/${idDimension}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    const randomDimension = getRandomNumber()
    getDataDimension(randomDimension)

  }, [])



  const handleSubmit = event => {
    event.preventDefault()
    const dimensionSearch = event.target.searchValue.value
    getDataDimension(dimensionSearch)
  }

  return (
    <div className="App">
      <div className="Banner">

      </div>
      <LocationInfo location={location} />

      <form onSubmit={handleSubmit}>
        <input id='searchValue' type="text" placeholder='search your dimension' />
        <button type='submit'  className='text-search'>Search</button>
      </form>
      <ResidentList location={location} />

    </div>
  )
}


export default App
