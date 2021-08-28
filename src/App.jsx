import React,{useState, useEffect}from "react"
import getCountries from "./services/getCountries"
import CountriesList from "./components/CountriesList"
 
function App(){
 
  const [input, setInput]= useState("")
  const [continent, setContinent] = useState("")
  const [countries, setCountries] = useState([])
 
  useEffect(()=>{
    getCountries(continent)
    .then(data=> setCountries(data))
  },[continent])
 
  const handleInput = (e)=>{
    setInput(e.target.value)
  }
 
  const handleSubmit = (e)=>{
    e.preventDefault()
    setContinent(input)
  }
 
console.log(countries)
 
  return(
    <div>
      <p>{continent}</p>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} value={input}/>
      <button>Buscar</button>
      </form>
      <CountriesList countries={countries}></CountriesList>
    </div>
  )
}
 
export default App

