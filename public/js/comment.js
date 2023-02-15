const commentFormHandler = async (event) => {
  event.preventDefault();
  
  const content = document.querySelector('#content').value.trim();
  const job_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

  

  if (content) {
      const response = await fetch('/api/comment', {
          method: "POST",
          body: JSON.stringify({content, job_id}),
          headers: {"Content-Type" : "application/json"},
      });

      if(response.ok) {
          document.location.reload();
      } else {
          console.log(job_id);
          console.log(typeof job_id);
          alert('failed to comment');
      }
  }
}


document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);