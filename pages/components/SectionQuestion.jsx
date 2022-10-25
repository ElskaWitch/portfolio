import React from 'react'
import Title from './Title'

export default function SectionQuestion() {
  return (
      <div className="pb-28 px-3 md:px-48 grid justify-items-center ">
      <div className='pb-10'>
      <Title title="Une question ?"/>
      </div>
      <form action="" method="post" className='bg-indigo-100 rounded-lg px-10 md:px-16 py-5 '>
        <div className='pb-10 pt-5 '>
         <input type="text" id="email" name="email" placeholder='email' className='shadow-xl px-3 py-1 rounded-lg '/>
        </div>
        <div className=''>
         <textarea name="demande" id="demande" cols="22" rows="10" placeholder='Votre demande' className='shadow-xl px-3 py-1 rounded-lg'></textarea>
        </div>
        <div className='py-5 grid justify-items-center'>
        <button type="submit" className='bg-indigo-400 px-3 py-1 text-white rounded-lg'>Envoyer</button>
        </div>
      </form>
    </div>
  )
}
