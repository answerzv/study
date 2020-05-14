var revert = document.getElementsByClassName('nav__img1');
revert[0].onclick = function(){
    window.location.href = '../../set_2/set_identity/index.html';
};
var button = document.getElementsByClassName('button');
button[0].onclick = function(){
    location.href = '../../set_3/start_menu/index.html'
}

var data = sessionStorage.getItem("data_set");
var main = document.getElementById('main');

var str = data;
var str_convert = str.split(",");
console.log(str_convert);

var arr= [];
var arr_box = [];
var arr_text = [];
var arr_num = [];
for(let i=0; i<str_convert.length; i++){
   arr.push(i);
   var box = document.createElement('div');
   box.setAttribute('class','main_box')
   arr_box.push(box);
   var box_text =document.createElement('div');
   box_text.setAttribute('class','box_text')
   var box_num  =document.createElement('div');
   box_num.setAttribute('class','box_num')
   arr_text.push(box_text);
   arr_num.push(box_num);
   box_text.innerHTML = str_convert[i];
   box_num.innerHTML = `${i+1}`+'号';
   
};
console.log(arr_text);
console.log(arr_num)

var box_content = document.getElementsByClassName('main_box');

for(let i=0; i< arr_box.length; i++){
    console.log(arr_box[i])
    main.appendChild(arr_box[i])
    box_content[i].appendChild(arr_text[i])
    box_content[i].appendChild(arr_num[i])
}




