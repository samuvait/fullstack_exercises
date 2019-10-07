import React from 'react'

const Filter = (props) => {

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    props.setFilterTerm(event.target.value)
  }

  return (
    <div>
      <form>
        <div>
          filter shown with <input value={props.filterTerm} onChange={handleFilterChange}/>
        </div>
      </form>
    </div>
  )
}

export default Filter