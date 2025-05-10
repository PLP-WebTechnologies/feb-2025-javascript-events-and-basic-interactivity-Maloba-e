console.log("Hello World!");
const button = document.querySelector("button");
button.addEventListener("click", function () {
    const divs = document.querySelectorAll("div");
    divs.forEach((div) => {
        div.style.transition="right-margin 0.5s";
        div.style.color = "green";
    });
    console.log("Button clicked!");
});

const passwordInput = document.querySelector("#password");
passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const message = document.querySelector("#message");
    if (password.length < 8) {
        message.textContent = "Password is too short!";
        message.style.color = "red";
    } else {
        message.textContent = "Password is strong!";
        message.style.color = "green";
    }
});