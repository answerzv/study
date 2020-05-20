var data=JSON.parse(sessionStorage.getItem("data_set"));

console.log("2",data);                     //角色生成对象

var read=JSON.parse(sessionStorage.getItem('player'));
console.log('3',read);



for (var i=0; i<data.length;i++){
    var A="\n";
    var main=`<div class="main_box">
${A}<div class="profession-flex">
${A}<div class="box_txt">${data[i]}</div>
${A}<div class="box_num">${i+1}号</div>
${A}</div>
${A}<ul class="box_img"><li class="box_span"></li></ul></div>` ;

    $(main).appendTo("#main-box");  //根据数组长度，复制盒子

}



var a;    //定义一个变量记录被杀手选中的玩家
let q;

let backgroundBox=$('.box_txt');

$('.main_box').click(function () {


    for(let i=0; i<read.length;i++){
        if(read[i].class==='label'){                                //复位活着的玩家的颜色
            $(backgroundBox[i]).css('background-color','#f5c97b');

           // 隐藏显示小刀
            $('.box_span').hide();
            $(this).find('.box_span').show();//this函数这里指向被点击盒子
            console.log("333");

            $(this).find('.box_txt').css('background-color','#83B098');

           q=$('.main_box').index(this); //留存记号
           console.log(q,'q');

           a=$(this).index();
        //  console.log("顺序",a);
            console.log(read[a]);

         }
    }

});

//设置死亡玩家颜色


for (let i = 0; i < read.length; i++) {
    if (read[i].class === "dead") {
        $(backgroundBox[i]).css('background-color', "#83B098");
    }
}

var kill = sessionStorage.getItem('start')
console.log(kill)

//胜利判定
function gameOver(){
    var aliveKiller = 0;
    var alivePeople = 0;
    for (let i = 0; i < read.length; i++) {
        if(read[i].class ==="label"){
            if(read[i].name === "水民"){
                alivePeople++;
            }else  if(read[i].name ==="幽灵"){
                aliveKiller++;

            }
        }
    }

    console.log("存活水民:"+alivePeople);
    console.log("存活杀手:"+aliveKiller);
   

    
    if(alivePeople===aliveKiller){
        alert("杀手胜利");
    }else{
        window.location="../start_menu/index.html";
    }

}



$('.button').click(function () {
  console.log("点击事件");
  console.log(read[q].name ,'l');

  if(read[q].name === "水民"){
      read[q].class = "dead";//变成死亡状态
      
      if(kill==='start_kill'){
        read[q].cause = "死亡";//死亡方式，被杀死
      }else{
        read[q].cause = "被杀手杀死";//死亡方式，被杀死
      }
      read[q].deathDay = "";//死亡时间
      console.log("哈哈",read);
      
  
     


  }else  if(read[q].name==="杀手"){
      alert("不可以自杀");
  }else  if(read[q].class ==="dead"){
    alert("已死亡");
  }



  if(a===undefined){
      alert("请选择要投的玩家")
  }else {

  }

    gameOver();
    sessionStorage.setItem("player",JSON.stringify(read));
    console.log("hm",read);
});








//源码写法逻辑

// var data = JSON.parse(sessionStorage.getItem("data_set"));

// var murder_data = data;
// console.log(murder_data);

// var m = murder_data.length;
// var main = document.getElementById('main');


// var box_gcontent = document.getElementsByClassName('main_box');

// // var box_gtext = document.getElementsByClassName('box_text')
// var box_gnum  = document.getElementsByClassName('box_num')
// var box_gtxt  = document.getElementsByClassName('box_txt')
// var box_gImg = document.getElementsByClassName('box_img');

// var arr_box = [];
// var arr_text = [];
// var arr_num = [];
// var arr_img = [];
// var arr_span = [];

// var o=0
// var menu_role = JSON.parse(sessionStorage.getItem('menu_role'));

// window.onload = function(){
    
//     for(let j=0; j<m; j++){
       
//           box(j);
//           box_gtxt[j].innerText =`${murder_data[j]}`;
//           box_gnum[j].innerHTML = `${j+1}`+'号';

          
//     };
        
//     c_btn();
   
//     try{                   //错误捕获
//         bg_role();
//     } catch(error){
       
//         return;
//     }
// };


// var box_gspan = document.getElementsByClassName('box_span')

// var index = 0;

// var player= JSON.parse(sessionStorage.getItem('player'));
// var a //  定义点击的角色

// function c_btn(){

//     // function i_change(target){  
//     //     for(var i = 0; i < m; i++){
//     //        box_gcontent[j].classList.remove('bg')
//     //         // console.log(i)      
//     //     }
//     //         target.classList.add('bg')
//     // }
//     // 这个方法只能实现点击本元素触发 本元素的内容
//     // for(var j = 0 ; j<m; j++){
//         //     box_gcontent[j].addEventListener('click',function(e){       
//         //             console.log(j)
//         //             i_change(e.currentTarget);    
//         //      })   
//     // }
    
//     console.log(player)
//     for(var j = 0 ; j<m; j++){
       
//        var gcontent = box_gcontent[j];
//        gcontent.index = j;   //给每个className为child的元素添专加index属性
//        gcontent.onclick = function(){
//            index++;
//            $('.box_span').hide();              //jq实现
//            $(this).find('.box_span').show();
//            // console.log(index);
//            console.log(player)
           
//            a = player[this.index];
//            console.log(a)
//            sessionStorage.setItem('is_index',JSON.stringify(this.index))
           
//        }

    
//     }
    
// }




// function box(i){
//         // 另一种方法使用正则并接
//         var box = document.createElement('div');
//         box.setAttribute('class','main_box')
//         arr_box.push(box);
//         var box_text =document.createElement('div');
//         box_text.setAttribute('class','box_txt');
//         arr_text.push(box_text);
//         var box_num  =document.createElement('div');
//         box_num.setAttribute('class','box_num')
//         arr_num.push(box_num);
//         var box_img = document.createElement('div');
//         box_img.setAttribute('class','box_img');
//         arr_img.push(box_img);
//         var box_span =document.createElement('div');
//         box_span.setAttribute('class','box_span');
//         arr_span.push(box_span);
        
//         main.appendChild(arr_box[i])
//         box_gcontent[i].appendChild(arr_text[i])
//         box_gcontent[i].appendChild(arr_num[i])
//         box_gcontent[i].appendChild(arr_img[i])
//         box_gImg[i].appendChild(arr_span[i])
       
// };

// var death = [];    
// var button = document.getElementsByClassName('button');

// button[0].onclick = function(){
    
//     try{                   //错误捕获
//         var num = a.num
//     } catch(error){
//         alert('请选择要操作的玩家')
//         return;
//     }
   
    
//         console.log(num)
        
//         if(menu_role!==null){
//             let u = menu_role[0].num;
//                console.log(u)
//                if(num ===u){
//                     alert('不能杀死去的玩家')
//                     return;
//                 }else{
                    
//                     var is_index = JSON.parse(sessionStorage.getItem('is_index'))
//                     console.log(is_index)
                
//                     if(num === is_index +1){
                 
//                        for(var i= 0; i<=index; i++){
        
//                         menu_role.push(a)
//                         }              
//                     }
        
//                     for(let i = 0 ; i<index; i++){
                  
//                         menu_role.pop(i)
//                    }
                
//                     console.log(menu_role)
//                     sessionStorage.setItem('death_role',JSON.stringify(menu_role))
//                 }
//         }else{
            
                 
                
//                 var is_index = JSON.parse(sessionStorage.getItem('is_index'))
//                 console.log(is_index)
                
//                 if(num === is_index +1){
                 
//                     for(var i= 0; i<=index; i++){
        
//                         death.push(a)
//                     }              
//                 }
        
//                 for(let i = 0 ; i<index; i++){
                  
//                     death.pop(i)
//                 }
//                 console.log(death)
//                 sessionStorage.setItem('death_role',JSON.stringify(death))
//         }
       
//     if(index !== 0){
//         location.href = '../start_menu/index.html'
//     }
   
// }



// console.log(menu_role,'二次进入')

// if(menu_role!==null){
//     var title = document.getElementsByClassName('nav__title');
//     title[0].innerHTML = '全民投票';
//     var nav_box = document.getElementsByClassName('nav_box');
//     nav_box[0].innerHTML = '发表讨论结束，大家请投票';
//     var text = document.getElementsByClassName('text');
//     text[0].innerHTML = '点击得票最多的人的头像'

    
//     function bg_role(){
//         if(this.menu_role !== null){
//             var u = menu_role[0].num -1;
//               console.log(u)
             
//               box_gcontent[u].style.backgroundColor = '#83B098'
              
//         }
//     };
    

    
// };



