async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment = document
      .querySelector('input[name="comment"]')
      .value.trim();
  
    const job_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          job_id,
          comment,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
        document.querySelector('#comment-form').style.display = 'block';
      }
    }
  }
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);