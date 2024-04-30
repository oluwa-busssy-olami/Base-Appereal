const button = document.querySelector("button");
const icon_error = document.querySelector(".icon-error");
const error_message = document.querySelector(".error-message");
const input = document.querySelector(".input");

input.addEventListener("input", (e) => {
  const inputValue = input.value.trim();
  if (inputValue === "") {
    error_message.textContent = "Input cant be blank";
    icon_error.style.display = "block";
    input.style.border = "1px solid hsl(0, 93%, 68%)";
  } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(inputValue)) {
    error_message.textContent = "Enter a valid gmail";
    input.style.border = "1px solid hsl(0, 93%, 68%)";
    icon_error.style.display = "block";
  } else {
    error_message.textContent = "";
    input.style.border = "";
    icon_error.style.display = "none";
  }
});
button.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue === "" || !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(inputValue)) {
    error_message.textContent = "Input cant be blank";
    input.style.border = "1px solid hsl(0, 93%, 68%)";
    icon_error.style.display = "block";
    error_message.textContent = "Enter a valid gmail";
    input.style.border = "1px solid hsl(0, 93%, 68%)";
  } else {
    error_message.textContent = `Thank you, ${inputValue}! We'll keep you updated.`;
  }
  input.value = "";
});
