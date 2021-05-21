submitHandler = (e) => {
    e.preventDefault();
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    
    if (fname===''|| lname===''||email===''||phone===''||password===''){
        alert('Please enter all fields');
        return false;
    }
    else{
        return window.location.href="../Success/success.html";
    }
}
document.getElementById("submit-btn").onclick = submitHandler