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
        isValid = false;
    }
})

monthInput.addEventListener("blur", () => {
    if (!isMonthValid()) {
        isValid = false;
    }
})

yearInput.addEventListener("blur", () => {
    if (!isYearValid()) {
        isValid = false;
    }
})

dayInput.addEventListener("input", (e) => {
    if (dayInput.value > 31) {
        e.preventDefault();
        dayInput.value = 31;
    }
    if (dayInput.value < 1) {
        e.preventDefault();
        dayInput.value = 1;
    }
})

monthInput.addEventListener("input", (e) => {
    if (monthInput.value > 12) {
        e.preventDefault();
        monthInput.value = 12;
    }
    if (monthInput.value < 1) {
        e.preventDefault();
        monthInput.value = 1;
    }
})

yearInput.addEventListener("input", (e) => {
    if (yearInput.value < 1900) {
        e.preventDefault();
        yearInput.value = 1900;
    }
    if (yearInput.value > currentDate.getFullYear()) {
        e.preventDefault();
        yearInput.value = currentDate.getFullYear();
    }

})