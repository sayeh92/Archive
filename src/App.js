import React, { useState, useEffect } from 'react'
import Films from './components/Films'
import FilmHeadline from './components/FilmHeadline'
import SearchInput from './components/SearchInput'
import fave from './components/fave'
import NoFave from './components/NoFave'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const [movies, setMovies] = useState([])
  const [favorite, setFavorite] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=3c0d83660607aba1b3a8108d0362abd5&page=1&query=${searchValue}`

    try {
      const response = await fetch(url)
      const responseJson = await response.json()

      console.log(responseJson)
      if (responseJson.results) {
        setMovies(responseJson.results)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  useEffect(() => {
    const movieFavorite = JSON.parse(localStorage.getItem('what-movie-faves'))

    if (movieFavorite) {
      setFavorite(movieFavorite)
    }
  }, [])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('what-movie-faves', JSON.stringify(items))
  }

  const addFavoriteMovie = (movie) => {
    console.log({ movie })
    const newFavoriteList = [...favorite, movie]
    setFavorite((prev) => [...prev, movie])
    saveToLocalStorage(newFavoriteList)
  }

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorite.filter((favorite) => favorite.id !== movie.id)

    setFavorite((prev) =>
      prev.filter((favorite) => {
        return favorite.id !== movie.id
      })
    )
    saveToLocalStorage(newFavoriteList)
  }

  return (
    <div className='w-full min-h-screen p-10 flex flex-col overflow-x-hidden 00 bg-amber-50 '>
      <Header />
      <div className='border-amber-700  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-5 shadow-lg text-white rounded-xl mt-20 mb-5 p-3'>
        <div id='homePage' className='flex flex-col justify-center items-center w-full gap-10'>
          <FilmHeadline heading='Archive: Search a Movie' />
          <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div  className='flex items-center justify-center md:justify-between w-auto flex-wrap gap-5 '>
          <Films movies={movies} handleFavoriteClick={addFavoriteMovie} favoriteComponent={fave} />
        </div>
      </div>

      <div className='  bg-cyan-600 text-white rounded-xl mt-20 mb-5 p-3 shadow-xl'>
        <div className='my-5 flex flex-col justify-center items-center w-full gap-10'>
          <FilmHeadline heading='Add it to Your Favorite' />
        </div>
        <div id='favoriteHeader' className='flex items-center flex-wrap gap-5 justify-center flex-col md:flex-row md:justify-between w-full'>
          <Films
            movies={favorite}
            handleFavoriteClick={removeFavoriteMovie}
            favoriteComponent={NoFave}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
