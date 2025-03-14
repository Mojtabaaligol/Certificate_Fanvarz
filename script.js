function checkCertificate() {
    let code = document.getElementById("certificateCode").value.trim();
    let message = document.getElementById("message");

    if (code === "") {
        message.innerHTML = ". لطفاً کد ملی خود را وارد کنید";
        message.style.color = "red";
        return;
    }

    let filePath = `certificates/${code}.pdf`;

    // بررسی وجود فایل با درخواست HEAD
    fetch(filePath, { method: "HEAD" })
        .then(response => {
            if (response.ok) {
                message.innerHTML = `<a href="${filePath}" target="_blank">دانلود گواهی</a>`;
                message.style.color = "green";
            } else {
                throw new Error("File not found");
            }
        })
        .catch(error => {
            message.innerHTML = "گواهی یافت نشد! لطفاً کد ملی خود را صحیح وارد کنید.";
            message.style.color = "red";
        });

    window.onload = function() {
        document.getElementById("certificateCode").focus();
    };
}

function checkCertificate() {
    let code = document.getElementById("certificateCode").value.trim();
    let message = document.getElementById("message");

    if (code === "") {
        message.innerHTML = "لطفاً کد ملی خود را وارد کنید";
        message.style.color = "red";
        return;
    }

    let filePath = `certificates/${code}.pdf`;

    // بررسی وجود فایل با درخواست HEAD
    fetch(filePath, { method: "HEAD" })
        .then(response => {
            if (response.ok) {
                message.innerHTML = `<a href="${filePath}" target="_blank">دانلود گواهی</a>`;
                message.style.color = "green";
            } else {
                throw new Error("File not found");
            }
        })
        .catch(error => {
            message.innerHTML = "گواهی یافت نشد! لطفاً کد ملی خود را صحیح وارد کنید";
            message.style.color = "red";
        });
}
window.onload = function() {
    document.getElementById("certificateCode").focus();
};
    
console.log("Hello World");