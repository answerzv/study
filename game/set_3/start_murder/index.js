var data = sessionStorage.getItem("data_set");

var str = data;
var murder_data = str.split(",");
console.log(murder_data);

var m = murder_data.length;

var main = document.getElementById('main');


var box_gcontent = document.getElementsByClassName('main_box');

// var box_gtext = document.getElementsByClassName('box_text')
var box_gnum  = document.getElementsByClassName('box_num')
var box_gtxt  = document.getElementsByClassName('box_txt')

var arr_box = [];
var arr_text = [];
var arr_num = [];
var arr_img = [];
var arr_span = [];

var o=0



window.onload = function(){
    
    
    for(let j=0; j<m; j++){
       
      
        box(j);
          box_gtxt[j].innerText =`${murder_data[j]}`;
          box_gnum[j].innerHTML = `${j+1}`+'号';
    
    
     };
     c_btn()
}


var box_gspan = document.getElementsByClassName('box_span')

function c_btn(){
    for(let j = 0 ; j<m; j++){
        this.box_gcontent[j].onclick =function(){
            o++
        
         box_gspan[j].style.visibility = 'visible'
         

            console.log(o)
            console.log(j)
        }
    }
}

var box_gImg = document.getElementsByClassName('box_img');

function box(i){
 
        var box = document.createElement('div');
        box.setAttribute('class','main_box')
        arr_box.push(box);
        var box_text =document.createElement('div');
        box_text.setAttribute('class','box_txt');
        arr_text.push(box_text);
        var box_num  =document.createElement('div');
        box_num.setAttribute('class','box_num')
        arr_num.push(box_num);
        var box_img = document.createElement('div');
        box_img.setAttribute('class','box_img');
        arr_img.push(box_img);
        var box_span =document.createElement('div');
        box_span.setAttribute('class','box_span');
        arr_span.push(box_span);
        

        main.appendChild(arr_box[i])
        box_gcontent[i].appendChild(arr_text[i])
        box_gcontent[i].appendChild(arr_num[i])
        box_gcontent[i].appendChild(arr_img[i])
        box_gImg[i].appendChild(arr_span[i])
     
}






