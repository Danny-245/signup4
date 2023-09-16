const fname = document.querySelector('#fname');
const lname = document.querySelector("#lname");
const passWord = document.querySelector('#password')
const emailBox = document.querySelector('#email');
const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit-btn');
const msgBox = document.querySelector("#msg-box");
const confirmPswd = document.querySelector("#cpassword");

form.addEventListener("submit", (e) => {
    let message = [];
    if(passWord.value.length < 8) {
        message.push("message should be more than 8 character!");
    }
    if(passWord === "") {
        message.push('Please enter your password!');
    }
    if(confirmPswd.value.length < 8) {
        message.push("message should be more than 8 character!");
    }
    if(confirmPswd.value === "") {
        message.push('Please confirm your password!');
    }
    if (emailBox.value === '') {
        message.push("Please enter a valid email");
        alert('Email is a required field');
    }
    if (confirmPswd.value != passWord.value) {
        message.push("Password should match the confirm password");
    }
   
    if (message.length > 0) {
        e.preventDefault();
        msgBox.innerText = message.join(", ");
    }
    
   
});

submitBtn.addEventListener('click', function() {
    console.log("clicked")
});