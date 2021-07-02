// Event Handler
submitHandler = (e) => {
    e.preventDefault();
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById("username").value;
// Form Validation  
    if (fname===''|| lname===''||email===''||phone===''||password===''||username===''){
        alert('Please enter all fields');
        return false;
    }
    else{
        return window.location.href="../Login/login.html";
    }
}
// Assign to submit btn
document.getElementById("submit-btn").onclick = submitHandler