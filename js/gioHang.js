


function gia(){
    let soLuong = document.getElementById("soluong").value;
    localStorage.setItem("soluong", soLuong);
    const cost = 800000;
    let total = soLuong * cost;
    document.getElementById("totalCost").innerHTML = total + "₫\t";
    document.getElementById("totalCostEnd").innerHTML = total + "₫\t";
}
function mua(){
    window.location.href = "thanhToan.html"
}


