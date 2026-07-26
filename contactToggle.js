document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleContactForm");
    const formBody = document.getElementById("contactFormBody");

    // 初期状態：非表示（activeクラスを持たせない）
    formBody.classList.remove("active");

    toggleBtn.addEventListener("click", () => {
        formBody.classList.toggle("active");

        if (formBody.classList.contains("active")) {
            toggleBtn.textContent = "問い合わせフォームを閉じる";
        } else {
            toggleBtn.textContent = "問い合わせフォームを開く";
        }
    });
});
