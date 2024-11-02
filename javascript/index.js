const URL = "http://localhost:5000/products";

let container = document.getElementById("container");
let name = document.getElementById("name");
let price = document.getElementById("price");

// To Print The Data 
async function getData() {
    container.innerHTML = '';
    let response = await fetch(URL);
    let data = await response.json();
    data.forEach(obj => {
        let div = document.createElement("div");
        for (let key in obj) {
            let p = document.createElement("p");
            p.innerText = obj[key];
            div.appendChild(p);
        }

        // Created Remove Button 
        let button = document.createElement('button');
        button.textContent = "Remove";

        button.onclick = () => {
            deleteData(obj["id"]);
            div.remove();
        }
        div.appendChild(button);
        container.appendChild(div);
    });
}


async function deleteData(id) {
    let response = await fetch('http://localhost:5000/products/' + id, {
        "method": "DELETE"
    });
    if (response.ok) {
        alert("Data Deleted");
    }
}



// To Collect Data from input tag
let count = 0;
function postData() {
    count = count + 1;
    let options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "id": count.toString(),
            "name": name.value,
            "price": price.value
        })
    }
    insertDataToJsonServer(URL, options);
}

// To Insert Data into JSON server
async function insertDataToJsonServer(URL, options) {
    price.value = '';
    name.value = '';
    let response = await fetch(URL, options);
    if (response.ok) {
        alert("Data Inserted");
        getData();
    }
    else {
        alert("Something Went Wrong ", response.statusText);
    }
}

window.onload = getData;