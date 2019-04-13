$(function () {

    $(document).on("click", ".submit-btn", contactSubmission);

    function contactSubmission (event) {
        event.preventDefault();
        var contact = {
            name: $("#name").val().trim(),
            email: $("#email").val().trim(),
            subject: $("#subject").val().trim(),
            textArea: $("#textArea").val().trim()
        };
        console.log(contact);
        $.ajax({
            url: "/api/contact",
            type: "POST",
            data: contact,
        });
        window.location.href = "/index";
    }
});