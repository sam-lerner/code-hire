const button = document.querySelector("#T");

function applyButton (event) {
    event.preventDefault
    window.location.replace("/api/reviews")
    console.log("clicked registered")
};
button.addEventListener("click",applyButton)