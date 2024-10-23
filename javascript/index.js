const URL = "http://localhost:3000/employees";

let options = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({
        "id": "6",
        "name": "Sudheer",
        "jobrole": "Mama Momo's Co Owner"
    })
}
fetch(URL, options)
    .then(response => {
        if (response.ok) {
            console.log("Inserted : ", response.status, response.statusText);
            return response.json()
        }
    }).then(data => console.log(data));