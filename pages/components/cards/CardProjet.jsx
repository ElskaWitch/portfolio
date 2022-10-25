import React from 'react'  //rfc racourcie pour creer func

export default function CardProjet({title, img}) {
  return (
      <a href="show" className='max-w-sm shadow-lg p-4 grid justify-items-center rounded-xl '>
        <img src={`img/${img}`} alt="photo" />
        <p className='text-xl font-bold py-3 text-center'>{title}</p>
      </a>
  
  )
}
