var form = document.querySelector('form');
var container_2 = document.querySelector(".container-2");
var e_input = document.getElementById("email");
var container = document.querySelector('.container');
var d_button = document.querySelector('button');
var errormessage = document.createElement('div');
//validating the email
function ValidateEmail() {
    var u_email = e_input.value.trim();
    if (u_email === '') {
        errormessage.textContent = 'Kindly key in your email';
    }
    else if ((u_email)) {
        errormessage.textContent = 'The email must be valid';
    }
    else {
        errormessage.textContent = '';
        var u_emailSpan = document.querySelector('#email');
        u_emailSpan.textContent = u_email;
        container === null || container === void 0 ? void 0 : container.classList.add('hide');
        container_2 === null || container_2 === void 0 ? void 0 : container_2.classList.remove('hide');
    }
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    ValidateEmail();
});
//dismiss button
d_button.addEventListener('click', function () {
    container === null || container === void 0 ? void 0 : container.classList.add('hide');
    container_2 === null || container_2 === void 0 ? void 0 : container_2.classList.remove('hide');
});
form === null || form === void 0 ? void 0 : form.appendChild(errormessage);
