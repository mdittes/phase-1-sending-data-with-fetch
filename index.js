// Add your code here
/* Write a function submitData
    submitData takes two strings as arguments
        one is user's name, other is user's email
    POST request to local host URL using fetch()
        includes destination URL
        headers for Content-Type and Accept
        body with name and email as arguments to submitData
            'name' and 'email' are keys within an object
                object should be stringified
*/

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(res => res.json())
    .then(object => document.body.innerHTML = object["id"])
    .catch(error => document.body.innerHTML = error.message)
};

