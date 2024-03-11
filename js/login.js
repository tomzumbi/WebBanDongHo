let Account = JSON.parse(localStorage.getItem("account"));

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("psw").value;
    if (username == Account.username && password == Account.password) {
        window.location.href = "index.html"
        alert("Đăng nhập thành công!");

    } else {
        alert("sai tên đăng nhập hoặc mật khẩu")
    }


}