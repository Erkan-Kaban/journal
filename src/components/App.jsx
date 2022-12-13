import React, { useState } from 'react'
import CategorySelection from './CategorySelection'
import Home from './Home'
import NewEntry from './NewEntry'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import Navbar from './Navbar'
import ShowEntry from "./ShowEntry"


const seedEntries = [
  { category: 'Food', content: 'I ate a sandwich' },
  { category: 'Work', content: 'Another day, another dollar' },
  { category: 'Coding', content: 'react is aweseome' },
]

// BrowserRouter is a component that wraps around all of the other components and is the main component that we will use to create our routes.

const App = () => {
  const [entries, setEntries] = useState(seedEntries)
  
  const ShowEntryWrapper = () => {
    const { id } = useParams()
    const the_entry = entries[id]
    return the_entry ? <ShowEntry entry={the_entry} /> : <h4>Entry not found!</h4>
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home entries={entries}/>} />
          <Route path="/category" element={<CategorySelection />} />
          <Route path="/entry/:id" element={<ShowEntryWrapper/>}/>
          <Route path="/entry/new/:category" element={<NewEntry entries={entries} setEntries={setEntries}/>} />
          <Route path="*" element={<h4>404 Page not found</h4>} />
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <CategorySelection />
      <NewEntry /> */}
      
    </>
  )
}

export default App