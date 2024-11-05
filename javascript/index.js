let input = document.querySelector("input");

let passwordMessage = document.getElementById("passwordMessage");

// let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[@!#$%^]).{8,}$/

document.getElementById("form").addEventListener("submit", (event) => {
    // if (!pattern.test(input.value)) {
    //     passwordMessage.innerText = "Hogaya"
    //     event.preventDefault();
    // }
    // else {
    //     passwordMessage.innerText = ''
    // }
    if (input.value.length >= 8) {
        let numberFlag = false;
        let spc = '@!#$%^&*';
        let data = input.value;
        for (let i = 0; i <= 9; i++) {
            if (data.includes(i)) {
                numberFlag = true;
                break;
            }
        }
        let specialFlag = false;
        for (let char of spc) {
            if (data.includes(char)) {
                specialFlag = true;
                break;
            }
        }
        let smallFlag = false;
        let capFlag = false;
        for (let index in data) {
            let char = data.charCodeAt(index);
            if (char >= 65 && char <= 90) {
                smallFlag = true;
            }
            if (char >= 97 && char <= 122) {
                capFlag = true;
            }
        }
        if (!(smallFlag && capFlag && numberFlag && specialFlag)) {
            passwordMessage.innerText = "pwd must container num , cap , smalls , special";
            event.preventDefault();
        }
        else {
            passwordMessage.innerText = '';
        }
    } else {
        passwordMessage.innerText = "Password Length >= 8"
        event.preventDefault();
    }
})