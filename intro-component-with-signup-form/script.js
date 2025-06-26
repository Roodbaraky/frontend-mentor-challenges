const form = document.getElementById("form");
const inputGroups = Array.from(document.querySelectorAll(".input-group"));
const emailGroup = document.getElementById("email-group");

function validateEmailFormat(value) {
    return /^[^<>()[\]\\.,;:\s@\"]+(?:\.[^<>()[\]\\.,;:\s@\"]+)*@(?:\[?[0-9]{1,3}(?:\.[0-9]{1,3}){3}\]?|[a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/.test(value);
}

function validateGroup(group) {
    const input = group.querySelector("input");
    const label = group.querySelector("label");
    const errorIcon = group.querySelector("img");
    const errorText = group.querySelector("span");
    const value = input.value.trim();
    let valid = true;

    if (value === "") {
        errorIcon.style.opacity = "1";
        errorText.innerText = `${label.innerText} is required`;
        valid = false;
    } else if (group === emailGroup && !validateEmailFormat(value.toLowerCase())) {
        errorIcon.style.opacity = "1";
        errorText.innerText = `${label.innerText} is invalid`;
        valid = false;
    } else {
        errorIcon.style.opacity = "0";
        errorText.innerText = "";
    }

    return valid;
}

inputGroups.forEach((group) => {
    const input = group.querySelector("input");
    input.addEventListener("blur", () => {
        validateGroup(group);
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isFormValid = true;

    inputGroups.forEach((group) => {
        if (!validateGroup(group)) {
            isFormValid = false;
        }
    });

    if (isFormValid) {
        form.submit();
    }
});
