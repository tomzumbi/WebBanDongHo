let soLuong = localStorage.getItem("soluong");

document.getElementById("soluong").value = soLuong
const cost = 800000;
let total = soLuong * cost;
let total2 = total + 100000;
document.getElementById("cost").innerHTML = total +  "₫\t";
document.getElementById("total").innerHTML = total2 + "₫\t";
function gia(){
    let soLuong= document.getElementById("soluong").value;
    const cost = 800000;
    let total = soLuong * cost;
    let total2 = total + 100000;
    document.getElementById("cost").innerHTML = total +  "₫\t";
    document.getElementById("total").innerHTML = total2 + "₫\t";
}

let Account = JSON.parse(localStorage.getItem("account"));
let fullName = Account.fullName;
document.getElementById("fullname").value = fullName



function buy(){
    window.location.href = "index.html"
    alert("đặt hàng thành công! ")
}


