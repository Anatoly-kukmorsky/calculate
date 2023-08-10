"use strict";

(function () {
    const output = document.querySelector(".calculator__output");
    const calc = document.querySelector(".calculator__keys");

    calc.addEventListener("click", (e) => {
        if (!e.target.classList.contains("calculator__button")) return;

        const value = e.target.innerText;

        switch (value) {
            case "C":
                output.innerText = "";
                break;

            case "=":
                if (output.innerText.search(/[^0-9*/+-.]/im) !== -1 || output.innerText === "")
                    return;

                output.innerText = output.innerText.includes("/0")
                    ? "Error"
                    : eval(output.innerText);
                break;

            default:
                if (output.innerText === "Error") {
                    output.innerText = "";
                }
                output.innerText += value;

                if (
                    output.innerText[0].includes("-") ||
                    output.innerText[0].includes("+") ||
                    output.innerText[0].includes("*") ||
                    output.innerText[0].includes("/")
                ) {
                    output.innerText = "";
                }
        }
    });
})();
