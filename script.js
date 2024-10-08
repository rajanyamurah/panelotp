// script.js

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Contoh validasi username dan password
    if (username === "zhkLmBM778@user.com" && password === "root") {
    alert("Selamat Datang 👋");
    window.location.href = "hal1.html"; // Ganti "halaman-baru.html" dengan URL halaman yang ingin diarahkan
} else {
    alert("Username atau Password salah!");
}
});