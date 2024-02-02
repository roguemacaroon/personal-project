function handleModal(openBtnId, closeBtnId, modalId) {
    const modalElement = document.getElementById(modalId);
    const openBtn = document.getElementById(openBtnId);
    const closeBtn = document.getElementById(closeBtnId);

    const openModal = function () {
        modalElement.classList.remove("hidden");
    };

    const closeModal = function () {
        modalElement.classList.add("hidden");
    };

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    document.addEventListener("click", function (event) {
        if (event.target === modalElement) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modalElement.classList.contains("hidden")) {
            closeModal();
        }
    });
};

// Call the function for the first modal
handleModal("open-modal", "close-modal", "modal");