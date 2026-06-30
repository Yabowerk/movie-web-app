import React from 'react'


const Search = ({searchtext,setsearchtext}) => {
  return (
    <div className='search'>
      <div>
        <img src='Search-Input.png' alt='search'/>
        <input type='text' placeholder='search for the movie' value={searchtext} onChange={(e)=>setsearchtext(e.target.value)}/>
      </div>
    </div>
  )
}

export default Search