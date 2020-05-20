import React from 'react'

import data from './dogs.json'

function DogDetails(props) {
  const { id } = props.match.params // Location index
  const { images, title, desc, breed, friend  } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ breed }</p>
        <p>{ desc }</p>
  
        <p>{ friend }</p>

      </div>

    </div>
  )
}

export default DogDetails