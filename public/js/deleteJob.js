const deleteHandler = async (event) => {
    event.preventDefault();
    
    const id = event.target.getAttribute('data-value');
    console.log(id)


    const response = await fetch(`/api/profile/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.reload();
        console.log(id)
    } else {
        alert('failed to delete');
        console.log(id)
    }
}


const deleteButton = document.querySelectorAll('.delete-btn');
deleteButton.forEach((button) => {
    button.addEventListener('click', deleteHandler)
})
// document.querySelector('#delete-job').addEventListener('click', deleteHandler);