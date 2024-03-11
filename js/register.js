let accounts = [];

function register() {

    let fullName = document.getElementById("fullName").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("psw").value;
    let repass = document.getElementById("psw-repeat").value;
    if (password !== repass) {
        alert("vui lòng nhập lại mật khẩu đúng");
        window.location.href = "register.html"
    } else {
        let Account = {
            fullName: fullName,
            username: username,
            password: password,
        }
        localStorage.setItem("account", JSON.stringify(Account));
        window.location.href = "login.html"
        alert("Đăng kí thành công! Vui lòng đăng nhập để tiếp tục")

    }
}

