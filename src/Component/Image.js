import React from 'react'
import {data} from '../data'

function Image() {
  return (
    <div style={{display:'flex',width:'100%'}}>
      <img src={data[0].path}  style={{width:'100px'}} />
      <img src={data[1].path} style={{width:'100px'}}  />
      <img src={data[2].path}  style={{width:'100px'}}  />
    </div>
  )
}

export default Image
