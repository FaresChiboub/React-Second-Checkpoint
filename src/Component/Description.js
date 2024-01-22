import React from 'react'
import {data} from '../data'

function Description() {
  return (
    <div>
      <h1>{data[0].description}</h1>
      <h1>{data[1].description}</h1>
      <h1>{data[2].description}</h1>
    </div>
  )
}

export default Description
