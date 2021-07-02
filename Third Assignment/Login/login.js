submitHandler = (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username===''|| password===''){
        alert('Please enter all fields');
        return false;
    }
    else{
        return window.location.href="../Homepage/homepage.html";
    }
}
document.getElementById("submit-btn").onclick = submitHandler;