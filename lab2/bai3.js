var BMI=prompt("Mời nhập trọng lương cơ thể: ");
if(BMI<18.5){
    alert("Thiếu cân");
}
else if(18.5<BMI && BMI<=24.99){
    alert("Bình thường");
}
else if(25<BMI && BMI<=29.99){
    alert("Thừa cân");
}
else{
    alert("Béo phì");
}