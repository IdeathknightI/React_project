import React, { useState } from 'react'
const Anime = ({ img, title, rank, desc }) => {
  const [votes, setVotes] = useState(0)
  return (
    <article className='anime'>
      <h2 className='rank'>{rank}</h2>
      <img src={img} alt='' />
      <div className='details'>
        <h4 className='title'>{title}</h4>
        <p className='desc'>{desc}</p>
      </div>
      <div className='btn-container'>
        <button onClick={() => setVotes(votes + 1)}>&uarr;</button>
        <h3> {votes} </h3>
        <button onClick={() => setVotes(votes - 1)}>&darr;</button>
      </div>
    </article>
  )
}

export default Anime
