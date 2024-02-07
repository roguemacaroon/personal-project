//======HEADER=========
//=====================

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

navLink.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});

//tapping outside of the hamburger menu would cause the menu to close
document.addEventListener("click", function (event) {
  //check if nav-link does not contain a class of hide && if event target/clicked area is not the nav link
  //event is a special parameter word 
  //it gives an object of the event itself
  if (!event.target.classList.contains("nav-link")&& !event.target.classList.contains("hamburger"))
  if (!navLink.classList.contains("hide")){
      //code that runs if condition is true

    console.log("nav link is open AND clicked area is not nav-link menu");
    navLink.classList.toggle('hide');
    
        }
});

//=======MODAL=========
//=====================

// HTML Reference Variables - HTML Elements JS will interact with
// modal element
const modalElement = document.getElementById("modal");
// open modal button
const openBtn = document.getElementById("open-modal");
// close modal button
const closeBtn = document.getElementById("close-modal");

// OPEN MODAL logic
const openModal = function () {
    modalElement.classList.remove("hidden");
    //overflow hidden add to body
    document.body.classList.add("stop-scroll");

}

// CLOSE MODAL LOGIC
const closeModal = function () {
    modalElement.classList.add("hidden");
    //overflow hidden removed from body
    document.body.classList.remove("stop-scroll");
}

openBtn.addEventListener("click", openModal); 
closeBtn.addEventListener("click", closeModal); 

// CLOSE MODAL ON BACKGROUND CLICK LOGIC
document.addEventListener("click", function (event) {
    //if the clicked item contains the class of modal hide the modal
    //event is a special parameter word 
    //it gives an object of the event itself
    if (event.target.classList.contains("modal"))
        //code that runs if condition is true
        {  closeModal();
          }
});

// if i press the escape key WHILE the modal is open (has a class of hidden), remove the the class of hidden on the modalElement. This will make the modal invisible!
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
});
