import React from 'react'
import ReactDOM from 'react-dom/client'
import Anime from './Anime'
import { animeList } from './animeList'
import Navbar from './Navbar'
const Animevoter = () => {
  return (
    <section className='animeranked'>
      {animeList.map((anime, index) => {
        return <Anime key={anime.id} {...anime}></Anime>
      })}
    </section>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Navbar />
    <Animevoter />
  </React.StrictMode>
)
