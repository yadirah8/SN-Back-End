submitHandler = (e) => {
    e.preventDefault();
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById("username").value;
    
    if (fname===''|| lname===''||email===''||phone===''||password===''||username===''){
        alert('Please enter all fields');
        return false;
    }
    else{
        return window.location.href="../Login/login.html";
    }
}
document.getElementById("submit-btn").onclick = submitHandler