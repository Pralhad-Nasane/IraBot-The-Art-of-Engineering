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


// validation code..
// return true form is valid
// return false form is invalid
function validate() {
    let flag = false

    // validation... flag= true, flag = flase;

    // name field..
    let fullName = $('.name-field').val()
    if (fullName == '' || fullName == undefined) {
        $('.name-field-msg').html('Name is required!!').addClass("text-danger")
        flag = false;
    } else {
        $('.name-field-msg').html("ok!!").removeClass("text-danger").addClass("text-success")
        flag = true;
    }

    // email validation...
    let emails = $('.email-field').val();
    let exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emails == '' || emails == undefined) {
        $('.email-field-msg').html('Email ID is required!!').addClass("text-danger")
        flag = false;
    } else if (exp.test(emails) == false) {
        $('.email-field-msg').html('Invalid Email ID!!').addClass("text-danger")
        flag = false;
    } else {
        $('.email-field-msg').html('Ok!').removeClass("text-danger").addClass("text-success")
        flag = true;
    }

    // phone validation...
    let phoneNumber = $('.contact-field').val();
    if (phoneNumber == '' || phoneNumber == undefined) {
        $('.contact-field-msg').html('Contact Number is required!!').addClass("text-danger")
        flag = false;
    } else if (phoneNumber.length == 10) {
        $('.contact-field-msg').html('Contact Number is Valid!!').removeClass("text-danger").addClass("text-success")
        flag = true;
    } else {
        $('.contact-field-msg').html('Contact Number is Invalid!!').addClass("text-danger")
        flag = false;
    }
    return flag;
}