var startBtn = document.getElementsByClassName('box');
var startBtns = Array.prototype.slice.call(startBtn);


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
       var arr = startBtns;
       var result = [];
       
        for(var i = 0; i < 3; i++){
            var boxMain = Math.floor(Math.random()*arr.length );
            if(result.includes(arr[boxMain])){ 
                var boxMain = Math.floor(Math.random()*arr.length );
                console.log('avoid probability')
            }
            result.push(arr[boxMain]);
            
           
        }
        
        console.log(result)
        var [ one , two , three] = result
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
