const button2 = document.querySelector("#h");

// function applyButton (event) {
//     event.preventDefault
//     window.location.replace("/jobpost")
//     console.log("clicked registered")
// };


function onApplyButtonClick(event, jobId) {
    event.preventDefault();
    window.location.href = '/jobpost/' + jobId;
    console.log("clicked registered");
  }
    ;button2.addEventListener("click",applyButton)
