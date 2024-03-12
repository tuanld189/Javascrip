var a;
function mo() {
    
    a=window.open("https://caodang.fpt.edu.vn/");
}

function dong() {
    if(a.closed==false){
        a.close();
    }
}
function kiemTra() {
    if(a.closed == false){
        alert("Chưa đóng trang web");
    } else {
        alert("Đã đóng trang web")
    }
}

