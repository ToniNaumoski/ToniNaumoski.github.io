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
                    <h2>Web Designer</h2>
                    <h2 className="header-discription">Frontend UI Developer / UI Designer</h2>
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

                            I'm a web designer/front-end developer with more than 10 years of experience.

                            Mixing code and design is my passion.

                            I love to create brand websites/web applications that are very unique, responsive, and
                            detail-oriented.

                            I'm skilled in designing and developing websites and web applications using Html, CSS, and
                            JavaScript(React,
                            Angular, Gsap). I also love working with Photoshop, Figma, and illustrator.
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
                        <p>ANGULAR</p>
                        <p>JAVASCRIPT</p>
                        <p>REACT</p>
                        <p>GREENSOCK ANIMATION PLATFORM</p>
                        <p>PHOTOSHOP</p>
                        <p>FIGMA</p>
                        <p>ILLUSTRATOR</p>
                    </div>
                </section>
                <section className="work-history-section">
                    <h3 className='work-history-title'>WORK HISTORY</h3>
                    <article className='work-history-article'>
                        <h3 className='work-history-article-title'>Frontend UI Developer / Web Designer / UI Designer </h3>
                        <p className='work-history-article-description'>Freelance - Remote</p>
                        <p className='work-history-article-description'>August 2020 to Present </p>
                    </article>

                    <article className='work-history-article'>
                        <h3 className='work-history-article-title'>Frontend UI Developer / Web Designer </h3>
                        <p className='work-history-article-description'>Optima - Skopje</p>
                        <p className='work-history-article-description'>September 2021 to January 2022</p>
                    </article>
                    <article className='work-history-article'>
                        <h3 className='work-history-article-title'>Frontend UI Developer / Web Designer </h3>
                        <p className='work-history-article-description'>Sourcico - Skopje</p>
                        <p className='work-history-article-description'>June 2021 to September 2021</p>
                    </article>
                    <article className='work-history-article'>
                        <h3 className='work-history-article-title'>Frontend Developer / Web Designer </h3>
                        <p className='work-history-article-description'>Seavus - Skopje</p>
                        <p className='work-history-article-description'>November 2020 to May 2021 </p>
                    </article>
                    <article className='work-history-article'>
                        <h3 className='work-history-article-title'>Frontend Developer / Web Designer </h3>
                        <p className='work-history-article-description'>IT Labs - Skopje </p>
                        <p className='work-history-article-description'>January 2020 to April 2020 </p>
                    </article>
                    <article className='work-history-article'>
                        <h3 className='work-history-article-title'>Frontend Developer / Web Designer / UI UX Designer</h3>
                        <p className='work-history-article-description'>SWIFT DATA LLC - Skopje </p>
                        <p className='work-history-article-description'>July 2019 to January 2020 </p>
                    </article>
                    <article className='work-history-article'>
                        <h3 className='work-history-article-title'>Barracuda FX - Skopje </h3>
                        <p className='work-history-article-description'>Frontend Developer / Web Designer</p>
                        <p className='work-history-article-description'>January 2018 to April 2019 </p>
                    </article>
                    <article className='work-history-article'>
                        <h3 className='work-history-article-title'>Frontend Developer / Web Designer</h3>
                        <p className='work-history-article-description'>Seavus - Skopje</p>
                        <p className='work-history-article-description'>February 2016 to January 2018 </p>
                    </article>
                    <article className='work-history-article'>
                        <h3 className='work-history-article-title'>Frontend Developer / Web Designer</h3>
                        <p className='work-history-article-description'>MySoft - Skopje </p>
                        <p className='work-history-article-description'>February 2015 to January 2016</p>
                    </article>
                    <article className='work-history-article'>
                        <h3 className='work-history-article-title'>Web Developer</h3>
                        <p className='work-history-article-description'>Gamut Global Operations - Skopje </p>
                        <p className='work-history-article-description'>April 2014 to February 2015 </p>
                    </article>
                    <article className='work-history-article'>
                        <h3 className='work-history-article-title'>Designer / Web Designer / Web Developer</h3>
                        <p className='work-history-article-description'>Gamut Global Operations - Skopje </p>
                        <p className='work-history-article-description'>April 2014 to February 2015 </p>
                    </article>
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

