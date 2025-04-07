const username = document.getElementById('name');
const password = document.getElementById('password');
const email = document.getElementById('email');
const cpassword = document.getElementById('cpassword');
const form = document.querySelector('.register-form');

form.addEventListener('submit', (e) => {
    if (!validateInput()) {
        e.preventDefault();
    }
});

function validateInput() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true;

    if (usernameVal === '') {
        setError(username, 'Please enter a username');
        success = false;
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, "Please enter an email");
        success = false;
    } else if (!valEmail(emailVal)) {
        setError(email, "Enter a valid email");
        success = false;
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        setError(password, 'Please enter a password');
        success = false;
    } else if (passwordVal.length < 8) {
        setError(password, 'Password should be at least 8 characters');
        success = false;
    } else {
        setSuccess(password);
    }

    if (cpasswordVal === '') {
        setError(cpassword, 'Please confirm your password');
        success = false;
    } else if (passwordVal !== cpasswordVal) {
        setError(cpassword, 'Passwords do not match');
        success = false;
    } else {
        setSuccess(cpassword);
    }

    return success;
}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

function valEmail(emailVal) {
    return emailVal
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
