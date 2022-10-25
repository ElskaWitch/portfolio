import React from 'react'
import CardProjet from './cards/CardProjet'
import Title from './Title'

export default function SectionProjet() {
  return (
     <div className="pb-28 px-3 md:px-48 grid justify-items-center ">
      <div className='flex py-5 '>
        <p className='bg-indigo-100 px-3 py-1 rounded-lg text-indigo-400 font-semibold'>Mes réalisation</p>
      </div>
      <div className='pb-10'>
      <Title title="Voyez par vous-même"/>
      </div>
      <div>
        <p className='text-gray-400 font-semibold'>Voici quelques images illustratives des projet que j'ai pu réaliser.</p>
      </div>
      <div className='md:grid grid-cols-3 gap-7 py-10'>
        <CardProjet img="volvo.png" title="Volvo"/>
        <CardProjet img="mitoformation.png" title="Mito-fromation"/>
        <CardProjet img="educal.png" title="educal"/>
        <CardProjet img="mitofruit.png" title="Mito-Fruit"/>
        <CardProjet img="appgameup.png" title="App-game"/>
        <CardProjet img="videostore.png" title="Video-store"/>
      </div>
    </div>
  )
}
