import React from 'react'
import {data} from '../data'

function Price() {
  return (
    <div>
        <h1>price:</h1>
      <h1>{data[0].price}</h1>
      <h1>{data[1].price}</h1>
      <h1>{data[2].price}</h1>
    </div>
  )
}

export default Price
