import React from 'react'
import Card from './cards/Card'
import Title from './Title'

export default function SectionSkill() {
  return (
    <div className="pb-28 px-32  grid justify-items-center ">
      <div className='flex py-5 '>
        <p className='bg-gray-100 px-3 py-1 rounded-lg text-blue-400 font-semibold'>Mes compétences</p>
      </div>
      <div className='pb-10'>
      <Title title="Ayez une idée de mes compétences"/>
      </div>
      <div className="grid grid-cols-3 gap-7">
        <Card img="php.png" title="PHP"/>
        <Card img="React-icon.svg.png" title="React" />     
        <Card img="laravel.png" title="Laravel"/>
        <Card img="javascript.svg" title="JavaScript"/>
        <Card img="css.png" title="CSS"/>
        <Card img="html.png" title="HTML"/>
        <Card img="Bootstrap_logo.svg.png" title="Bootstrap"/>
        <Card img="tailwind.png" title="Tailwind CSS"/>
        <Card img="dsui.svg" title="DaisyUI"/>
        <Card img="Figma-logo.svg" title="Figma"/>
        <Card img="github.png" title="GitHub"/>
        <Card img="mysql.png" title="MySQL"/>
      </div>
    </div>
  )
}
