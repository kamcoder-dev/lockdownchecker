import React, {useState,useEffect} from 'react';

import './App.css';
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/ui/CharacterGrid'
import Search from './components/ui/Search'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')


  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `http://www.lockdownapi.com/${query}`
      )

       console.log(result.data)

       setItems(result.data)
       setIsLoading(false)
       
      
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />

    </div>
  )




}
export default App;