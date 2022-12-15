import { useState } from 'react'

import './App.css'
import { people, calendar, emails } from './datos.js'
import SearchBar from './components/SearchBar'

function App() {

  const [data, setData] = useState([...people, ...calendar, ...emails])

  const [selection, setSelection] = useState(null)
  const [currentOption, setCurrentOption] = useState('all')

  function handleClick(e) {
    const op = e.target.name;
    switch (op) {
      case 'all':
        setData([...people, ...calendar, ...emails])
        setCurrentOption('all');
        break;
      case 'people':
        setData([...people])
        setCurrentOption(op);
        break;
      case 'calendar':
        setData([...calendar])
        setCurrentOption(op);
        break;
      case 'emails':
        setData([...emails])
        setCurrentOption(op);
        break;

      default:
        break;
    }

  }
  return (
    <div>
      <button onClick={handleClick} name='all'>All</button>
      <button onClick={handleClick} name='people'>People</button>
      <button onClick={handleClick} name='calendar'>Calendar</button>
      <button onClick={handleClick} name='emails'>Emails</button>
      <SearchBar items={data} onItemSelected={() => { }} />
    </div>
  )
}

export default App
