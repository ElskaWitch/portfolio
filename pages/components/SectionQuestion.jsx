import React from 'react'
import Title from './Title'

export default function SectionQuestion() {
  return (
      <div className="pb-28 px-48 grid justify-items-center ">
      <div className='pb-10'>
      <Title title="Une question ?"/>
      </div>
      <form action="" method="post">
        <div className=' shadow-lg'>
         <input type="text" id="email" name="email" placeholder='email'/>
        </div>
        <div className='shadow-lg'>
         <textarea name="demande" id="demande" cols="30" rows="10" placeholder='Votre demande'></textarea>
        </div>
      </form>
    </div>
  )
}
