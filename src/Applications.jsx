import './Application.scss';

import useNavigateSection from "./hooks/useNavigateSection.jsx";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Progress from "./components/progress/Progress";
import {
  Hero,
  About,
  Experience,
  Contact
} from "./components/sections/Base";

const DEFAULT_SECTIONS = [
  {key: "home", label: null, component: Hero},
  {key: "about", label: "about", component: About},
  {key: "experience", label: "experience", component: Experience},
  {key: "contact", label: "contact", component: Contact}
];

export default function Applications() {
  const sections = DEFAULT_SECTIONS.map(section => section.key);
  const {section: activeSection, navigateSection} = useNavigateSection(sections);

  return (
    <>
      <Header sections={DEFAULT_SECTIONS} activeSection={activeSection} navigateSection={navigateSection}/>
      <Progress sections={DEFAULT_SECTIONS} activeSection={activeSection} navigateSection={navigateSection}/>
      {DEFAULT_SECTIONS.map((section, index) => {
        const Section = section.component;
        return <Section key={index} id={section.key} />
      })}
      <Footer/>
    </>
  )
}
