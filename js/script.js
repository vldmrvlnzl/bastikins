document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("NO");
    const yesButton = document.getElementById("YES");
    const modal = document.getElementById("valentineModal");
    const closeModal = document.querySelector(".close");

    // Function to move the NO button
    function moveButton() {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    // Function to show the modal
    function showModal() {
        modal.style.display = "flex"; // Make modal visible
    }

    // Function to hide the modal
    function hideModal() {
        modal.style.display = "none"; // Hide modal
    }

    // Event Listeners
    noButton.addEventListener("mouseenter", moveButton); // Move NO button on hover
    yesButton.addEventListener("click", showModal); // Show modal on YES click
    closeModal.addEventListener("click", hideModal); // Close modal when clicking the X button

    // Close modal when clicking outside the modal-content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });
});