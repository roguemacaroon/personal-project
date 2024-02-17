//we need to add an event listener that will listen for a button click and then run a function that will change out styles throughout the entire document

//best practice - first be sure the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  //html button ref variable
  const antiHeroButton = document.querySelector(".anti-hero-mode");
  //making normal mode the standard to help with toggle functions later
  let isDeadpoolMode = false;

  // event listener listens for a click event and then runs the function
  antiHeroButton.addEventListener("click", function () {
    //ensuring that the button is working!
    console.log("deadpool mode engaged");

    //toggle lines for hamburger menu
    //html variable
    const menuLines = document.querySelectorAll("span.line");
    //function
    menuLines.forEach(function (lineChange) {
      lineChange.classList.toggle("line-change");
    });

    //toggle color for header
    const headerLinks = document.querySelectorAll("header a");
    headerLinks.forEach((link) => {
      link.classList.toggle("mode-two");
    });

    // toggle heading-one to anti-hero-heading
    //html variable
    const headingOnes = document.querySelectorAll(".heading-one");
    //function
    headingOnes.forEach(function (headingOne) {
      headingOne.classList.toggle("anti-hero-heading");
    });

    //toggle heading-two to anti-hero-heading-two
    //html variable
    const headingTwos = document.querySelectorAll(".heading-two");
    //function
    headingTwos.forEach(function (headingTwo) {
      headingTwo.classList.toggle("anti-hero-heading-two");
    });

    // toggle class anti-hero-paragraph to each paragraph element
    //html variable
    const paragraphs = document.querySelectorAll("p");
    //function
    paragraphs.forEach(function (paragraph) {
      paragraph.classList.toggle("anti-hero-paragraph");
    });

    //toggle class anti-hero-title to each title element
    const titles = document.querySelectorAll("h2.title, p.title, h3");
    titles.forEach(function (title) {
      title.classList.toggle("anti-hero-title");
    });

    //toggle class anti-hero-links to each link element
    const antiHeroLinks = document.querySelectorAll("a");
    antiHeroLinks.forEach(function (antiHeroLink) {
      antiHeroLink.classList.toggle("anti-hero-links");
    });

    const antiHeroHovers = document.querySelectorAll(".card");
    antiHeroHovers.forEach(function (antiHeroHover) {
      antiHeroHover.classList.toggle("mode-two-card");
    });

    const antiHeroOpens = document.querySelectorAll(".open");
    antiHeroOpens.forEach(function (antiHeroOpen) {
      antiHeroOpen.classList.toggle("antihero-open");
    });

    const antiHeroCloses = document.querySelectorAll(".close");
    antiHeroCloses.forEach(function (antiHeroClose) {
      antiHeroClose.classList.toggle("antihero-close");
    });

    //unhide easter eggs
    const eggOne = document.querySelector(".modal-easter-egg");
    if (!isDeadpoolMode) {
      eggOne.style.display = "flex";
    } else {
      eggOne.style.display = "none";
    }

    const eggTwo = document.querySelector(".modal-easter-egg-img");
    if (!isDeadpoolMode) {
      eggTwo.style.display = "flex";
    } else {
      eggTwo.style.display = "none";
    }

    //-------Change out paragraphs in hero section ----
    //toggle hero intro paragraph and anti-hero intro paragraph
    const heroP = document.querySelector(".hero-intro");
    //function
    heroP.classList.toggle("hidden");

    const antiHeroP = document.querySelector(".anti-hero-intro");
    //function
    antiHeroP.classList.toggle("hidden");

    //-------------
    //Image changes

    // Change hero image source based on the current state
    const heroImg = document.querySelector("#hero-image img");
    if (!isDeadpoolMode) {
      // Change to Deadpool mode image
      heroImg.src = "/assets/images/passion-illustration.jpg";
    } else {
      // Change back to original image
      heroImg.src = "/assets/images/hero-image-mobile.jpg";
    }
    //for desktop mode
    const deskHeroImg = document.querySelector("#hero-desk-image");
    if (!isDeadpoolMode) {
      // Change to Deadpool mode image
      deskHeroImg.srcset = "/assets/images/webdev-is-my-passion-smaller.png";
    } else {
      // Change back to original image
      deskHeroImg.srcset = "/assets/images/responsive-image.jpg";
    }
    //change about me photo
    const aboutImg = document.querySelector("#about-me-image");
    if (!isDeadpoolMode) {
      // Change to Deadpool mode image
      aboutImg.src = "/assets/images/anti-hero-picture.png";
    } else {
      // Change back to original image
      aboutImg.src = "/assets/images/responsive-image.jpg";
    }
    // linkedin
    const linkedinImgs = document.querySelectorAll(".socialImgLinkedin");
    if (!isDeadpoolMode) {
      // Change to Deadpool mode image
      linkedinImgs.forEach((linkedinImg) => {
        linkedinImg.src = "/assets/icons/bxl-linkedin-secondary.svg";
      });
    } else {
      // Change back to original image
      linkedinImgs.forEach((linkedinImg) => {
        linkedinImg.src = "/assets/icons/bxl-linkedin.svg";
      });
    }
    // github
    const githubImgs = document.querySelectorAll(".socialImgGithub");
    if (!isDeadpoolMode) {
      // Change to Deadpool mode image
      githubImgs.forEach((githubImg) => {
        githubImg.src = "/assets/icons/bxl-github-secondary.svg";
      });
    } else {
      // Change back to original image
      githubImgs.forEach((githubImg) => {
        githubImg.src = "/assets/icons/bxl-github.svg";
      });
    }
    //instagram
    const instagramImgs = document.querySelectorAll(".socialImgInstagram");
    if (!isDeadpoolMode) {
      // Change to Deadpool mode image
      instagramImgs.forEach((instagramImg) => {
        instagramImg.src = "/assets/icons/bxl-instagram-secondary.svg";
      });
    } else {
      // Change back to original image
      instagramImgs.forEach((instagramImg) => {
        instagramImg.src = "/assets/icons/bxl-instagram.svg";
      });
    }
    //arrows
    const arrowImgs = document.querySelectorAll(".socialImgArrow");
    if (!isDeadpoolMode) {
      // Change to Deadpool mode image
      arrowImgs.forEach((arrowImg) => {
        arrowImg.src = "/assets/icons/arrow-secondary.svg";
      });
    } else {
      // Change back to original image
      arrowImgs.forEach((arrowImg) => {
        arrowImg.src = "/assets/icons/arrow.svg";
      });
    }
    // Toggle the state (if it IS deadpool mode, then make it NOT deadpool mode)
    isDeadpoolMode = !isDeadpoolMode;
  });
});
