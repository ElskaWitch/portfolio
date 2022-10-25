import React from 'react'  //rfc racourcie pour creer func

export default function CardProjet({projet}) {
  // console.log('projet:', projet)
  const {title,description, roles, featuredImage} = projet.fields;
  // console.log(featuredImage);
  return (
      <div className='max-w-sm shadow-lg p-4 grid justify-items-center rounded-xl '>
        <div>
         <img src={featuredImage.fields.file.url} alt="photo" />
        </div>
        <div>
         <p className='text-xl font-bold py-3 text-center'>{title}</p>
        </div>
        <div>
          {/* <p className='text-center px-3'>{description}</p> */}
        </div>
      </div>
  )
}
