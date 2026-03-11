import React from 'react'

const Image = ({img,alt,className}) => {
  return (
    <img src={img} alt={alt} className={`${className}`}/>
  )
}

export default Image