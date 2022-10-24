import React from 'react'
import CardProjet from './cards/CardProjet'
import Title from './Title'

export default function SectionProjet() {
  return (
     <div className="pb-28 px-48 grid justify-items-center ">
      <div className='flex py-5 '>
        <p className='bg-gray-100 px-3 py-1 rounded-lg text-blue-400 font-semibold'>Mes réalisation</p>
      </div>
      <div className='pb-10'>
      <Title title="Voyez par vous-même"/>
      </div>
      <div>
        <p className='text-gray-400 font-semibold'>Voici quelques images illustratives des projet que j'ai pu réaliser.</p>
      </div>
      <div className='grid grid-cols-3 gap-7 py-10 '>
        <CardProjet img="mitofruit.png" title="Mito-Fruit"/>
        <CardProjet img="appgameup.png" title="App-game"/>
        <CardProjet img="appgame.png" title="App-game"/>
        <CardProjet img="appgameedit.png" title="App-game"/>
        <CardProjet img="videostore.png" title="Video-store"/>
        <CardProjet img="volvo.png" title="Volvo"/>
      </div>
    </div>
  )
}
