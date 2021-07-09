function sendMail(contactForm) { //CODE SOURCED AND EDITED FROM CODE INSTITUTE TUTORIAL
  emailjs.send("service_4jddcba","template_h0010cm", {
    "from_name": contactForm.firstname.value,
    "from_email": contactForm.emailaddress.value,
    "message": contactForm.message.value
  })
  .then(
    function(response) {
      alert("Your message has been sent")
      console.log("SUCCESS", response);
    },
    function(error) {
      alert("Your message failed to send, please try again")
      console.log("FAILED", error);
    });
  var frm = document.getElementsByTagName('form')[0];
  frm.reset();
  return false;
};