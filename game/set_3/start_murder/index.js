var data = JSON.parse(sessionStorage.getItem("data_set"));

var murder_data = data;
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
var index = 0;

var player= JSON.parse(sessionStorage.getItem('player'));
var a //  定义点击的角色

function c_btn(){

    // function i_change(target){  
    //     for(var i = 0; i < m; i++){
    //        box_gcontent[j].classList.remove('bg')
    //         // console.log(i)      
    //     }
    //         target.classList.add('bg')
    // }
    // 这个方法只能实现点击本元素触发 本元素的内容
    // for(var j = 0 ; j<m; j++){
        //     box_gcontent[j].addEventListener('click',function(e){       
        //             console.log(j)
        //             i_change(e.currentTarget);    
        //      })   
    // }
    
    console.log(player)
    for(var j = 0 ; j<m; j++){
       
       var gcontent = box_gcontent[j];
       gcontent.index = j;   //给每个className为child的元素添专加index属性
       gcontent.onclick = function(){
           index++;
           $('.box_span').hide();              //jq实现
           $(this).find('.box_span').show();
           // console.log(index);
           console.log(player)
           
           a = player[this.index];
           console.log(a)
           sessionStorage.setItem('is_index',JSON.stringify(this.index))
        
       }
 

        
        
    }
    
}


var box_gImg = document.getElementsByClassName('box_img');

function box(i){
        // 另一种方法使用正则并接
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

};

var death = [];    
var button = document.getElementsByClassName('button');

button[0].onclick = function(){
    
        
    try{                   //错误捕获
        var num = a.num
    } catch(error){
        alert('请选择要操作的玩家')
        return;
    }
         
        console.log(num)
        console.log(index)
        var is_index = JSON.parse(sessionStorage.getItem('is_index'))
        console.log(is_index)
        
        if(num === is_index +1){
            
         
            for(var i= 0; i<=index; i++){

                death.push(a)
            } 
                       
        }

        for(let i = 0 ; i<index; i++){
          
            death.pop(i)
        }
        console.log(death)
        sessionStorage.setItem('death_role',JSON.stringify(death))
    
    
    if(index !== 0){
        location.href = '../start_menu/index.html'
    }


   
}









