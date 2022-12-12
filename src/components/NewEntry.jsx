import React, { useEffect, useState } from 'react'
import { Route, useParams } from "react-router-dom"

const NewEntry = ({ setEntries, entries }) => {
    // use params gets :category from app route path /entry/new/:category
    // const params = useParams()
    // destructuring useParams to include category here
    const { category } = useParams()
    const [entry, setEntry ] = useState('')

    function submit(event) {
        event.preventDefault()
        // Add a new entry
        const newEntry = {
            category: category,
            content: entry
        }
        setEntries([...entries, newEntry])
    }
    
    return (
        // <h2>New Entry {params.category} category</h2>
        <>
        <h2>New Entry {category} category</h2>
        <form onSubmit={submit} className='container'>
            <div>
                <textarea value={entry} onChange={(event) => setEntry(event.target.value)} rows="2" className="form-control"></textarea>
            </div>
            <button className='btn btn-primary mt-2'>Create Entry</button>
        </form>
        </>
    )
}

export default NewEntry