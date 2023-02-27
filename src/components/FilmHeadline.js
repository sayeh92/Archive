import React from 'react'

const FilmHeadline = ({ heading }) => {
  return (
    <div className='text-2xl font-sans font-bold'>
      <h1 className='font-mono italic'>{heading}</h1>
    </div>
  )
}

export default FilmHeadline
