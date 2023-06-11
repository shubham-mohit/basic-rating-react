
import React from 'react'

const Movie = (props) => {
  return (
    <div className='movie'>
        <img className='imgbox'  src= {props.img} alt='a' />
        <div className='content'> 
            <p> Title: {props.title} </p> 
            <p> Year : {props.year} </p>
            <p> imdbID: {props.imdb} </p>
            <p> Rating : 4.5 </p>
        </div>
    </div>
  )
}

export default Movie