const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
// console.log(hamburger)
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


// logic for Form data
const send = document.querySelector('input.send');

function SendMail() {
    var params = {
        from_name: document.getElementById("full_name").value,
        email_id: document.getElementById("email_id").value,
        contact_number: document.getElementById("contact_number").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_rx0jmqd", "template_te4m6y7", params).then(function (res) {
        const sendSuccess = send.value;
        send.value = "successful"
        const successColor = send.style.backgroundColor
        send.style.backgroundColor = "#4BB543"
        
        setTimeout(() => {
            send.value = sendSuccess
            send.style.backgroundColor = successColor

        }, 2000);
    }, function () {

        const errorMessage = send.value;
        send.value = "Error!"
        const errorColor = send.style.backgroundColor
        send.style.backgroundColor = "red";
        setTimeout(() => {
            send.value = errorMessage
            send.style.backgroundColor = errorColor
        }, 2000);
    });
}