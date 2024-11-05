let output = document.getElementById("output");

window.addEventListener("DOMContentLoaded", () => {
    output.innerText = "DOM Loaded"
})
document.getElementById("mouseOver").addEventListener("mouseover", () => {
    output.innerText = "Mouse Hovered On Me";
});

document.getElementById("mouseOut").addEventListener("mouseout", () => {
    output.innerText = "Mouse Out";
})

document.getElementById("click").onclick = () => {
    output.innerText = "Clicked On Me"
    output.classList.add("text");
}

document.getElementById("dbClick").ondblclick = () => {
    output.innerText = "Double Click";
}
let input = document.getElementById("data");
input.addEventListener("input", () => {
    output.innerText = input.value.toUpperCase();
})

input.addEventListener("blur", () => {
    if (input.value.length === 0) {
        document.querySelector("span").innerText = "Please Enter Data";
    }
    else {
        document.querySelector("span").innerText = '';
    }
    input.classList.remove("focus");
    output.innerText = "Bye Bye"
})

input.addEventListener("focus", () => {
    input.classList.add("focus");
})

