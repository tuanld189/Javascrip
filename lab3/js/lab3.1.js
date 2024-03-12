var a = Number(prompt("Nhập a: "));
var b = Number(prompt("Nhập b: "));
var o = prompt("Toán tử: ");
switch(o){
    case '+':
        var ketQua = a + b;
        alert("Tổng: "+ketQua);
        break;
    case '-':
        var ketQua = a - b;
        alert("Hiệu: "+ketQua);
        break;
    case '+':
        var ketQua = a * b;
        alert("Tích: "+ketQua);
        break;
    case '+':
        var ketQua = a / b;
        alert("Thương: "+ketQua);
        break;
    default:
        alert(o + "Không phải là toán tử");
        break;
}