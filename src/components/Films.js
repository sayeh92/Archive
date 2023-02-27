import React from 'react'

const Films = ({ movies, favoriteComponent, handleFavoriteClick }) => {
  const FavoriteComponent = favoriteComponent

  return (
    <React.Fragment>
      {movies.map((movie, index) => (
        <article
          key={movie.id}
          className='flex flex-col md:w-[500px] md:h-[750px] w-[250px] h-auto items-start justify-center border border-black p-2 shadow-lg rounded-xl'>
          <img
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            alt='movie'
            className='md:w-[500px] md:h-[600px] w-[250px] h-auto'
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://via.placeholder.com/500x750'
            }}
          />
          <h3 className='text-2xl truncate w-4/6  md:w-[500px] font-medium my-1'>{movie.title}</h3>
          <p className='truncate pr-3 w-full hidden md:flex'>{movie.overview}</p>
          <button
            onClick={() => handleFavoriteClick(movie)}
            className='flex my-2 font-bold items-center justify-center cursor-pointer'>
            <FavoriteComponent />
          </button>
        </article>
      ))}
    </React.Fragment>
  )
}

export default Films
