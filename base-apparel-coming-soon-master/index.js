const button = document.querySelector("button");
const icon_error = document.querySelector(".icon-error");
const error_message = document.querySelector(".error-message");
const input = document.querySelector(".input");

input.addEventListener("input", (e) => {
    const inputValue = input.value.trim();
    if (inputValue === "") {
        error_message.textContent = "Input cant be blank";
        input.style.border = "1px solid red";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(inputValue)) {
        error_message.textContent = "Enter a valid gmail";
        input.style.border = "1px solid red";
        icon_error.classList.remove(hidden);
    } else {
        error_message.textContent = "";
        input.style.border = "";
    }
});
button.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue === "" || !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(inputValue)) {
        error_message.textContent = "Input cant be blank";
        input.style.border = "1px solid red";
        error_message.textContent = "Enter a valid gmail";
        input.style.border = "1px solid red";
    } else {
        error_message.textContent = `Congratulations ${inputValue}`;
    }
});