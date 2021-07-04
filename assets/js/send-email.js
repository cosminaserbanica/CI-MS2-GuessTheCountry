function sendMail(contactForm) {
  emailjs.send("service_4jddcba","template_h0010cm", {
    "from_name": contactForm.firstname.value,
    "from_email": contactForm.emailaddress.value,
    "message": contactForm.message.value
  })
  .then(
    function(response) {
      console.log("SUCCESS", response);
    },
    function(error) {
      console.log("FAILED", error);
    });
  var frm = document.getElementsByTagName('form')[0];
  frm.reset();
  return false;
};