const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");
const logdiv = document.getElementById("log");
const statediv = document.getElementById("state");

// Adding functions to the buttons with addEventListener
startbtn.addEventListener("click", () => {
    document.addEventListener("keydown", handledown);
    document.addEventListener("keyup", handleup);
    startbtn.disabled = true; // Disable the start button
    stopbtn.disabled = false; // Enable the stop button
});

stopbtn.addEventListener("click", () => {
    document.removeEventListener("keydown", handledown); // Remove keydown listener
    document.removeEventListener("keyup", handleup); // Remove keyup listener
    logdiv.textContent = ""; // Clear log
    statediv.textContent = ""; // Clear state
    stopbtn.disabled = true; // Disable the stop button
    startbtn.disabled = false; // Enable the start button
});

function handledown(e) {
    logdiv.textContent = `The key "${e.key}" is pressed down`;
    statediv.textContent = "The key is down";
}

function handleup(e) {
    logdiv.textContent = `The key "${e.key}" is released`;
    statediv.textContent = "The key is up";
}
