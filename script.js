document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", (event) => {
        // منع إعادة تحميل الصفحة
        event.preventDefault();

        // إعادة تعيين رسائل الخطأ
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;

        // التحقق من الاسم
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        }

        // التحقق من البريد الإلكتروني
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // التحقق من الرسالة
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message is required.";
            isValid = false;
        }

        // إذا كان كل شيء صحيحاً
        if (isValid) {
            successMessage.textContent = "Form submitted successfully!";
            form.reset(); // إعادة تعيين النموذج
            nameInput.focus(); // إعادة التركيز على الحقل الأول
        }

        // إضافة حدث للتحقق المباشر أثناء الكتابة
        emailInput.addEventListener("input", () => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value !== "" && !emailPattern.test(emailInput.value)) {
                emailError.textContent = "Invalid email format (Live check).";
            } else {
                emailError.textContent = ""; // مسح الخطأ إذا أصبح صحيحاً
            }
        });
    });
});