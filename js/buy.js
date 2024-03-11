function them() {
    let Account = JSON.parse(localStorage.getItem("account"));
    if (Account != null) {
        window.location.href = "gioHang.html"

    } else {
        alert("Vui lòng đăng nhập để tiếp tục")
    }
}

function mua() {
    let Account = JSON.parse(localStorage.getItem("account"));
    if (Account != null) {
    window.location.href = "thanhToan.html"

    } else {
        alert("Vui lòng đăng nhập để tiếp tục")
    }
}

