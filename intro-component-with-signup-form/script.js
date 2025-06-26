const passInput = document.getElementById("pass")
const emailInput = document.getElementById("email")
const firstNameInput = document.getElementById("fname")
const lastNameInput = document.getElementById("lname")

const passError = document.getElementById("pass-err")
const emailError = document.getElementById("email-err")
const firstNameError = document.getElementById("fname-err")
const lastNameError = document.getElementById("lname-err")
const form = document.getElementById("form");
let isFormValid = false;

const inputErrorPairs = [
    {input: passInput, error: passError},
    {input: emailInput, error: emailError},
    {input: firstNameInput, error: firstNameError},
    {input: lastNameInput, error: lastNameError},
];
const checkForEmptyInputs = () => {
    inputErrorPairs.forEach(({input, error}) => {
        if (input.value.trim() === "") isFormValid = false;
        error.style.opacity = input.value.trim() === "" ? "1" : "0";
    })
}

inputErrorPairs.map(({input, error}) => {
    input.addEventListener("blur", (e) => {
            if (e.target.value.trim() === "") {
                error.style.opacity = "1";
            } else {
                error.style.opacity = "0";
            }
        }
    )
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    isFormValid = true;
    inputErrorPairs.forEach(({input, error}) => {
       checkForEmptyInputs();
    })
    if (isFormValid) e.target.submit();
})
;