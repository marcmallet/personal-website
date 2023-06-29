import {useEffect, useState} from 'react';

export default function useNavigateSection(sections) {
  const [section, setSection] = useState(sections[0]);

  useEffect(() => {
    const animateSectionOnLoad = () => {
      const sectionId = window.location?.hash.split('#')[1];
      const section = document.getElementById(sectionId)
      if (!!sectionId && !!section) {
        setSection(sectionId);
        section.scrollIntoView({behavior: 'smooth'});
        animateSection(section);
      }
    }
    animateSectionOnLoad();

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        if (isSectionInViewport(section)) {
          history.replaceState(null, null, `#${section.id}`);
          setSection(section.id);
          animateSection(section);
        }
      });
    };

    const appContainer = document.getElementById('root');
    appContainer.addEventListener('wheel', handleScroll, { passive: true });

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

  const animateSection = (section) => {
    const sectionContent = section.querySelector(':first-child');
    if (!sectionContent.classList.contains('animate-section')) {
      sectionContent.classList.add('animate-section');
    }
  }

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
      animateSection(section);
    }
  };

  return {
    section,
    navigateSection,
  };
}
