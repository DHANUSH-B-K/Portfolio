const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
const thankYouCard = document.getElementById('thank-you-card');
const overlay = document.getElementById('overlay');
//const submitButton = document.getElementById('fashion-button');
const closeButton = document.getElementById('close-button');



menu.onclick = ()=> {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}


// Check if all form fields are filled
       /* const checkFormValidity = () => {
            const inputs = form.querySelectorAll('input');
            const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
            submitButton.disabled = !allFilled;
            submitButton.classList.toggle('active', allFilled);
        };

        // Add event listeners to each input field
        form.addEventListener('input', checkFormValidity);*/



const scriptURL = 'https://script.google.com/macros/s/AKfycbx8rE00gFJfQVeIZ4kIdEuQfojJUpvGPPu3GecG1D5MdMtNEZkMSlljqoyUhgdiBGE4/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
});

/*form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Show the thank-you card
            thankYouCard.style.display = 'block';
            form.reset(); // Reset the form fields
            submitButton.disabled = true; // Disable the button again
        })
        .catch(error => console.error('Error!', error.message));
});*/

/*form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Show the thank-you card and overlay
            overlay.style.display = 'block';
            thankYouCard.style.display = 'block';
            document.body.style.filter = 'blur(5px)'; // Blur the background

            // Hide the card and overlay after 2 seconds
          /*  setTimeout(() => {
                overlay.style.display = 'none';
                thankYouCard.style.display = 'none';
                document.body.style.filter = 'none'; // Remove blur
            }, 10000); // Change duration as needed*/

           /* form.reset(); // Reset the form fields
            submitButton.disabled = true; // Disable the button again
        })
        .catch(error => console.error('Error!', error.message));
}); */

/*closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    thankYouCard.style.display = 'none';
    document.body.style.filter = 'none'; // Remove blur
});*/