import {useEffect, useState} from 'react';

export default function useNavigateSection(sections) {
  const [section, setSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        if (isSectionInViewport(section)) {
          history.replaceState(null, null, `#${section.id}`);
          setSection(section.id);
          // console.log(section.id);
          // animateSection(section);
        }
      });
    };

    const appContainer = document.getElementById('root');
    appContainer.addEventListener('wheel', handleScroll);

    return () => {
      appContainer.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const isSectionInViewport = (section) => {
    const windowRange = (window.innerHeight || document.documentElement.clientHeight) * 0.4;
    const sectionBounds = section.getBoundingClientRect();
    const windowTopStart = 0;
    const windowTopEnd = windowRange;
    const windowBottomStart = windowRange;
    const windowBottomEnd = window.innerHeight || document.documentElement.clientHeight;

    const sectionInTopBounds = sectionBounds.top >= windowTopStart && sectionBounds.top <= windowTopEnd;
    const sectionInBottomBounds = sectionBounds.bottom >= windowBottomStart && sectionBounds.bottom <= windowBottomEnd;

    return sectionInTopBounds || sectionInBottomBounds;
  };

  // const resetAnimateSection = () => {
  //   const sections = document.querySelectorAll('section');
  //   sections.forEach((section) => {
  //     const sectionContent = section.querySelector(':first-child');
  //     // sectionContent.classList.remove('visible');
  //     // sectionContent.classList.add('hidden');
  //     sectionContent.classList.remove('fade-in-up');
  //   });
  // }
  //
  // const animateSection = (section) => {
  //   resetAnimateSection();
  //   const sectionContent = section.querySelector(':first-child');
  //   // sectionContent.classList.add('visible');
  //   // sectionContent.classList.remove('hidden');
  //   sectionContent.classList.add('fade-in-up');
  // }

  const navigateSection = (event) => {
    event.preventDefault();
    const clickedElement = event.target;
    const href = clickedElement.getAttribute('href');
    const sectionId = href.split('#')[1];

    const section = document.getElementById(sectionId);
    if (section) {
      history.replaceState(null, null, `#${sectionId}`);
      setSection(sectionId);
      section.scrollIntoView({behavior: 'smooth'});
      // animateSection(section);
    }
  };

  return {
    section,
    navigateSection,
  };
}
