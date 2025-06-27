const daySpan = document.getElementById("days");
const monthSpan = document.getElementById("months");
const yearSpan = document.getElementById("years");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const btn = document.getElementById("icon-btn");
const currentDate = new Date();

let isValid = false;

btn.addEventListener("click", () => {
    const day = parseInt(dayInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);
    isValid = (isDayValid(day) &&
        isMonthValid(month) &&
        isYearValid(year));
    if (!isValid) {
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        // Days in previous month
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    if (isValid) {
        console.log("Valid, changing display...");
        yearSpan.innerText = years;
        monthSpan.innerText = months;
        daySpan.innerText = days;
    }
});

function isDayValid(day) {
    return day <= 31 && day >= 1;
}

function isMonthValid(month) {
    return month <= 12 && month >= 1;
}

function isYearValid(year) {
    return year >= 1900 && year <= currentDate.getFullYear();
}

dayInput.addEventListener("blur", () => {
    if (!isDayValid()) {
        console.log("error");
        isValid = false;
        //placeholder

    }
})

monthInput.addEventListener("blur", () => {
    if (!isMonthValid()) {
        console.log("error");
        isValid = false;
    }
})

yearInput.addEventListener("blur", () => {
    if (!isYearValid()) {
        console.log("error");
        isValid = false;
    }
})