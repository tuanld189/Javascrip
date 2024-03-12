var sv = new Object();

sv.hoTen = prompt("Nhập họ tên: ");
sv.diem = prompt("Nhập điểm vào đây: ");

sv.hienThi=function () {
    this.hocLuc = function () {
                if (this.diem >= 5) {
                    return 'Qua môn';
                } else {
                   return  'Đóng tiền học. LewLew'
                }
            }
            this.hienThi = function () {
    document.write("Họ và tên: " + this.hoTen + "<br>");
    document.write("Điểm: " + this.diem + "<br>");
    document.write("Xếp loại: " + this.hocLuc() + "<br>");
}
}


sv.hienThi();