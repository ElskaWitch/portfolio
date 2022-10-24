import Layout from "./components/layout/Layout";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionProjet from "./components/SectionProjet";
import SectionQuestion from "./components/SectionQuestion";
import SectionSkill from "./components/SectionSkill";
import SectionWelcome from "./components/SectionWelcome";

export default function Home() {
  return (
    <Layout>
      <SectionWelcome/>
      <SectionAbout/>
      <SectionSkill/>
      <SectionProjet/>
      <SectionContact/>
      <SectionQuestion/>
    </Layout>
  )
}
