document.addEventListener("DOMContentLoaded", function () {
  //basics
  const antiHeroButton = document.querySelector(".anti-hero-mode");
  let isDeadpoolMode = false;
  let firstTime = true;

  function alertPop() {
    if (!isDeadpoolMode && firstTime) {
      firstTime = false;
      alert(
        "You have enabled Deadpool Mode! Click the Deadpool logo again to turn it off"
      );
    }
    // else {
    //   console.log("Popup will only display once until page is refreshed.");
    // }
  }

  // headings and paragraphs
  function toggleHeadings() {
    const headingOnes = document.querySelectorAll(".heading-one");
    headingOnes.forEach(function (headingOne) {
      headingOne.classList.toggle("anti-hero-heading");
    });

    const headingTwos = document.querySelectorAll(".heading-two");
    headingTwos.forEach(function (headingTwo) {
      headingTwo.classList.toggle("anti-hero-heading-two");
    });
  }

  function toggleParagraphs() {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function (paragraph) {
      paragraph.classList.toggle("anti-hero-paragraph");
    });
  }

  function toggleTitles() {
    const titles = document.querySelectorAll("h2.title, p.title, h3");
    titles.forEach(function (title) {
      title.classList.toggle("anti-hero-title");
    });
  }

  function toggleHeroIntro() {
    const heroP = document.querySelector(".hero-intro");
    heroP.classList.toggle("hidden");

    const antiHeroP = document.querySelector(".anti-hero-intro");
    antiHeroP.classList.toggle("hidden");
  }

  // links and hover

  function toggleAntiHeroLinks() {
    const antiHeroLinks = document.querySelectorAll("a");
    antiHeroLinks.forEach(function (antiHeroLink) {
      antiHeroLink.classList.toggle("anti-hero-links");
    });
  }

  function toggleAntiHeroHovers() {
    const antiHeroHovers = document.querySelectorAll(".card");
    antiHeroHovers.forEach(function (antiHeroHover) {
      antiHeroHover.classList.toggle("mode-two-card");
    });
  }

  function toggleLines() {
    const menuLines = document.querySelectorAll("span.line");
    menuLines.forEach(function (lineChange) {
      lineChange.classList.toggle("line-change");
    });
  }

  function toggleNavColors() {
    const headerLinks = document.querySelectorAll("header a");
    headerLinks.forEach(function (link) {
      link.classList.toggle("mode-two");
    });
  }

  //modal

  function toggleAntiHeroOpens() {
    const antiHeroOpens = document.querySelectorAll(".open");
    antiHeroOpens.forEach(function (antiHeroOpen) {
      antiHeroOpen.classList.toggle("antihero-open");
    });
  }

  function toggleAntiHeroCloses() {
    const antiHeroCloses = document.querySelectorAll(".close");
    antiHeroCloses.forEach(function (antiHeroClose) {
      antiHeroClose.classList.toggle("antihero-close");
    });
  }

  //easter eggs in modal

  function toggleEasterEggs() {
    const eggOne = document.querySelector(".modal-easter-egg");
    eggOne.style.display = isDeadpoolMode ? "none" : "flex";

    const eggTwo = document.querySelector(".modal-easter-egg-img");
    eggTwo.style.display = isDeadpoolMode ? "none" : "flex";
  }

  // images

  function toggleImages() {
    const heroImg = document.querySelector("#hero-image img");
    if (!isDeadpoolMode) {
      heroImg.src = "/assets/images/passion-illustration.jpg";
    } else {
      heroImg.src = "/assets/images/hero-image-mobile.jpg";
    }

    const deskHeroImg = document.querySelector("#hero-desk-image");
    if (!isDeadpoolMode) {
      deskHeroImg.srcset = "/assets/images/webdev-is-my-passion-smaller.png";
    } else {
      deskHeroImg.srcset = "/assets/images/responsive-image.jpg";
    }

    const aboutImg = document.querySelector("#about-me-image");
    if (!isDeadpoolMode) {
      aboutImg.src = "/assets/images/anti-hero-picture.png";
    } else {
      aboutImg.src = "/assets/images/responsive-image.jpg";
    }
  }

  function toggleLinkedinImages() {
    const linkedinImgs = document.querySelectorAll(".socialImgLinkedin");
    linkedinImgs.forEach(function (linkedinImg) {
      if (!isDeadpoolMode) {
        linkedinImg.src = "/assets/icons/bxl-linkedin-secondary.svg";
      } else {
        linkedinImg.src = "/assets/icons/bxl-linkedin.svg";
      }
    });
  }

  function toggleGithubImages() {
    const githubImgs = document.querySelectorAll(".socialImgGithub");
    githubImgs.forEach(function (githubImg) {
      if (!isDeadpoolMode) {
        githubImg.src = "/assets/icons/bxl-github-secondary.svg";
      } else {
        githubImg.src = "/assets/icons/bxl-github.svg";
      }
    });
  }

  function toggleInstagramImages() {
    const instagramImgs = document.querySelectorAll(".socialImgInstagram");
    instagramImgs.forEach(function (instagramImg) {
      if (!isDeadpoolMode) {
        instagramImg.src = "/assets/icons/bxl-instagram-secondary.svg";
      } else {
        instagramImg.src = "/assets/icons/bxl-instagram.svg";
      }
    });
  }

  function toggleArrowImages() {
    const arrowImgs = document.querySelectorAll(".socialImgArrow");
    arrowImgs.forEach(function (arrowImg) {
      if (!isDeadpoolMode) {
        arrowImg.src = "/assets/icons/arrow-secondary.svg";
      } else {
        arrowImg.src = "/assets/icons/arrow.svg";
      }
    });
  }

  function antiHeroClick() {
    alertPop();
    toggleHeadings();
    toggleParagraphs();
    toggleTitles();
    toggleHeroIntro();
    toggleAntiHeroLinks();
    toggleAntiHeroHovers();
    toggleLines();
    toggleNavColors();
    toggleAntiHeroOpens();
    toggleAntiHeroCloses();
    toggleEasterEggs();
    toggleImages();
    toggleLinkedinImages();
    toggleGithubImages();
    toggleInstagramImages();
    toggleArrowImages();
    isDeadpoolMode = !isDeadpoolMode;
  }

  antiHeroButton.addEventListener("click", antiHeroClick);
});
