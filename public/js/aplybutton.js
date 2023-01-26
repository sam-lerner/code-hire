const button2 = document.querySelector("#h");

function applyButton (event) {
    event.preventDefault
    window.location.replace("/api/jobpost")
    console.log("clicked registered")
};
button2.addEventListener("click",applyButton)