document.getElementById('contactForm').addEventListener('submit', async e => {
    e.preventDefault();
    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
    };
   const res = await fetch('https://akib-e17e.onrender.com/contact', {  // <-- use your live URL
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(formData)
});

    const data = await res.json();
    alert(data.message);
});
