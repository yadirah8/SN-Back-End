submitHandler = (e) => {
    e.preventDefault();
    return window.location.href="../Login/login.html";
}
document.getElementById("submit-btn").onclick = submitHandler;