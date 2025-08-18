(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init("Ghzb7FbKl2QdBXLi8");
})();

window.onload = function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm("service_l1i6hoq", "template_1r9wyym", this).then(
            function () {
                console.log("SUCCESS!");
                document.getElementById("success").innerHTML = "Your message has been sent successfully.";
                document.getElementById("contactForm").reset();
            },
            function (error) {
                console.log("FAILED...", error);
                document.getElementById("success").innerHTML = "Sorry, there was an error sending your message.";
            }
        );
    });
};
