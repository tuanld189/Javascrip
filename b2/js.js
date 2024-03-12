// Tham khảo webside w3shool
// //1.sự khác nhau giữa var và let
// //khai báo với var
// var bienVAr="đây là biến var ngoài khối";
// if(true){
//     var bienVAr="đây là biến var trong khối";
//     document.write(bienVar+"<br>");
// }
// document.write(bienVar+"<br>");
// document.write("<br>");
// //khai báo với let
// let bienLet="đây là biến var ngoài khối";
// if(true){
//     let bienLet="đây là biến var trong khối";
//     document.write(bienLet+"<br>");
// }
// document.write(bienLet+"<br>");
// document.write("<br>");

// //2.khai báo hằng số
// const soPi=3.14;
// // soPI= 5;
// document.write(soPi);

// 3.Khai báo chuỗi
// var chuoi1="Đây là \"chuỗi\" 1";
// var chuoi2="Đây là \nchuỗi 2";
// var chuoi3="Đây la chuỗi 3";
// document.write(chuoi1+"</br>")
// document.write(chuoi2+"</br>")
// document.write(chuoi3+"</br>")
// console.log(chuoi2);
// alert(chuoi2);

// // 4.Thuộc tính và phuong thức chuỗi
// var chuoi4="Đây là chuỗi 4";
// // Thuộc tính length
// document.write(chuoi4.length+"<br>");
// // Phương thức cắt chuỗi
// document.write(chuoi4.substring(0,14)+"<br>");
// // Phương thức nối chuỗi
// var chuoi5="Xin chào!";
// document.write(chuoi4.concat(" - ",chuoi4)+"<br>");
// // Phương thức viết hoa tất cả
// document.write(chuoi4.toLocaleUpperCase()+"<br>");

// // 5. Khai báo xác định kiểu dữ liệu
// var so1=10;
// var chuoi1="10";
// var chuoi2 ="Số 10";
// // Sử dụng isNaN
// document.write("Kết quả 1: "+isNaN(so1)+"<br>");
// document.write("Kết quả 2: "+isNaN(chuoi1)+"<br>");
// document.write("Kết quả 1: "+isNaN(chuoi2)+"<br>");
// document.write("<br>");
// // Sử dungk isInreger
// document.write("Kết quả isInteger 1: "+Number.isInteger(so1)+"<br>");
// document.write("Kết quả isInteger 2: "+Number.isInteger(chuoi1)+"<br>");
// document.write("Kết quả isInteger 3: "+Number.isInteger(chuoi2)+"<br>");


// // 6. Chuyển kiểu số thành chuổi
// var so2=5.6789;
// document.write(so2.toFixed()+"<br>");
// document.write(so2.toFixed(2)+"<br>");
// document.write(so2.toFixed(0)+"<br>");
// document.write("Kết quả isNaN: "+isNaN(so2.toFixed())+"<br>");
// document.write("<br>");
// // Làm tròn số tính cả phần trước thập phân
// document.write(so2.toPrecision()+"<br>");
// document.write(so2.toPrecision(2)+"<br>");
// document.write(so2.toPrecision(6)+"<br>");


// // 7. Kiểu dữ liệu Boolean
// var diemtb=prompt("Mời bạn nhập điểm trung bình");
// if(diemtb>=5){
//     alert("Chúc mừng bạn đã qua môn!");
// }else{
//     alert("Mời bạn xuống phòng đào tạo uống nước!");
// }


// // 8. Kiểu dữ liệu Undefined và Null
// var bienundef = undefined;
// var biennull = null;
// var bienTG;
// document.write("So sánh tuyệt đối bienTG - bienundef: ",bienTG === bienundef);
// document.write("<br>");
// document.write("So sánh tuơng đối bienTG - bienundef: ",bienTG === bienundef);
// document.write("<br>");
// document.write("So sánh tuyệt đối biennull - bienundef: ",bienTG === bienundef);
// document.write("<br>");
// document.write("So sánh tương đối biennull - bienundef: ",bienTG === bienundef);
// document.write("<br>");
// document.write("<br>");
// // So sánh tuyệt đối và tương đối
// var so3 =10;
// var so4 ="10";
// document.write("So sánh tuyệt đối số 10 - chuỗi 10:", so3 === so4);
// document.write("<br>");
// document.write("So sánh tương đối số 10 - chuỗi 10:", so3 === so4);
// document.write("<br>");



// ************************************
// Phần 2
// 9 Mảng (Array) trong Javascript
// Cách 1
arr1 = new Array("Phần tử 1", "Phần tử 2", "Phần tử 3", "Phần tử 4");
// Cách 2
// arr2=("Phần tử 1", "Phần tử 2", "Phần tử 3", "Phần tử 4")
document.write(arr1);
// // Truy xuất phần tử trong mảng
// console.log(arr1[0]);   
// console.log(arr1[1]);
// // Thuộc tính độ dài của mảng
// console.log(arr1.length);
// // Ghi đè giá trị của mảng
// arr1[0]="gia tri moi";  
// arr2[1]="gia tri cu";
// // Thêm phần tử đầu tiên
// arr1.unshift("Gía trị đầu tiên");

// Thêm vào cuối cùng
arr1.push("Gia trị cuối cùng","Gía trị cuối cùng tiếp","Tiếp nữa");

// // Xóa phần tử đầu tiên
// arr1.shift();

// xóa phần tử cuối cùng
arr1.pop();

// // Xóa x phần tử ở vị trí n
// arr1.splice(1,3,"Thêm mới");

// // Nối mảng
// var arr3=arr1.concat(arr2);
// // Xcá định vị trí phần tử
// console.log(arr1.indexOf("Phần tử 4"));
// console.log(arr1.lastIndexOf("Phần tử 4"));



// console.log(arr1);
// // console.log(arr3);
// // console.log(arr2);



// // *************************************************
// // 10. ép kiểu
// // Chuyển số thành chuổi
// var so5 =10;
// console.log(typeof(so5));
// var chuoi5=String(so5);
// console.log(typeof(chuoi5));
// // Chuyển chuỗi thành số
// var chuoi6="10";
// console.log(typeof(chuoi6));
// var so6=Number(chuoi6);
// console.log(typeof(so6));


// // Tự ép kiểu
// var so7 =100;
// var chuoi7 ="10";
// var so8=so7+chuoi7;
// console.log(so8);


// var so9=so7+Number(chuoi7);
// console.log(so9);


// // ********************
// // ép chuỗi thành mảng
// var strl="Lập trình Javascript";
// var arr4=strl.split(" ");
// console.log(arr4);
// // ép ,amhr thành chuỗi
// var arr5 =["Lập","Trình","Javascript"];
// var str5=arr5.join(" ");
// console.log(str5);



// // ***********************
// var diemTongKet =prompt("Nhập điểm tổng kết của bạn: ");
// if(diemTongKet>=8){
//     alert("Học sinh giỏi");
// }
// else if(diemTongKet >= 5 && diemTongKet < 8){
//     alert("Học sinh khá");
// }
// else{
//     alert("Học sinh yếu");  
// }


// ************************
// // Toán tử 1 ngôi

// var so10 =10;
// var so11=so10++;
// var so12=10;
// var so13=++so12;
// document.write("Số 10:"+so10+"<br>");
// document.write("Số 11:"+so11+"<br>");
// document.write("Số 12:"+so12+"<br>");
// document.write("Số 13:"+so13+"<br>");


// ***************

// // 11.Đối tuongwk Math
// // Tìm giá trị lớn nhất 
// document.write("Giá trị lớn nhất: "+Math.max(1,3,4,6,5,2,55,66,56)+"<br>");
// // Tìm giá trị nhỏ nhất
// document.write("Giá trị nhỏ nhất: "+Math.min(1,3,4,6,5,2,55,66,56)+"<br>");
// // Lũy thừa, số mũ
// document.write(Math.pow(2,3)+"<br>");
// // Căn bậc 2
// document.write(Math.sqrt(64)+"<br>");
// // Làm tròn
// var so14=6.78;
// var so15=5.43;

// // Làm tròn chuẩn
// document.write("Làm tròn dùng round: "+Math.round(so14)+"<br>");
// document.write("Làm tròn dùng round: "+Math.round(so15)+"<br>");

// // Làm tròn lên
// document.write("Làm tròn dùng ceil: "+Math.ceil(so14)+"<br>");
// document.write("Làm tròn dùng ceil: "+Math.ceil(so15)+"<br>");


// // làm tròn k;hông để ý sao chấm 
// document.write("Làm tròn dùng floor: "+Math.floor(so14)+"<br>");
// document.write("Làm tròn dùng floor: "+Math.floor(so15)+"<br>");
// document.write("Làm tròn dùng trunc: "+Math.trunc(so14)+"<br>");
// document.write("Làm tròn dùng trunc: "+Math.trunc(so15)+"<br>");

// // Tạo số ngẫu hiên
// var so16 =Math.random();
// so17=Math.floor(so16*10);
// document.write(so17);