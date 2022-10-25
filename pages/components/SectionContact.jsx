import React from 'react'
import CardContact from './cards/CardContact'
import Title from './Title'

export default function SectionContact() {
  return (
    <div className="pb-40 px-3 md:px-48 grid justify-items-center ">
      <div className='flex py-5 '>
        <p className='bg-indigo-100 px-3 py-1 rounded-lg text-indigo-400 font-semibold'>Contact</p>
      </div>
      <div className='pb-10'>
      <Title title="Vous savez où me trouver"/>
      </div>
      <div className='md:grid grid-cols-3 gap-7'>
        <CardContact title="email" contact="justinelabas95@gmail.com"/>
        <CardContact title="Portable" contact="07.83.20.90.32"/>
        <CardContact title="Linkedin" contact="justine Labas / dev web"/>
      </div>
    </div>
  )
}
