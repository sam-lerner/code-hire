const jobSearchFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const location = document.querySelector('#location').value.trim();
    const qualification = document.querySelector('#qualification').value.trim();
    let queryString = '';
    if (title) {
        queryString += `title=${title}`;
    }
    if (location) {
        if (queryString !== '') {
            queryString += '&'
        }
        queryString += `location=${location}`;
    }
    if (qualification) {
        if (queryString !== '') {
            queryString += '&'
        }
        queryString += `qualification=${qualification}`;
    }
    const url = `/api/job/search?${queryString}`;
    console.log(queryString)
    const response = await fetch(url);
    if (response.ok) {
        window.location.replace(url)
    } else {
        alert(response.statusText);
    }
}

document.querySelector(".job-search")
    .addEventListener("submit", jobSearchFormHandler);
