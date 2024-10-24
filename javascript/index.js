const URL = 'http://localhost:5000/products/10';
let options = {
    "method": "PATCH",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({
        "product": "Watches"
    })
}
// getData(URL, options);
// postData(URL, options);
// updateData(URL, options);
// partialUpdate(URL, options);

async function getData(URL, options) {
    let res = await fetch(URL, options);
    let data = await res.json();
    console.log(data);
}

async function postData(URL, options) {
    let res = await fetch(URL, options);
    if (res.ok) {
        console.log("Data Inserted ", res.status, res.statusText);
    }
}

async function updateData(URL, options) {
    let res = await fetch(URL, options);
    if (res.ok) {
        console.log("Data Updated ", res.status, res.statusText);
    }
}


async function partialUpdate(URL, options) {
    let res = await fetch(URL, options);
    if (res.ok) {
        console.log("Data Updated ", res.status, res.statusText);
    }
}

async function deleteData(URL, options) {
    let res = await fetch(URL, options);
    if (res.ok) {
        console.log("Data Deleted ", res.status, res.statusText);
    }
}
