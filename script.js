/* ── Decorated Pop-Up on Page Load ── */
window.onload = function() {
    const message =
        "🎉 Welcome to Hellena's Bakery Hub! 🎉\n\n" +
        "🍰 ORDER NOW AND MAKE EVERY CELEBRATION SWEETER! 🍰\n\n" +
        "✨ Fresh Cakes | Cupcakes | Cookies ✨";

    alert(message);
};

/* ── Registration Form Validation ── */
function validateForm() {

    const name   = document.getElementById("name").value.trim();
    const email  = document.getElementById("email").value.trim();
    const phone  = document.getElementById("phone").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const emailError = document.getElementById("email-error");

    /* Clear previous email error */
    emailError.textContent = "";

    /* Check all fields are filled */
    if (name === "" || email === "" || phone === "" || !gender) {
        alert("⚠️ Please fill in all fields before registering.");
        return;
    }

    /* Email format validation */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "❌ Please enter a valid email address (e.g. example@email.com)";
        document.getElementById("email").focus();
        return;
    }

    /* Success message */
    alert(
        "✅ Registration Successful!\n\n" +
        "👤 Name   : " + name + "\n" +
        "📧 Email  : " + email + "\n" +
        "📞 Phone  : " + phone + "\n" +
        "🚻 Gender : " + gender.value + "\n\n" +
        "🎂 Thank you for registering with Hellena's Bakery Hub!"
    );

    /* Clear form after success */
    document.getElementById("name").value  = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.querySelectorAll('input[name="gender"]').forEach(function(r) {
        r.checked = false;
    });
}
