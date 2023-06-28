import './Application.scss';

import useNavigateSection from "./hooks/useNavigateSection.jsx";
import Header from "./components/header/Header";
import Progress from "./components/progress/Progress";
import {
  Hero,
  Section,
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

function Applications() {
  const {section: activeSection, navigateSection} = useNavigateSection(DEFAULT_SECTIONS.map(section => section.key));
  return (
    <>
      <Header sections={DEFAULT_SECTIONS} activeSection={activeSection} navigateSection={navigateSection}/>
      <Progress sections={DEFAULT_SECTIONS} activeSection={activeSection} navigateSection={navigateSection}/>
      {DEFAULT_SECTIONS.map((section, index) => {
        const Component = section.component;
        return (
          <Section key={index} id={section.key}>
            <Component/>
          </Section>
        )
      })}
    </>
  )
}

export default Applications
