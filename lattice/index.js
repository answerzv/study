var startBtn = document.getElementsByClassName('box');


var times = 0;
var timer
var hsl

function start(){

    clearInterval(timer);
    myFunction()
    
}

function startColor(){
    var color='#';
    for(var i = 0; i < 6; i++){
        color += (Math.random()*16 | 0).toString(16)
    }
    return color;
}


function myFunction(){
    
    timer=setInterval(() => {
        var one = startBtn[Math.floor(Math.random()*startBtn.length)];
        var two = startBtn[Math.floor(Math.random()*startBtn.length)];
        var three = startBtn[Math.floor(Math.random()*startBtn.length)];
        var arr = [];
        for(let i = 0; i < 3; i++){
            var obj = startColor()
            arr.push(obj)
         }
       console.log(arr)
        var [ a , b , c ] = arr
        one.style.backgroundColor = a;
        two.style.backgroundColor = b;
        three.style.backgroundColor = c;
       
    }, 3000);
}

cover()

function cover(){
   hsl = setInterval(() => {
        for (let i = 0; i < startBtn.length; i++) {
            var main = startBtn;
            var bule = '#008b8b'
            main[i].style.backgroundColor = bule
        }
    }, 3000);
}


function cancel(){
    times ++;
    if(times===1) cover()
    clearInterval(timer)
    clearInterval(hsl)
    
    
      
}
