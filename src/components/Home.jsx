import React from 'react'
import { Link } from "react-router-dom"

const Home = ({ entries }) => {
  return (
    <>
      <h1>Journal Entries</h1>
      {entries.map((entry, index) => 
      <p key={index}>
        <Link to={`/entry/${index}`}>{entry.content}</Link>
      </p>
      )}
    </>
  )
}

export default Home