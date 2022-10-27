import { createClient } from "contentful";
import Layout from "./components/layout/Layout";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionProjet from "./components/SectionProjet";
import SectionQuestion from "./components/SectionQuestion";
import SectionSkill from "./components/SectionSkill";
import SectionWelcome from "./components/SectionWelcome";

export default function Home({projets}) {
  // console.log(projets);
  return (
    <Layout title="Acceuil" metaContent="Bienvenue dans mon portfolio. Je suis Justine.L développement web React et Laravel.">
      <SectionWelcome/>
      <SectionAbout/>
      <SectionSkill/>
      <SectionProjet projets={projets}/>
      <SectionContact/>
      <SectionQuestion/>
    </Layout>
  )
}

export async function getStaticProps() {
  //1- connect to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  // console.log(client);
  
  // 2- recupere la data une fois que la promesse succes
  const res = await client.getEntries({
    content_type: "projets",
    limit: 8,
    order: "sys.createdAt",
  });
  // console.log("res:",res);

  // 3- on envoie la data dans le props de la page
  return {
    props: {
      projets: res.items,
    }, // will be passed to the page component as props
  }
}