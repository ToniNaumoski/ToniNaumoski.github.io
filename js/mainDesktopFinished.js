
var body = document.body;
var projectArticle;
var projectTitle;
var projecImage;
var projecDescription;
var projectNumber;
var windowLastPositionY = null;
var elTop;
var finishedAnimation;
var waitForTheNextScroll = false;
var scrollDirecton;
var prevYOffset;
var currentYOffset;
// page direction is up or down
var pageDirection;
var windowDeltaY;

window.addEventListener('load', (event) => {

    // set window Y Offset
    prevYOffset = window.pageYOffset;
    var windowDeltaY = 0;
    // set default animation to finished
    finishedAnimation = true;
    // set position of the project element from the top
    elTop = document.querySelector('#projects').offsetTop - document.querySelector('#projects').scrollTop + document.querySelector('#projects').clientTop;
    // document body declaration    
    body = document.body;
    // setTimeout(() => {
    //     body.classList.remove("overflow-hidden");
    // }, 1500);
    // define project articles
    projectArticle = document.querySelectorAll('.project-article');
    // define project titles
    projectTitle = document.querySelectorAll('.project-title');
    // define project images
    projecImage = document.querySelectorAll('.project-image');
    // define project descriptions
    projecDescription = document.querySelectorAll('.project-description');
    // define project number
    projectNumber = null;

    // project function used to animate projects
    function projects() {
        finishedAnimation = false;
        // if project number is not defined
        if (projectNumber == null) {
            projectNumber = 0;
            projecImage[projectNumber].classList.add("project-image-animate");
            projectTitle[projectNumber].classList.add("project-title-animate");
            projecDescription[projectNumber].classList.add("project-description-animate");
            setTimeout(() => {
                finishedAnimation = true;
            }, 2000);
            // if project number is defined
        } else {

                // page is scroll down
                projectNumber++;
                // if project number or lenged is at last position scroll top to next section
                if (projectNumber == projectArticle.length) {
      
                    waitForTheNextScroll = true;
              
                    // remove prev animation add next animation

                    // remove add class from the prev element
                    projecImage[projectNumber - 1].classList.remove("project-image-animate");
                    projectTitle[projectNumber - 1].classList.remove("project-title-animate");
                    projecDescription[projectNumber - 1].classList.remove("project-description-animate");
                    projecImage[projectNumber - 1].classList.add("project-image-animate-hide");
                    projectTitle[projectNumber - 1].classList.add("project-title-animate-hide");
                    projecDescription[projectNumber - 1].classList.add("project-description-animate-hide");
                    // wait for animation to finish
                    // wait for animation to finish
                    scrollTop()
                    setTimeout(() => {
                        // remove prev animation from view porn and back to hidden state
                        projecImage[projectNumber - 1].classList.remove("project-image-animate-hide");
                        projectTitle[projectNumber - 1].classList.remove("project-title-animate-hide");
                        projecDescription[projectNumber - 1].classList.remove("project-description-animate-hide");
                        // add animation for the current element
              
                        // projecImage[projectNumber].classList.add("project-image-animate");
                        // projectTitle[projectNumber].classList.add("project-title-animate");
                        // projecDescription[projectNumber].classList.add("project-description-animate");
                        projectNumber = null;
                        // after animation is finised set animation finished to true
                        // setTimeout(() => {
                        //     // finishedAnimation = true;
                        //     projectNumber = null;
                        // }, 2000);
                  
                    }, 1400);
            
                    


              

                } else {

                    // remove add class from the prev element
                    projecImage[projectNumber - 1].classList.remove("project-image-animate");
                    projectTitle[projectNumber - 1].classList.remove("project-title-animate");
                    projecDescription[projectNumber - 1].classList.remove("project-description-animate");
                    // add class for prev element to fade on top
                    projecImage[projectNumber - 1].classList.add("project-image-animate-hide");
                    projectTitle[projectNumber - 1].classList.add("project-title-animate-hide");
                    projecDescription[projectNumber - 1].classList.add("project-description-animate-hide");



                    // wait for animation to finish
                    setTimeout(() => {
                        // remove prev animation from view porn and back to hidden state
                        projecImage[projectNumber - 1].classList.remove("project-image-animate-hide");
                        projectTitle[projectNumber - 1].classList.remove("project-title-animate-hide");
                        projecDescription[projectNumber - 1].classList.remove("project-description-animate-hide");
                        // add animation for the current element
                        projecImage[projectNumber].classList.add("project-image-animate");
                        projectTitle[projectNumber].classList.add("project-title-animate");
                        projecDescription[projectNumber].classList.add("project-description-animate");
                        // after animation is finised set animation finished to true
                        setTimeout(() => {
                            finishedAnimation = true;
                        }, 2000);
                    }, 1400);
                }
            
        }

    }

    // on page load if animation element is in view port animate element
    if ((window.pageYOffset > elTop || window.pageYOffset == elTop) && window.pageYOffset < elTop + document.querySelector('#projects').offsetHeight) {
        projects();
    }

    // function for stop scroll top 
    function scrollTop() {
         
         window.scrollTo(0, document.querySelector('#skills').offsetTop - document.querySelector('#skills').scrollTop + document.querySelector('#skills').clientTop)
        //  window.scrollTo({top:document.querySelector('#skills').offsetTop - document.querySelector('#skills').scrollTop + document.querySelector('#skills').clientTop,  behavior: 'smooth',})

         prevYOffset = document.querySelector('#skills').offsetTop - document.querySelector('#skills').scrollTop + document.querySelector('#skills').clientTop;
        setTimeout(() => {
            // waitForTheNextScroll = false;
            finishedAnimation = true;
        }, 2000);
        //set page to scroll
    //     if (waitForTheNextScroll) {
         
    //           document.getElementById('job-history').scrollIntoView({block: 'start', behavior: 'smooth'})
    //          window.scrollBy(0, 2000)
    //         //    window.scroll(0,  document.querySelector('#skills').offsetTop - document.querySelector('#skills').scrollTop + document.querySelector('#skills').clientTop);
    //         //    window.scroll(0,  4000);

    //         //   currentYOffset = document.querySelector('#projects').offsetTop - document.querySelector('#projects').scrollTop + document.querySelector('#projects').clientTop + document.querySelector('#projects').offsetHeight;
    //   //      document.querySelector('#skills').scrollIntoView();
    //         // set timeout is used to not ba able to get back to animation untill page is scrolled
    //         setTimeout(() => {
    //             // waitForTheNextScroll = false;
    //             finishedAnimation = true;
    //         }, 2000);
        // } else {
        //     // document.querySelector('#projects').scrollIntoView();
        //     // enter value of project y scroll here
        //     // window.scroll(0, document.querySelector('#projects').offsetTop - document.querySelector('#projects').scrollTop + document.querySelector('#projects').clientTop);
        //     // currentYOffset = document.querySelector('#projects').offsetTop - document.querySelector('#projects').scrollTop + document.querySelector('#projects').clientTop;

        // }
    }

    // function that will return page scroll direction up or down;
    function scrollDirecton(deltaY) {
        // if prev value is bigger than window.pageYOffset page is scrolled up
        if (0 > deltaY) {
            return 'up';
            // else page is scroll down remember if animation is in place page will not move;
        } else {
            return 'down';
        }
    }

    // skills animation function 
    function skillAnimateFunction(addOrRemove) {
        // add or remove skills
        // skills
      let skillBar = document.querySelectorAll('.skill-bar');
       let tooltip = document.querySelectorAll('.tooltip');
        let i;
        for(i = 0;  i < skillBar.length; i++) {
            if(addOrRemove == 'add') {
                skillBar[i].classList.add("skills-animate");
                tooltip[i].classList.add("tooltip-animate");
            } else if(addOrRemove == 'remove') {
                skillBar[i].classList.remove("skills-animate");
                tooltip[i].classList.remove("tooltip-animate");   
            }
        }
    }



    
    function enableScrolling(){
        window.onscroll=function(){};
    }

    // on page scroll event
    document.addEventListener(
        'wheel',
        (event) => {
            if(prevYOffset < 0) {
                prevYOffset = 0;
            }  
            if (prevYOffset > document.body.scrollHeight - document.documentElement.clientHeight) {
                prevYOffset = document.body.scrollHeight - document.documentElement.clientHeight;
            }
            var top = document.querySelector('#projects').offsetTop - document.querySelector('#projects').scrollTop + document.querySelector('#projects').clientTop;

            if ((window.scrollY > top || window.scrollY == top) && window.scrollY < top + document.querySelector('#projects').offsetHeight) {
                window.scroll({
                    top:top,
                    behavior: 'smooth'
                  });
                // wait for the next scroll is triger that will add logic for page to go to next section or stick at animation
                // if (!waitForTheNextScroll) {
                //     scrollTop()
                // }
                // if prev animation is finised and wait for next section is false execute animate elements function
                if (finishedAnimation) {
                    projects();
                }
            }
            else if(scrollDirecton(event.deltaY) == 'up') {
                window.scroll({
                    top: prevYOffset - 100,
                    behavior: 'smooth'
                  });
                  prevYOffset = prevYOffset - 100;
            } else {
                window.scroll({
                    top: prevYOffset + 100,
                    behavior: 'smooth'
                  });
                  prevYOffset = prevYOffset + 100;
            }

        
                         //  window.scrollBy(0, 200)
            // // this script is element top from top of the page
            // var top = document.querySelector('#projects').offsetTop - document.querySelector('#projects').scrollTop + document.querySelector('#projects').clientTop;
            // // if animation element is in view port 
            // if ((window.scrollY > top || window.scrollY == top) && window.scrollY < top + document.querySelector('#projects').offsetHeight) {

            //     // wait for the next scroll is triger that will add logic for page to go to next section or stick at animation
            //     // if (!waitForTheNextScroll) {
            //     //     scrollTop()
            //     // }
            //     // if prev animation is finised and wait for next section is false execute animate elements function
            //     if (finishedAnimation) {
            //         projects();
            //     }
            // }

            // window.pageYOffset = currentYOffset;
            // set prev scroll value
            // prevYOffset = window.scrollY;
            // skill bar
      
            // skills animate
            var skills = document.querySelector('#skills').offsetTop - document.querySelector('#skills').scrollTop + document.querySelector('#skills').clientTop;
            if ((window.scrollY > skills || window.scrollY == skills)) {
                skillAnimateFunction('add');
            } 

            if (window.scrollY < skills) {
                skillAnimateFunction('remove');
            } 
        },
        { passive: true })
});














