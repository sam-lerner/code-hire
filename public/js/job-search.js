const jobSearchFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const location = document.querySelector('#location').value.trim();
    let queryString = '';
    if (title) {
        queryString += `title=${title}`;
    }
    if (location) {
        if (queryString !== '') {
            queryString += '&';
        }
        queryString += `location=${location}`;
    }
    const url = `/api/job?${queryString}`;
    console.log(queryString)
    const response = await fetch(url);
    if (response.ok) {
     document.location.replace()
    } else {
        alert(response.statusText);
    }
}

document.querySelector(".job-search")
    .addEventListener("submit", jobSearchFormHandler);
