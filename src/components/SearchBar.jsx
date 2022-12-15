import React, { useState } from 'react'
import Results from './Results'

function SearchBar({ items, onItemSelected }) {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    function handleChange(e) {
        const value = e.target.value
        setQuery(value)
    }
    function handleResults(items) {
        setResults(items)
    }
    return (
        <div>
            <p>{results.length > 0 ? `${results.length} Resultados` : ""}</p>
            <input type="text" onChange={handleChange} value={query} />
            <Results items={items} query={query} onResultsCalculated={handleResults} onItemSelected={() => { }} />
        </div>
    )
}

export default SearchBar