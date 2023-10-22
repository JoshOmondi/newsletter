const form = document.querySelector('form');
const container_2 = document.querySelector(".container-2");
const e_input = document.getElementById("email") as HTMLInputElement;
const container = document.querySelector('.container');
const d_button = document.querySelector('button') as HTMLInputElement;
const errormessage = document.createElement('div');

//validating the email
function ValidateEmail() {
    const u_email = e_input.value.trim();

    if (u_email ==='') {
        errormessage.textContent = 'Kindly key in your email';

    }else if ((u_email)) {
        errormessage.textContent = 'The email must be valid';

    }else {
        errormessage.textContent ='';
        const u_emailSpan = document.querySelector('#email') as HTMLSpanElement;
        u_emailSpan.textContent = u_email;
        container?.classList.add('hide');
        container_2?.classList.remove('hide');
    }
}
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    ValidateEmail();
})

//dismiss button
d_button.addEventListener('click', () => {
    container?.classList.add('hide');
    container_2?.classList.remove('hide');
});

form?.appendChild(errormessage);