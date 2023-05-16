const buttonChangeTheme = document.getElementById("ButtonChangeTheme");

const buttonImage = document.querySelector(".ButtonImage")

const body = document.querySelector("body");

buttonChangeTheme.addEventListener("click", () => {
    const DarkmodeActive = body.classList.contains("DarkMode")

    body.classList.toggle("DarkMode")

    if(DarkmodeActive) {
        buttonImage.setAttribute("src", "./src/imgs/sun.png");
        buttonImage.setAttribute("alt", "Sun (Light Mode)");
    } else {
        buttonImage.setAttribute("src", "./src/imgs/moon.png");
        buttonImage.setAttribute("alt", "Moon (Dark Mode)");
    }
});
