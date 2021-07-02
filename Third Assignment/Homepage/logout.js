// Event handler
submitHandler = (e) => {
    e.preventDefault();
    return window.location.href="../Login/login.html";
}
// Assign to submit btn
document.getElementById("submit-btn").onclick = submitHandler;