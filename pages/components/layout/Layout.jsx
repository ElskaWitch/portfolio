import Head from 'next/head'
import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navigation/Navbar'

export default function Layout({children, title, metaContent, image = "img/justine.jpg"}) {
  return (
    <>
      <Head>
        <title> {title} | Justine Portfolio. Développeuse web React et Laravel.</title>
        <meta name="description" content={metaContent}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={metaContent}/>
        <meta property="og:image" content={image}/>
      </Head>
      <div className='flex flex-col min-h-screen'>
        <Navbar/>
          <main className='flex-grow '>
            {children}
          </main>
        <Footer/>
      </div>
    </>
  )
}
