// bài 4
const output = document.querySelector('.output');
const massage = document.querySelector('.massage');
massage.textContent = "Ấn để bắt đầu";
const box = document.createElement('div');
const game = {
    timer : 0 ,
    start : null
};
box.classList.add('box');
output.append(box);
function ngauNhien(max){
    return Math.floor(Math.random()*max);
}
function addBox(){
    massage.textContent = 'Ấn vào nó...';
    game.start = new Date().getTime();
    box.style.display = 'block';
    box.style.left = ngauNhien(450)+ 'px';
    box.style.top = ngauNhien(450)+ 'px';
}
box.addEventListener('click',() => {
    box.textContent = "";
    box.style.display = 'none';
    game.timer = setTimeout(addBox,ngauNhien(3000));
    if(!game.start){
        massage.textContent = 'Loading ....';
    }
    else{
        const cur = new Date().getTime();
        const dur = ((cur-game.start)/1000);
        massage.textContent = `Phải mất ${dur} giây để nhấp vào`;
    }
});