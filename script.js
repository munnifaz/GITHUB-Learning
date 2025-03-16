document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("inputBox");
    const output = document.getElementById("output");

    inputBox.addEventListener("input", function () {
        output.textContent = inputBox.value.split("").reverse().join("");
    });
});