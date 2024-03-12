function dongho() {
    var now = new Date();
    var gio = now.getHours();
    var phut = now.getMinutes();
    var giay = now.getSeconds();
    setTimeout("dongho()", 1000);
    var thongtin = gio + ":" + phut + ":" + giay;
    document.getElementById('time').innerHTML=thongtin;
}
dongho();