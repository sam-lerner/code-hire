
async function post(e) {
    e.preventDefault();
    const jobId = e.jobId;
    const nameEl = document
        .querySelector('input[name="name"]')
        .value;
    console.log("==============");
    console.log(nameEl);
    console.log("==============");
    const reviewEl = document
    .querySelector('input[name="review"]')
    .value;
    console.log(reviewEl);
        const response = await fetch(`/api/reviews/:id`, {
            method: 'POST',
            body: JSON.stringify({ nameEl, reviewEl }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
        location.reload();  
        } else {
            alert('Failed to post review'); 
            
        }
 console.log(response);
    }
    document.querySelector('#btnS').addEventListener('click',post );
    // document.querySelector('#new-comment').addEventListener('click', (e) => {
    //     console.log("hello Kitty");
    //      e.jobId = req.params.id;
    //      post(e);   
    // });
