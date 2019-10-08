import React, { useState, useEffect } from 'react';
import Countries from './components/Countries'

const App = () => {

  const [findTerm, setFindTerm] = useState('')

  const handleFindChange = (event) => {
    //console.log(event.target.value)
    setFindTerm(event.target.value)
  }

  return (
    <div>
      <form>
        find countries <input value={findTerm} onChange={handleFindChange}/>
      </form>
      <Countries findTerm={findTerm}/>
    </div>
  )
}

export default App;
