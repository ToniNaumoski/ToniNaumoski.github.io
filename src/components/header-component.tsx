import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsComponent from './projects-component';
const { useEffect } = React;

export default function HeaderComponent() {
    gsap.registerPlugin(ScrollTrigger);
    let tl: GSAPTimeline; // also compatible with TimelineLite/TimelineMax
    let tlConfig: GSAPTimelineVars = {
        paused: true
    };
    tl = gsap.timeline(tlConfig);
    useEffect(() => {
        const headerText = document.querySelector(".about-me-text-wrapper h3");
        const projectsTextHeader = document.querySelector(".portfolio-projects-section-title");
        const contentText = document.querySelectorAll(".about-me-text-wrapper");
        const skillSet = document.querySelector(".skill-set-skills");
        const skillSetTitle = document.querySelector(".skill-set-title");
        const workHistoryArticleTitle = document.querySelectorAll(".work-history-article-title");
        const workHistoryArticleDescription = document.querySelectorAll(".work-history-article-description");
        const workHistoryTitle = document.querySelector(".work-history-title");

        ScrollTrigger.matchMedia({
            "(min-width: 1007px)": function () {

                tl.to(headerText, {
                    scrollTrigger: {
                        trigger: headerText,
                        toggleActions: 'restart resume reverse pouse',
                        start: 'top center ',
                        end: 'center center',
                        scrub: 1,
                    },
                    y: '-10vh'
                })
                tl.to(contentText, {
                    scrollTrigger: {
                        trigger: contentText,
                        toggleActions: 'restart resume reverse pouse',
                        start: 'top center ',
                        end: 'center center',
                        scrub: 1,
                    },
                    y: '-10vh'
                })


                tl.to(skillSetTitle, {
                    scrollTrigger: {
                        trigger: skillSetTitle,
                        toggleActions: 'restart resume reverse pouse',
                        start: 'top center',
                        end: 'center bottom',
                        scrub: 1,
                    },
                    y: '-10vh'
                })

                tl.to(skillSet, {
                    scrollTrigger: {
                        trigger: skillSet,
                        toggleActions: 'restart resume reverse pouse',
                        start: 'top center ',
                        end: 'center bottom',
                        scrub: 1,
                    },
                    y: '-30vh'
                })

                tl.to(projectsTextHeader, {
                    scrollTrigger: {
                        trigger: projectsTextHeader,
                        toggleActions: 'restart resume reverse pouse',
                        start: 'top center ',
                        end: 'center bottom',
                        scrub: 1,
                    },
                    y: '-25vh'
                })

                tl.to(workHistoryTitle, {
                    scrollTrigger: {
                        trigger: workHistoryTitle,
                        toggleActions: 'restart resume reverse pouse',
                        start: 'top center ',
                        end: 'center bottom',
                        scrub: 1,
                    },
                    y: '-30vh'
                })

                tl.to(workHistoryArticleTitle, {
                    scrollTrigger: {
                        trigger: workHistoryArticleTitle,
                        toggleActions: 'restart resume reverse pouse',
                        start: 'top bottom ',
                        end: 'center bottom',
                        scrub: 1,
                    },
                    y: '-20vh'
                })

                tl.to(workHistoryArticleDescription, {
                    scrollTrigger: {
                        trigger: workHistoryArticleDescription,
                        toggleActions: 'restart resume reverse pouse',
                        start: 'top bottom ',
                        end: 'center bottom',
                        scrub: 1,
                    },
                    y: '-30vh'
                })
            },
        })
    });



    return (
        <div className="page-wrapper">
            <header>
                <section className="header-text-section">
                    <h1 className="header-name">Toni Naumoski</h1>
                    <h2 className="header-discription">Senior Frontend Developer</h2>
                </section>
                <section className="header-image-section">
                    <img className="header-image" src={require('./../img/toni-naumoski-image-header.png')} alt="header-image" />
                </section>
            </header>
            <section className="main-page-wrapper">
                <div className="about-me-div-wrapper-horizontal"></div>
                <section className="about-me">
                    <article className="about-me-text-wrapper">
                        <h3>ABOUT ME</h3>
                        <p>
                        Hello,
                            My name is Toni Naumoski.

                            I am a Senior Frontend Developer with more than 14 years of experience in the industry. 

I am skilled in designing and developing complex web applications using Angular. React and Vue.

I also like to work with Python, Django, and ChatGPT. 

High integrity, great communication, a positive attitude, and reliability are skills that best describe my personality.
                        </p>
                    </article>
                </section>
                <ProjectsComponent />
                {/* <section className="portfolio-projects-section">
        <h3>PROJECTS</h3>
        <article className="project-history">
            <img className="project-history-image" src={require('./../img/landing-page1.jpg')} alt="img" />
            <p className="project-history-title">
                Fashion landing page
            </p>
            <p className="project-history-descrition">
                Fashion landing page
            </p>
            <a href="https://toninaumoski.github.io/" className="project-history-url">
                Fashion landing page
            </a>
        </article>
        <article className="project-history">
            <img className="project-history-image"  src={require('./../img/packandmove-small-img.jpg')} alt="img" />
            <p className="project-history-title">
                Fashion landing page
            </p>
            <p className="project-history-descrition">
                Fashion landing page
            </p>
            <a href="https://toninaumoski.github.io/" className="project-history-url">
                Fashion landing page
            </a>
        </article>
        <article className="project-history">
            <img className="project-history-image"  src={require('./../img/landing-page4.jpg')} alt="img" />
            <p className="project-history-title">
                Fashion landing page
            </p>
            <p className="project-history-descrition">
                Fashion landing page
            </p>
            <a href="https://toninaumoski.github.io/" className="project-history-url">
                Fashion landing page
            </a>
        </article>
        <article className="project-history">
            <img className="project-history-image" src={require('./../img/addani.jpg')} alt="img" />
            <p className="project-history-title">
                Fashion landing page
            </p>
            <p className="project-history-descrition">
                Fashion landing page
            </p>
            <a href="https://toninaumoski.github.io/" className="project-history-url">
                Fashion landing page
            </a>
        </article>
        <article className="project-history">
            <img className="project-history-image" src={require('./../img/roulette.jpg')} alt="img" />
            <p className="project-history-title">
                Fashion landing page
            </p>
            <p className="project-history-descrition">
                Fashion landing page
            </p>
            <a href="https://toninaumoski.github.io/" className="project-history-url">
                Fashion landing page
            </a>
        </article>
        <article className="project-history">
            <img className="project-history-image" src={require('./../img/comalive-website.jpg')} alt="img" />
            <p className="project-history-title">
                Fashion landing page
            </p>
            <p className="project-history-descrition">
                Fashion landing page
            </p>
            <a href="https://toninaumoski.github.io/" className="project-history-url">
                Fashion landing page
            </a>
        </article>
        <article className="project-history">
            <img className="project-history-image" src={require('./../img/banner-design-1.jpg')} alt="img" />
            <p className="project-history-title">
                Fashion landing page
            </p>
            <p className="project-history-descrition">
                Fashion landing page
            </p>
            <a href="https://toninaumoski.github.io/" className="project-history-url">
                Fashion landing page
            </a>
        </article>
        <article className="project-history">
            <img className="project-history-image" src={require('./../img/landing-page2-old.jpg')}  alt="img" />
            <p className="project-history-title">
                Fashion landing page
            </p>
            <p className="project-history-descrition">
                Fashion landing page
            </p>
            <a href="https://toninaumoski.github.io/" className="project-history-url">
                Fashion landing page
            </a>
        </article>
        <article className="project-history">
            <img className="project-history-image" src={require('./../img/landing page for dori3.jpg')} alt="img" />
            <p className="project-history-title">
                Fashion landing page
            </p>
            <p className="project-history-descrition">
                Fashion landing page
            </p>
            <a href="https://toninaumoski.github.io/" className="project-history-url">
                Fashion landing page
            </a>
        </article>
        <article className="project-history">
            <img className="project-history-image" src={require('./../img/landing-page1.jpg')} alt="img" />
            <p className="project-history-title">
                Fashion landing page
            </p>
            <p className="project-history-descrition">
                Fashion landing page
            </p>
            <a href="https://toninaumoski.github.io/" className="project-history-url">
                Fashion landing page
            </a>
        </article>
    </section> */}

                <section className="skill-set">
                    <h3 className='skill-set-title'>SKILLS</h3>
                    <div className='skill-set-skills'>

                    <p>HTML5</p>
                        <p>CSS3</p>
                        <p>SCSS</p>
                        <p>JAVASCRIPT</p>
                        <p>ANGULAR</p>
                        <p>REACT</p>
                        <p>VUE</p>
                        <p>GREENSOCK ANIMATION PLATFORM</p>
                        <p>DJANGO</p>
                        <p>PYTHON</p>
                        <p>PHOTOSHOP</p>
                        <p>FIGMA</p>
                        <p>ILLUSTRATOR</p>
                    </div>
                </section>

                <section className="contact-me-section">
                    <h3 className='contact-me-section-title'>CONTACT ME</h3>
                    <div className="contact-section-article-wrapper">
                        <article className="contact-section-article">
                            <p>
                                Email address:
                            </p>
                            <p>
                                tn2701@gmail.com
                            </p>
                        </article>
                        <article className="contact-section-article">
                            <p>
                                LinkedIn Profile:
                            </p>
                            <p>
                                https://www.linkedin.com/in/toni-naumoski-2859293b/
                            </p>
                        </article>
                    </div>
                </section>
            </section>
        </div>

    );
}

