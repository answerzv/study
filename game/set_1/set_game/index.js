let  revert = document.getElementsByClassName('nav__img1');
revert[0].onclick = function(){
    window.location.href = "../home/index.html"
}

var set_civil = document.getElementById("vle_civil");
var set_ghost = document.getElementById("vle_ghost");

console.log(set_civil)
console.log(set_ghost)
var set_slider = document.getElementById("processRange");
var sum = document.getElementById('sum');

function onChangeHandler(val){
    if(val < 4){
        this.alert('亲，玩家数量太少了');
        sum.value = '';
    }else if(val > 18){
        this.alert('亲，玩家数量太多了');
        sum.value='';
    } 
}

function getWord(){
  
    let val =sum.value;
     val = Number(val)
    let obj ={
        val:val
    }
    console.log(obj.val,'getWord')
    package.call(obj)

    var setdata =Number(set_civil.value) + Number(set_ghost.value) 
    set_slider.value = setdata
}

if('oninput' in sum){
    sum.addEventListener('input',getWord,false);
    
}

if('oninput' in set_slider){
    set_slider.addEventListener('input',slider_act,false);
}

function slider_act(){
   let data = sessionStorage.getItem("lastname");
   
   let val = Number(data)
   sum.value = val
   console.log(set_slider.value)
   let obj ={
       val:val
   }
   console.log(obj.val,'slider_act')
   package.call(obj)
}

var sumAdd = document.getElementById('plus');
var sumReduce = document.getElementById('reduce');
sumReduce.onclick =function () {
    set_slider.value--;
}

function package() {
    console.log(this.val)
    if(this.val===4){
        set_ghost.value = 3;
        set_civil.value =1;
       }else if(this.val===5){
        set_civil.value = 1;
        set_ghost.value = 4;  
       }else if(this.val ===6){
        set_civil.value = 2;
        set_ghost.value = 4;
       }else if(this.val===7){
        set_civil.value = 2;
        set_ghost.value = 5;
       }else if(this.val===8){
        set_civil.value = 2;
        set_ghost.value = 6;
       }else if(this.val===9){
        set_civil.value = 3;
        set_ghost.value = 6;
       }else if(this.val===10){
        set_civil.value = 3;
        set_ghost.value = 7;
       }else if(this.val===11){
        set_civil.value = 3;
        set_ghost.value = 8;
       }else if(this.val===12){
        set_civil.value = 4;
        set_ghost.value = 8;
       }else if(this.val===13){
        set_civil.value = 4;
        set_ghost.value = 9;
      }else if(this.val===14){
        set_civil.value = 4;
        set_ghost.value = 10;
      }else if(this.val===15){
        set_civil.value = 4;
        set_ghost.value = 11;
      }else if(this.val===16){
        set_civil.value = 5;
        set_ghost.value = 11;
      }else if(this.val===17){
        set_civil.value = 5;
        set_ghost.value = 12;
      }else if(this.val===18){
        set_civil.value = 5;
        set_ghost.value = 13;
    }else{
        set_civil.value = '';
        set_ghost.value = '';
    }
}

if('oninput' in sumAdd){
    sumAdd.addEventListener('click',slider_add,false);    
}
if('oninput' in sumReduce){
    sumReduce.addEventListener('click',slider_reduce,false);
}

function slider_add() {
    set_slider.value ++;
    let data = set_slider.value;
    let val = Number(data);
    sum.value = val
    let obj = {
        val:val,
    }
    package.call(obj)
}

function slider_reduce() {
    set_slider.value --;
    let data = set_slider.value;
    let val = Number(data);
    sum.value = val
    let obj = {
        val:val,
    }
    package.call(obj)
}

function start() {
    var civilian = new Array(parseInt(set_ghost.value)).fill('水民');
    var specter  = new Array(Number(set_civil.value)).fill('幽灵');

    var main = civilian.concat(specter);
    shuffle(main)
    
}


function shuffle(i) {
    //console.log(i)
    var main_chaos = [];
    
    while(i.length){
       var index = Math.floor(Math.random() * i.length);
       //console.log(index)
       main_chaos.push(i[index]);
       i.splice(index,1);
    }

    console.log(main_chaos)
    sessionStorage.setItem("data_set", main_chaos);
     return;
}

let button = document.getElementsByClassName('button');
button[0].onclick =function() {
    start()
    window.location.href = "../../set_2/set_identity/index.html"
}


