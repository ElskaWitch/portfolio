import { createClient } from 'contentful';
import React from 'react';
import Layout from '../components/layout/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


//1- connect to contentful
const client = createClient({
   space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
   accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//2- generate all slug of my projet in contentful
export async function getStaticPaths() {
// 1bis- recupere la data une fois que la promesse succes
const res = await client.getEntries({content_type: "projets"});   

// 2bis-get all slugs
const slugs = res.items.map((slug)=>{
  return{
    params: {slug: slug.fields.slug},
  };
});
// 3bis- renvoi tout les slugs dans paths
  return {
    paths: slugs,
    fallback: false, // can also be true or 'blocking'
  };
}

//3-recupere la data du show en fonction du slug
export async function getStaticProps({params}) {
  //A- recupere la data une fois la promise succes
  const res = await client.getEntries({
    content_type: "projets",
    'fields.slug': params.slug,
  });  

  //B- je stock la data dans la variable projet
  const projet = res.items;

  return {
    // Passed to the page component as props
    props: { projet: projet[0] },
  };
}

export default function show({projet}) {
  // console.log("projets:", projet.fields);
  const {title, description, roles, skills, urlDuProjet, images, featuredImage} = projet.fields;
  return (
    <Layout  
    title={title}
    metaContent={`Le projet${title} est fait avec React Next.js et Contentful`}
    image={`http:${featuredImage.fields.file.url}`}
    >
      <div className='text-center grid justify-items-center py-20'>
        <div className='py-5'>
         <p className='md:text-3xl font-semibold text-indigo-400'>{title}</p>
        </div>
        <div className='md:px-96 pb-5'>
          {documentToReactComponents(description)}
        </div>
        <div className='grid grid-cols-2 gap-3 items-center py-5'>
          <div>
           <div className='pt-5'>
            <p className='text-indigo-400 italic underline underline-offset-4'>rôle:</p>
            <ul className='italic'>
              {
                roles.map(role => (
                  <li key={role}>{role}</li>
                ))
              }
            </ul>
           </div>
           <div className='pt-5'>
             <p className='text-indigo-400 italic underline underline-offset-4'>stack:</p>
             <ul className='italic'>
              {
                skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))
              }
             </ul>
           </div>
         </div>
         <div className='md:grid grid-cols-2 gap-3 w-96'>
            {
             images.map((image,index) => (
               <img key={index} src={image.fields.file.url} alt={`Justine portfolio ${title}`}/>
            ))}
         </div>
        </div>
        <div className='pt-10'>
         <a href={`/www.${urlDuProjet}`} target="_blank" className='border-2 border-indigo-500 p-2 mt-4 rounded-full' rel="noreferrer">Voir le projet</a>
        </div>
      </div>
    </Layout>
  )
}
