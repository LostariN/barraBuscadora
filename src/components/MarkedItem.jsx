import React, { useMemo } from 'react'

function MarkedItem({ item, query, onClick }) {

    const { left, center, right } = useMemo(() => getPositions(item, query), [item, query])

    function getPositions(item, query) {
        const index = item.title.toLowerCase().indexOf(query)
        const left = item.title.slice(0, index);
        const right = item.title.slice(index + query.length);
        const center = item.title.slice(index, index + query.length);
        console.log(left);
        console.log(index);
        return { left, center, right }
    }


    return (
        <div>
            <button>{left}
                <span style={{ background: 'yellow' }}>{center}</span>
                {right}
            </button>
        </div>
    )
}

export default MarkedItem