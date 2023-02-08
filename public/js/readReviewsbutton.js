const button = document.querySelector("#T");

// function reviewButton (event) {
//     event.preventDefault
//     window.location.replace("/api/reviews")
//     console.log("clicked registered")
// };
// button.addEventListener("click",applyButton)

function reviewButtonClick(event, jobId) {
    event.preventDefault();
    window.location.href = '/api/reviews/' + jobId;
    console.log("clicked registered");
  }