let Account = JSON.parse(localStorage.getItem("account"));
if (Account != null) {
    let name = Account.fullName;
    document.getElementById("name").innerHTML = "Xin chào: " + name +
                                                        "&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp <a href='#' onclick='logout()'>Đăng xuất</a> &nbsp&nbsp&nbsp"
}

