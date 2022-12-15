import React, { useState, useMemo, useEffect } from 'react'
import MarkedItem from './MarkedItem'

function Results({
    items,
    query,
    onResultsCalculated,
    onItemSelected
}) {

    const [results, setResults] = useState([])
    const filteredItems = useMemo(() => findMatch(items, query), [items, query])

    useEffect(() => {
        onResultsCalculated(results)
    }, [results])

    function findMatch(items, query) {
        const res = items.filter(elem => {
            return elem.title.toLowerCase().indexOf(query) >= 0 && query.length > 0
        })
        setResults(res)
        return res
    }
    return (
        <div>
            {query !== '' ? results.map((item) => <MarkedItem key={item.id} item={item} query={query} />) : ""}
        </div>
    )
}

export default Results