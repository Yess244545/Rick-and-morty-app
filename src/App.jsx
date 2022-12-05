import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorMessage from './components/ErrorMessage'
import LocationFilter from './components/LocationFilter'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import getRandomNumber from './utils/getRandomNumber'



function App() {

  const [location, setLocation] = useState()
  const [locationName, setLocationName] = useState("")
  const [showError, setShowError] = useState(false)

  const getDataDimension= (idDimension)=>{
    if(idDimension){
      const URL= `https://rickandmortyapi.com/api/location/${idDimension}`
    axios.get(URL)
    .then(res=>setLocation(res.data))
    .catch(err=>{
      setShowError(true)
      setTimeout(()=>{
        setShowError(false)
      },2000)
      console.log(err)
    })
    }else{
      alert("ingrese un valor")
    }                                                                                                                                                                                                                                                                       
  }

  useEffect(() => {
    const randomdimension=getRandomNumber()
    getDataDimension(randomdimension)
  }, [])

  const handleSubmnit =event=>{
    event.preventDefault()
    const dimensionSearch=event.target.searchValue.value
    getDataDimension(dimensionSearch)
  }
  const handleChangeInput=(event)=>{
    setLocationName(event.target.value)

  }

  const getNewLocation =(URL,name)=>{
    setLocationName(name)
    axios.get(URL)
    .then(res=>setLocation(res.data))
    .catch(err=>console.log(err))

  }
  

  return (
    <div className="App">
      <div className='contenedor'>
      <img className='img' src="https://www.realitytitbit.com/static/uploads/26/2019/01/RickandMorty_COVER_S2_1920X1080-1920x576.jpg" alt="" />
      <form className='form' onSubmit={handleSubmnit}>
        <input id='searchValue' value={locationName} type="text" onChange={handleChangeInput} placeholder='Escribir algo '/>
        <button type='submit'>Search</button>
        {
          showError ? <ErrorMessage /> : ""
        }
      </form>
      </div>
      
      <LocationFilter locationName={locationName} getNewLocation={getNewLocation}/>
      <LocationInfo  location={location}/>
      <ResidentList location={location}/>
      
    </div>
  )
}

export default App
