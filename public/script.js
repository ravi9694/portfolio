let innerCurser=document.querySelector('.inner-curser');
let outerCurser=document.querySelector('.outer-curser');

document.addEventListener('mousemove',moveCurser);

function moveCurser(e){
    let x=e.clientX;
    let y=e.clientY;

    innerCurser.style.left=`${x}px`;
    innerCurser.style.top=`${y}px`;
    outerCurser.style.left=`${x}px`;
    outerCurser.style.top=`${y}px`;
}