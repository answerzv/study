var revert = document.getElementsByClassName('nav__img1');
revert[0].onclick = function(){
    window.location.href = '../../set_2/start_diary/index.html';
};


let main_day = document.getElementsByClassName('main__day');
var main_option = document.getElementsByClassName('main__option');
var main_triangle = document.getElementsByClassName('main__triangle')
var i =0;
main_day[0].onclick = function(){
    i++;
  
   console.log(i)
   if(i%2 == 0){  //判定条件余数为0时为偶数
       
        main_option[0].style.display = 'block';
        main_triangle[0].style.display = 'block';
   }else{
        
        main_option[0].style.display = 'none';
        main_triangle[0].style.display = 'none';
        

   }  
}


var data = JSON.parse(sessionStorage.getItem("data_set"));
var main = document.getElementById('main');

var str = data;


var option_kill = document.getElementsByClassName('content_option__kill')


var death_role = JSON.parse(sessionStorage.getItem('death_role'))
console.log(death_role);




var option_triangle = document.getElementsByClassName('content_option__triangle')

var option_ghost = document.getElementById('ghost');
var newelem = document.getElementById('newelem');
var day_sun = document.getElementsByClassName('content_day__sun');


if(death_role !== null){
     
     option_kill[0].style.backgroundColor = '#8dae9b'
     option_triangle[0].style.borderRight = '1.5rem solid #8dae9b'
     var newelem = document.createElement('div')
         newelem.setAttribute('class','newelem')
     option_ghost.parentNode.insertBefore(newelem,option_ghost)
     newelem.innerHTML = death_role[0].num + '被玩家杀死，真实身份是'+ death_role[0].name ;

     option_kill[0].style.marginBottom = '1rem'
     day_sun[0].style.top ='6.7rem'
}


option_kill[0].onclick = function(){
         
     if(death_role !== null){
          alert('请进行下一项活动')
     }else{
          location.href = "../start_murder/index.html"
     }
         
  }
