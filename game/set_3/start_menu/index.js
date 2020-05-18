


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


let kill = document.getElementsByClassName('content_option__kill');
kill[0].onclick = function(){
    location.href = "../start_murder/index.html"

}

var death_role = JSON.parse(sessionStorage.getItem('death_role'))
console.log(death_role);


var option__kill = document.getElementsByClassName('content_option__kill')
var option__triangle = document.getElementsByClassName('content_option__triangle')

if(death_role !== null){
     console.log('z')
     option__kill[0].style.backgroundColor = '#8dae9b'
     option__triangle[0].style.borderRight = '1.5rem solid #8dae9b'
}