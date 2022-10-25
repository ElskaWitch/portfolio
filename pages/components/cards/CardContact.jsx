import React from 'react'  //rfc racourcie pour creer func

export default function CardContact({title,contact}) {
  return (
    
      <div className='max-w-sm shadow-lg p-4 grid justify-items-center rounded-xl '>
        <p className='text-xl font-semibold py-3 text-center'>{title}</p>
        <p className='text-indigo-400 font-semibold'>{contact}</p>
      </div>
  
  )
}