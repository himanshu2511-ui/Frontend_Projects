const inputE1 = document.querySelector(".calculator input");
const historyE1 = document.querySelector(".calculator .history");

inputE1.value = "0";

function handleButtonClick(e) {
    const key = e.target.value;

    if (key === "c") {
        inputE1.value = "0";
        historyE1.innerText = "";
    } else if (key === "del") {
        if (inputE1.value === "Math error" || inputE1.value === "infinity") {
            inputE1.value = "0";
        } else {
            inputE1.value = inputE1.value.substr(0, inputE1.value.length - 1) || "0";
        }
    } else if (key === "=") {
        try {
            const val = inputE1.value;
            inputE1.value = eval(val);
            historyE1.innerText = val;
        } catch (error) {
            historyE1.innerText = "";
            inputE1.value = "Math error";
        }
    } else {
        if (inputE1.value === "0" ||
            inputE1.value === "NaN" ||
            inputE1.value === "undefined" ||
            inputE1.value === "Math error" ||
            inputE1.value === "infinity") {
            inputE1.value = key;
        } else {
            inputE1.value += key;
        }
    }
}

[...document.querySelectorAll(".calculator button")].forEach(el => {
    el.addEventListener("click", handleButtonClick);
});
//hkashyap043.btech2023@it.nitrr.ac.in