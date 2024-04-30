import './App.css'
import Header from './components/Header'
import Filter from './components/Filter'
import Spinner from './components/Spinner'
import Cards from './components/Cards'
import { filterData, apiUrl } from './data'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData(){
    setLoading(true)
    try {
      let response = await fetch(apiUrl)
      let output = await response.json()
      setCourses(output.data)

    } catch (error) {
      console.error("Error in API Call");
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <Filter category={category} setCategory={setCategory} />
      <div className='max-w-[1200px] m-auto'>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
  )
}

export default App
