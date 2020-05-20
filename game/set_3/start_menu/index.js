var revert = document.getElementsByClassName('nav__img1');
revert[0].onclick = function(){
    window.location.href = '../../set_2/start_diary/index.html';
};
var death_role = JSON.parse(sessionStorage.getItem('death_role'));
console.log(death_role);


var read=JSON.parse(sessionStorage.getItem('player'));

var day =1; 
              
for(let i=0; i<read.length; i++){
     console.log(read[i].cause)
     if(read[i].cause === '死亡'){
          day++;
     }
}
console.log(read)

var time=["一","二","三","四","五","六","七","八"];

for(let i=0; i<day-1;i++) {
     $('.main_clone').eq(0).append($('#k').clone(true)); // 克隆事件
                    
}
console.log(day,'重要')
                
for(let e = 0; e<=day; e++){
     $('.main__day').eq(e).text('第'+time[e]+'天');

}
for(let e=0; e+1 <=day-1 ;e++){
     $('.content-m').eq(e).css('display','none')
            
}


$('.main__day').click(function () {
     $(this).next().toggle();
              
});

    
          
var start_kill = sessionStorage.getItem('start');
     
var fsm =new StateMachine({
     init:start_kill,
     transitions:[
          {name:'kill',from:'start_kill',to:'end_ghostState'},
          {name:'ghost',from:'end_ghostState',to:'end_speakState'},
          {name:'speak',from:'end_speakState',to:'end_voteState'},
          {name:'vote',from:'end_voteState',to:'vote_end'}

     ],
     methods:{
          onInvalidTransition:function(transition,from,to){
               switch(from){
                    case 'start_kill':
                         alert('请按游戏顺序进行，杀手先杀人！');
                         break;

                    case 'end_ghostState':
                         alert('请按游戏顺序进行，亡灵发言！');
                         break;

                    case 'end_speakState':
                         alert('请按游戏顺序进行，玩家发言！');
                         break;

                    case 'end_voteState':
                         alert('请按游戏顺序进行，玩家投票！');
                         break;
               }
          }

     }
});
console.log(fsm)


$('.kill').eq(day-1).click(function () {
      
    if(fsm.state === 'start_kill'){
         sessionStorage.setItem('start', 'end_ghostState');
         alert('天黑了，杀手开始杀人');
         $('.content_option__triangle1').css('backround-color','#f5c97b')
         window.location = "../start_murder/index.html";

     }

     fsm.kill();
  });

  $('.ghost').eq(day-1).click(function () {
   
     if(fsm.state ==='end_ghostState'){
           alert('请幽灵发表遗言');
           sessionStorage.setItem('start','end_speakState'); 
     }
    
     fsm.ghost();
 });
 
 $('.speak').eq(day-1).click(function () {
     
      if(fsm.state === 'end_speakState'){
            console.log(fsm.can('speak'));
            sessionStorage.setItem('start', 'end_voteState');
            alert('请玩家发言');
        }

       fsm.speak();
 });
 
 
 $('.vote').eq(day-1).click(function () {
     if(fsm.state ==='end_voteState') {
           console.log(fsm.can('vote'));
           sessionStorage.setItem('start', 'start_kill');
           alert('请开始投票');
           sessionStorage.setItem('menu_role',JSON.stringify(death_role));
           window.location = '../start_murder/index.html '

     }

     fsm.vote()
    
 });






//源码写法逻辑
     
// let main_day = document.getElementsByClassName('main__day');
// var main_option = document.getElementsByClassName('main__option');
// var main_triangle = document.getElementsByClassName('main__triangle');

// var option_triangle2 = document.getElementsByClassName('content_option__triangle2');
// var option_triangle3 = document.getElementsByClassName('content_option__triangle3');
// var option_triangle4 = document.getElementsByClassName('content_option__triangle4');
// var option_order = document.getElementsByClassName('content_option__order');

// var ghost=0;
// var i =0;


// var data = JSON.parse(sessionStorage.getItem("data_set"));
// var main = document.getElementsByClassName('main');

// var str = data;


// var option_kill = document.getElementsByClassName('content_option__kill');

// var option_whole = document.getElementsByClassName('content_option__whole');

// var option_triangle = document.getElementsByClassName('content_option__triangle1');

// var option_ghost = document.getElementById('ghost');
// var newelem = document.getElementById('newelem');
// var day_sun = document.getElementsByClassName('content_day__sun');



     // main_day[0].onclick = function(){
     //      i++;
        
     //     console.log(i);
     //     if(i%2 == 0){  //判定条件余数为0时为偶数
             
     //          main_option[0].style.display = 'block';
     //          main_triangle[0].style.display = 'block';
     //     }else{
              
     //          main_option[0].style.display = 'none';
     //          main_triangle[0].style.display = 'none';
              
      
     //     };  
     //  };
     
     

     // if(death_role !== null){
          
     //      option_kill[0].style.backgroundColor = '#8dae9b';
     //      option_triangle[0].style.borderRight = '1.5rem solid #8dae9b';
     //      var newelem = document.createElement('div');
     //          newelem.setAttribute('class','newelem');
     //      option_ghost.parentNode.insertBefore(newelem,option_ghost);
     //      newelem.innerHTML = death_role[0].num + '被玩家杀死，真实身份是'+ death_role[0].name ;
     
     //      option_kill[0].style.marginBottom = '1rem';
     //      day_sun[0].style.top ='6.7rem';
     // }
     
     
     
//      option_kill[0].onclick = function(){
              
//           if(death_role !== null){
//                alert('请进行下一项活动');
//           }else{
//                location.href = "../start_murder/index.html";
//           };
              
//        };
       
     
//        option_ghost.onclick = function(){
//             ghost++;
//           if(death_role !== null){
//                if(ghost === 1){
//                     alert('请死者亮明身份并且发表遗言');
//                     option_triangle2[0].style.borderRight = '1.5rem solid #8dae9b';
//                     option_ghost.style.backgroundColor = '#8dae9b';
//                }else if(ghost > 2){
//                     alert('请进行下一项活动');
//                };    
//           };
//        };
     
//        var order= 0;
     
//        option_order[0].onclick = function(){
//           order++;
//         if(death_role !== null){
//              if(order === 1){
//                   alert('玩家依次讨论');
//                   option_triangle3[0].style.borderRight = '1.5rem solid #8dae9b';
//                   option_order[0].style.backgroundColor = '#8dae9b';
//              }else if(order > 2){
//                   alert('请进行下一项活动');
//              };
//         };
//      };
     
     
     
//      option_whole[0].onclick = function(){
//           if(death_role !== null){
//                option_triangle4[0].style.borderRight = '1.5rem solid #8dae9b';
//                option_whole[0].style.backgroundColor = '#8dae9b';
//                sessionStorage.setItem('menu_role',JSON.stringify(death_role));
              
//                if(death_role.length >= 2){
//                     alert('请进行下一项活动');
//                     return;
//                }else{
//                     location.href = '../start_murder/index.html '
//                }
//           }
//      }
     

     
     // if(death_role !== null){
     //      if(death_role.length >=2){
          //      console.log('2')
          //      option_triangle2[0].style.borderRight = '1.5rem solid #8dae9b';
          //      option_ghost.style.backgroundColor = '#8dae9b';
          //      option_triangle3[0].style.borderRight = '1.5rem solid #8dae9b';
          //      option_order[0].style.backgroundColor = '#8dae9b';
          //      option_triangle4[0].style.borderRight = '1.5rem solid #8dae9b';
          //      option_whole[0].style.backgroundColor = '#8dae9b';
          
               
               // for(var i = 1; i<death_role.length; i++){
       
               //      // create();
                    
               // }









