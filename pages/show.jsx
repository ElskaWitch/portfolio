import React from 'react'
import Layout from './components/layout/Layout'

export default function show() {
  return (
    <Layout>
      <div className='text-center grid justify-items-center py-20'>
        <div className='py-5'>
         <p className='md:text-3xl font-semibold text-indigo-400'>Titre du projet</p>
        </div>
        <div className='pb-5'>
         <p className='md:px-96 '>description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perspiciatis placeat quisquam! Consequuntur nemo quisquam distinctio rem, mollitia nesciunt minima.</p>
        </div>
        <div className='grid grid-cols-2 gap-3 items-center py-5'>
          <div>
           <div className='pt-5'>
            <p className='text-indigo-400 italic underline underline-offset-4'>rôle:</p>
            <ul className='italic'>
             <li>Developpeuse Front React</li>
            </ul>
           </div>
           <div className='pt-5'>
             <p className='text-indigo-400 italic underline underline-offset-4'>stack:</p>
             <ul className='italic'>
               <li>Laravel</li>
               <li>TailWind CSS</li>
               <li>Git</li>
             </ul>
           </div>
         </div>
         <div className='md:grid grid-cols-2 gap-3 w-96'>
           <img src="" alt="titre projet" />
           <img src="" alt="titre projet" />
           <img src="" alt="titre projet" />
         </div>
        </div>
        <div className='pt-10'>
         <a href="#" className='border-2 border-indigo-500 p-2 mt-4 rounded-full'>Voir le projet</a>
        </div>
      </div>
    </Layout>
  )
}
