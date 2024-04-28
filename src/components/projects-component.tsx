import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from './../data/projects-data';
import ProjectsContent from './projects-content';
const { useEffect} = React;
export default function ProjectsComponent() {
  gsap.registerPlugin(ScrollTrigger);
  let tl: GSAPTimeline; // also compatible with TimelineLite/TimelineMax
  let tlConfig: GSAPTimelineVars = {
    paused: true
  };
  tl = gsap.timeline(tlConfig);

  useEffect(() => {
    const content = document.querySelectorAll(".project-history");
    const image = document.querySelectorAll(".project-history-image");
    const title = document.querySelectorAll(".project-history-title");
    const descrition = document.querySelectorAll(".project-history-descrition");
    const url = document.querySelectorAll(".project-history-url");


       ScrollTrigger.matchMedia({
            "(min-width: 1007px)": function () {
    content.forEach((section, i) => {
      tl.to(image[i], {
        scrollTrigger: {
          trigger: content[i],
          toggleActions: 'restart resume reverse pouse',
          start: 'top center ',
          end: 'bottom center',
          scrub: 1,
        },
        y: '-25vh'
      })

      tl.to(title[i], {
        scrollTrigger: {
          trigger: content[i],
          toggleActions: 'restart resume reverse pouse',
          start: 'top center ',
          end: 'bottom center',
          scrub: 1,
        },
        y: '-80vh'
      })
      tl.to(descrition[i], {
        scrollTrigger: {
          trigger: content[i],
          toggleActions: 'restart resume reverse pouse',
          start: 'top center ',
          end: 'bottom center',
          scrub: 1,
        },
        y: '-80vh'
      })
      tl.to(url[i], {
        scrollTrigger: {
          trigger: content[i],
          toggleActions: 'restart resume reverse pouse',
          start: 'top center ',
          end: 'bottom center',
          scrub: 1,
        },
        y: '-80vh'
      })
    });
  },
  })
  });


  return (
    <section className="portfolio-projects-section">
      <h3 className="portfolio-projects-section-title">PROJECTS</h3>
      {projectsData ? (
        projectsData.map((data: any, index) => {
          return <ProjectsContent key={index.toString()} data={data} />
        })
      ) : null}
    </section>
  );
}


