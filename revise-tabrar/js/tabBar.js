//面向对象的思路 把公共的属性和方法抽取出来写到类里面，然后根据类实例化的对象，创建各种各样的对象

//第一步，抽取我们这个对象 这个案例抽取一个对象tab栏

//抽取对象:Tab对象 接着该对象有什么功能划分成各个模块,如下
//1.该对象具有切换功能
//2.该对象具有添加功能
//3.该对象具有删除功能
//4.该对象具有修改功能

//按照思路 抽取Tab对象,定义一个类Tab

var that;
class Tab {
   constructor(id){
       
       //获取元素
       that = this;
       this.main = document.querySelector(id);
       this.lis  = this.main.querySelectorAll('li');  //Tab标签
       this.sections = this.main.querySelectorAll('section'); //tab内容
       this.add = this.main.querySelector('.tabadd');
       
       // li的父元素
       this.ul = this.main.querySelector('.fisrstnav ul:first-child')
       // section的父元素
       this.fsection = this.main.querySelector('.tabscon')
       this.init(); //调用
   }
   init(){
      this.updateNode();
      // init 初始化操作让相关的元素  绑定事件
      this.add.onclick = this.addTab;
      // 给每个标签添加onclick
      for(var i = 0; i < this.lis.length; i++){
          this.lis[i].index = i; //传的当前索引号
          this.lis[i].onclick = this.toggleTab;
          this.remove[i].onclick = this.removeTab;
          this.spans[i].ondblclick = this.editTab;

          this.sections[i].ondblclick = this.editTab;
      }


    }
    // 因为动态添加元素,需要从新获取对应的元素
    updateNode(){
       this.lis  = this.main.querySelectorAll('li');  //Tab标签
       this.sections = this.main.querySelectorAll('section'); //tab内容
       this.remove = this.main.querySelectorAll('.icon-guanbi')
       this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }


   // 1.切换功能
   // that代表需要用constructor里的this来调用
   toggleTab(){
     console.log(this.index)
     that.clearClass();
     this.className = 'liactive' //添加样式 init的this
     that.sections[this.index].className ='conactive'
   }
   // 清除所有li 和section的类
   clearClass(){
       for(var i = 0; i < this.lis.length; i++){
           this.lis[i].className='';
           this.sections[i].className='';
       }
   }
   // 2.添加功能
   addTab(){
      that.clearClass();
      var random = Math.random();  // 生成一个随机数
      //1.创建li元素和section元素
      var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
      var section = '<section class="conactive">测试'+ random +'</section>';
      //2.把这两个元素追加到对应的父元素里面
      that.ul.insertAdjacentHTML('beforeend',li); //this AddTab是按钮调用的 按钮里面没有ul元素,所以应该是constructor里面的ul
      that.fsection.insertAdjacentHTML('beforeend', section);
      that.init();
   }
   // 3.删除功能
   removeTab(e){
       e.stopPropagation();     //阻止冒泡 防止触发li的切换点击事件
       var index = this.parentNode.index;
       console.log(index)
       // 根据索引好删除对应的li 和section remove()方法可以直接删除指定的元素
       that.lis[index].remove();
       that.sections[index].remove();
       that.init();
       // 当我们删除的不是选中状态的li的时候,原来的选中状态li 保持不变
       if(document.querySelector('.liactive')) return;  //类名有.liactive 不再执行下面的代码
       // 当我们删除了选中状态的这个li的时候,让他的前一个li 处于选定状态
       index--;
       // 手动调用我们的点击事件 不需要鼠标触发
       that.lis[index]  && that.lis[index].click();  //判断为减减为-1时 不执行模拟click()
   }
   // 4.修改功能
   editTab(){
    var str = this.innerHTML;
    //    双击禁止选定文字
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); 
    this.innerHTML = '<input type="text" />';
    var input = this.children[0]; //第一个span
    input.value = str;
    input.select(); //文本框里面的文字处于选定状态
    //当我们离开文本框就把文本框里面的只给span
    input.onblur = function() {
        this.parentNode.innerHTML = this.value
    }
    //按下回车也可以把文本框里面的值给span
    input.onkeyup = function(e){
        if(e.keyCode === 13){
            this.blur();  // 手动调用表单失去焦点事件 不需要鼠标离开操作
        }
    }
          
      
   }
}

new  Tab('#tab')  //创建第一个实例对象他的名字#tab
