
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

    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        // Do something with the data
    } else {
        alert(response.statusText);
    }
}

document.querySelector(".job-search")
    .addEventListener("submit", jobSearchFormHandler);


// const jobSearchFormHandler = async (event) => {
//     event.preventDefault();
//     console.log("Searching")
//     const title = document.querySelector('#title').value.trim();
//     const salary_range = document.querySelector('#salaryrange').value.trim();
//     const category = document.querySelector('#category').value.trim();
//     const location = document.querySelector('#location').value.trim();
//     const skills = document.querySelector('#skills').value.trim();
//     let conditionalPost = {};
//     title ? conditionalPost.title = title : null;
//     salary_range ? conditionalPost.salary_range = salary_range : null;
//     category ? conditionalPost.category = category : null;
//     location ? conditionalPost.location = location : null;
//     skills ? conditionalPost.skills = skills : null;


    // const response = await fetch('/api/job', {
    //     method: 'GET',
    //     body: JSON.stringify({ ...conditionalPost }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });

//     const queryString = Object.keys(conditionalPost).map(key => key + '=' + conditionalPost[key]).join('&');
//     const url = '/api/job?' + queryString;
//     const response = await fetch(url);


//     if (response.ok) {
//         document.location.replace('/job')
//     } else {
//         alert(response.statusText);
//         document.querySelector('#jobsearch-form').style.display = 'block';
//     }

// }

// document.querySelector(".job-search")
//     .addEventListener("submit", jobSearchFormHandler);
