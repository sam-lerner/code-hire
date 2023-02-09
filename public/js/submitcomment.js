
async function post(e) {
    e.preventDefault();
    const jobId = e.jobId;
    const nameEl = document
        .querySelector('input[name="name"]')
        .value;
    console.log(nameEl);
    const reviewEl = document
    .querySelector('input[name="review"]')
    .value;
    console.log(reviewEl);
    console.log('hello');
        const response = await fetch(`/api/reviews/${jobId}`, {
            method: 'POST',
            body: JSON.stringify({ nameEl, reviewEl }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to post review');
        }
}