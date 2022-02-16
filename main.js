//اعدادات يجب التعامل معها قبل البدء في استخدام Canvas
let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
// get values
let allChoices = document.querySelector('.all span');
let coChoices = document.querySelector('.correct span');
let ncoChoices = document.querySelector('.incorrect span');
// width and height variables
let wd = canvas.offsetWidth,
    hg = canvas.offsetHeight;

//
function refresh() {
    if (!window.localStorage.getItem('correct')) {
        window.localStorage.setItem('correct', 0);
    }
    let Cvalue = parseInt(window.localStorage.getItem('correct'));
    coChoices.textContent = Cvalue;
    if (!window.localStorage.getItem('incorrect')) {
        window.localStorage.setItem('incorrect', 0);
    }
    let NCvalue = parseInt(window.localStorage.getItem('incorrect'));
    ncoChoices.textContent = NCvalue;
    allChoices.textContent = Cvalue+NCvalue;
}
refresh();
function initialNewOne() {
    ctx.beginPath();
    ctx.moveTo(wd*3.5/4,hg/2);
    ctx.lineTo(wd/2,hg/2);
    ctx.lineWidth = 4;
    ctx.strokeStyle= 'black';
    ctx.lineTo(initW,initH);
    ctx.stroke();
}
let initW = getRandomInt(1,7)*wd/8;
let initH = hg/8;
function getRandomInt(min,max)
{
    //  return Math.floor(Math.random() * (max - min + 1)) + min;

    let imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return imn;
}
initialNewOne();
// check the values
function checkValues() {
    if (initW>wd/2){
        return `small`;
    }else if (initW===wd/2){
        return `medium`;
    }else {
        return `big`;
    }
}
let checkBtn = document.querySelector('button[type=submit]');
checkBtn.onclick = function (e) {
    let result = document.querySelector('input[name="choice"]:checked').id;
    console.log(result,checkValues(),initW);
    if (result === checkValues()){
        update(true);
    }else {
        update(false);
    }
    // e.preventDefault();
}
function update(x) {
    if (x){
        if (!window.localStorage.getItem('correct')) {
            window.localStorage.setItem('correct', 0);
        }
        let Cvalue = parseInt(window.localStorage.getItem('correct'));
        window.localStorage.setItem('correct', Cvalue + 1);
    }else {
        if (!window.localStorage.getItem('incorrect')) {
            window.localStorage.setItem('incorrect', 0);
        }
        let NCvalue = parseInt(window.localStorage.getItem('incorrect'));
        window.localStorage.setItem('incorrect', NCvalue + 1);
    }
    refresh();
}

