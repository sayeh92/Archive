import React from 'react'

const SearchInput = ({ setSearchValue, value }) => {
  return (
    <div className='my-5'>
      <input
        className=' rounded-md p-2 md:w-[500px] outline-none text-black caret-pink-500"'
        value={value}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder='Type to search...'></input>
    </div>
  )
}

export default SearchInput
