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
}
openBtn.addEventListener("click", openModal); 
// CLOSE MODAL LOGIC
const closeModal = function () {
    modalElement.classList.add("hidden");
}

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
