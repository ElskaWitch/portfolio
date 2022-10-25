import Link from 'next/link'
import React from 'react'
import Title from './Title'

export default function SectionAbout() {
  return (
    <div className='py-32 px-3 md:px-48 md:grid grid-cols-2 gap-7 items-center justify-items-center justify-between'>
      <div>
        <div className='md:flex py-5'>
           <p className='bg-indigo-100 px-3 py-1 rounded-lg text-indigo-400 font-semibold'>
          A propros de moi
           </p>
        </div>
        <Title title="Qui suis-je ?"/>
        <div className='py-5'>
          <p>logo linkdin</p>
        </div>
        <div className='pb-5'>
           <p className='pb-5'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eligendi perspiciatis sit deserunt pariatur! Animi tempora asperiores voluptates a voluptas id perferendis amet,
           </p>
           <p>
          placeat adipisci voluptatum eaque fuga dolorem quaerat, harum quas, aspernatur enim iusto quae earum architecto rerum. Recusandae commodi mollitia minima reiciendis neque aut, suscipit odio quisquam perspiciatis?
           </p>
        </div>
        <div>
          <Link href="/"><a className="bg-indigo-100 px-3 py-1 text-indigo-400 rounded-lg font-semibold">Mon CV</a></Link>
        </div>
      </div>
      <div className='md:w-96 '>
        <img src="img/justine.jpg" alt="justine" />
      </div>
    </div>
  )
}
