import React from 'react'
import "./Card.css"

function card({title, image, body, provider, date}) {
  return (
    <div className='card'>
      <img 
        src={image}
        alt="loading" 
      />
      <div className='card-title'>
        <h1>{title}</h1>
        <h5>{provider}</h5>
        <p>Published On {date}
        <hr/></p>
      </div>
      <div className='card-body'>
        <p>{body}</p>
      </div>
      <div className='card-button'>
        <button type='button' className='btn'>Read More</button>
      </div>
      
    </div>
  )
}

export default card