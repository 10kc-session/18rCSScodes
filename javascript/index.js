let output = document.getElementById("output");
let newWindow;
document.getElementById("openWindow").addEventListener("click", () => {
    newWindow = window.open("http://127.0.0.1:5500/javascript/index.html", "_blank", "width=500,height=500");
    output.innerText = "New Window Opened";
})
document.getElementById("closeWindow").addEventListener("click", () => {
    newWindow.close();
    output.innerText = "Window Closed"
})
document.getElementById("promptWindow").addEventListener("click", () => {
    let value = window.prompt("Enter Any Message : ", "Hello There");
    output.innerText = value;
})
document.getElementById("alertWindow").addEventListener("click", () => {
    window.alert("BOM -> Browser Object Model");
})
document.getElementById("confirmWindow").addEventListener("click", () => {
    let flag = window.confirm("Do you want close the window");
    if (flag) {
        newWindow.close();
    } else {
        output.innerText = "Window Not Closed";
    }
})
document.getElementById("scrollWindow").addEventListener("click", () => {
    window.scroll({
        top: 500,
        behavior: "smooth"
    });
    window.setTimeout(() => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }, 2000)
})

document.getElementById("resize").addEventListener("click", () => {
    newWindow.resizeTo("300", "300");
})

let interval;
document.getElementById("start").addEventListener("click", () => {
    let seconds = window.prompt("Enter Seconds");
    let count = 1;
    interval = window.setInterval(() => {
        output.innerText = count++;
    }, 1000);
    setTimeout(() => {
        window.clearInterval(interval);
    }, +seconds * 1000);
})

document.getElementById("stop").addEventListener("click", () => {
    window.clearInterval(interval);
})
