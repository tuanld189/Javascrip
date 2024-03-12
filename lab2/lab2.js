var a;
var b;
a = prompt("Nhập số a: ");
b = prompt("Nhập số b: ");
a=parseInt(a);
b=parseInt(b);
var c=Math.pow(a,2)+Math.pow(b,2);
document.write("Cạnh huyền của tam giác: "+Math.sqrt(c)+"<br>");