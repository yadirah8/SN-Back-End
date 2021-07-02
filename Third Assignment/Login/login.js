// Event handler
submitHandler = (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
// Form Validation
    if (username===''|| password===''){
        alert('Please enter all fields');
        return false;
    }
    else{
        return window.location.href="../Homepage/homepage.html";
    }
}
// Assign to submit btn
document.getElementById("submit-btn").onclick = submitHandler;