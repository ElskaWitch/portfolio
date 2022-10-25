import Link from 'next/link'
import React from 'react'

export default function SectionWelcome() {
  return (
    <div className='text-center bg-indigo-100 py-20'>
      <div className='flex justify-center py-5'>
        <p className='bg-gray-100 font-semibold px-3 py-1 rounded-lg'>Bienvenue sur mon portfolio</p>
      </div>
      <div className='text-2xl md:text-7xl font-bold'>
        Développeur web <br />
        x <br />
        étudiant
      </div>
      <div className='py-5 text-gray-500 md:text-xl'>
        <p>
          Retrouvez ma présentation, mes compétences, <br />
          ainsi que mon CV
        </p>
      </div>
      <Link href="about">
       <a className='bg-gray-100 px-3 py-1 text-indigo-400 rounded-lg font-semibold '>En savoir plus</a>
      </Link>
    </div>
  )
}
