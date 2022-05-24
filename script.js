
var gallery = document.querySelector('.gallery-view');
var slide = document.querySelector('.slide');

var leftB = document.querySelector('.ctrl-btn.l');
var rightB = document.querySelector('.ctrl-btn.r');

var galPose = gallery.offsetLeft;
console.log(galPose);
leftB.style.left = `${galPose-50}px`;
rightB.style.right = `${galPose-50}px`;

var gW = gallery.offsetWidth;
var sW = slide.offsetWidth;

var change = 0;

leftB.addEventListener('click', callLT);
rightB.addEventListener('click', callRT);

var myint = setInterval(rt, 5000);

function callLT() {
    clearInterval(myint);
    lt();
    myint = setInterval(rt, 5000);
}
function callRT() {
    clearInterval(myint);
    rt();
    myint = setInterval(rt, 5000);
}
function lt() {
    if(change != 0)
    {
        change += gW;
    } else {
        change -= (sW - gW);
    }

    doTrans();
}
function rt() {
    if(change*(-1) < sW - gW)
    {
        change -= gW;
    } else {
        change = 0;
    }
    doTrans();
}
function doTrans() {
    slide.style.transform = `translateX(${change}px)`;
}