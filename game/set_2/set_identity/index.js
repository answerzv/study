var revert = document.getElementsByClassName('nav__img1');
revert[0].onclick = function(){
    window.location.href = '../../set_1/set_game/index.html';
};

var data = JSON.parse(sessionStorage.getItem("data_set"));

// var str = data;
// var str_convert = str.split(",");
var str_convert = data;
console.log(str_convert)

var arr = [];
for(let i = 0; i< str_convert.length; i++){
    arr.push(i);
}
console.log(arr)

var button = document.getElementsByClassName('button');
var i = 1;
var c_trigger = 0;
var c_size = Number(arr.length*2) 



button[0].onclick = function(){
    
    c_trigger ++;
    obj = {
        val:c_trigger
    }
    pack.call(obj)
    
   
};

var num = document.getElementById('num');
num.innerHTML = 1;
button[0].innerHTML = '查看1号身份';

function jump(){
     i++;
     if(i > arr.length){
        return
     }
     
     num.innerHTML = i
}

var front =document.getElementsByClassName('chart_front');
var back = document.getElementsByClassName('chart_back');
var main_identity = document.getElementsByClassName('main__identity');
var identity = document.getElementById('identity');
function pack(){
    console.log(this.val)
    console.log(str_convert[i-1])

    if(this.val<= c_size){
        if(this.val%2 == 0){  //判定条件余数为0时为偶数
            front[0].style.display="block";
            back[0].style.display = 'none';
            button[0].innerHTML = '查看'+`${i+ 1}`+'号身份';
            identity.style.display = 'none';
            jump()
            if(this.val === Number(arr.length*2)){
               //sessionStorage.setItem("set_identity", str_convert);
               location.href = "../../set_2/start_diary/index.html";
            }
        }else{
            front[0].style.display="none";
            back[0].style.display = 'block';
            main_identity[0].style.marginTop = '6rem';
            button[0].innerHTML = '隐藏并传递给'+`${i+ 1}`+'号';
            identity.style.display = 'block';
            identity.innerHTML = str_convert[i-1];
            
            if(this.val === Number(arr.length*2)- 1){
                button[0].innerHTML = '法官查看';
                 
            };

            //if(button[0].firstChild.nodeValue ==法官查看){
            // }   
        };

    };
  
}

