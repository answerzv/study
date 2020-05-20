let nav = document.getElementsByClassName('nav');
let i = 0;
let nav_btn = document.createElement('div');
nav_btn.setAttribute('class','nav__btn');
nav[i].appendChild(nav_btn);

let ul_main = document.createElement('ul');
ul_main.setAttribute('class','btnMain');
let nav_btnGain = document.getElementsByClassName('nav__btn');
nav_btnGain[i].appendChild(ul_main);

var arr = [];
for(let i=0; i< 3; i++){
 var li_box = document.createElement('li')
 arr.push(li_box)
}
console.log(arr)

arr[0].setAttribute('class','btnMain__box');
arr[1].setAttribute('class','btnMain__box');
arr[2].setAttribute('class','btnMain__box');
let ul__mainGain = document.getElementsByClassName('btnMain');
ul__mainGain[i].appendChild(arr[0]);
ul__mainGain[i].appendChild(arr[1]);
ul__mainGain[i].appendChild(arr[2]);

let mainHeader = document.getElementsByClassName('main__header');
let contentElement = document.createElement('p');
let contentText = document.createTextNode('请点击按钮开始游戏');
mainHeader[i].appendChild(contentElement);
contentElement.appendChild(contentText);

let mainContent = document.getElementsByClassName('main__content');
let contentHeader = document.createElement('div');
contentHeader.setAttribute('class','contentText')
mainContent[i].appendChild(contentHeader);
contentHeaderGet = document.getElementsByClassName('contentText')
let contentHeaderText = document.createTextNode('抓鬼游戏');
contentHeaderGet[i].appendChild(contentHeaderText);

var arrBtn =[];
for(let i = 0; i < 3; i++){
    let contentMain_btn = document.createElement('div');
    arrBtn.push(contentMain_btn)
}
console.log(arrBtn)

mainContent[i].appendChild(arrBtn[0]);
arrBtn[0].setAttribute('class','contentBtn_1');

let contentBtn_1 = document.getElementsByClassName('contentBtn_1')

var arrBtnText =[];
for(let i = 0; i< 1; i++){
    let contenMain_text = document.createTextNode('简化版');
    arrBtnText.push(contenMain_text);
}
console.log(arrBtnText)

contentBtn_1[i].appendChild(arrBtnText[0]); 

// 添加下标p标签
var arrPlyed = [];
for(let i = 0; i< 3; i++){
    let playedElement_1 = document.createElement('p');
    arrPlyed.push(playedElement_1)
}
console.log(arrPlyed)
arrPlyed[0].setAttribute('class','palyed_text');

var arrPlyedText = [];
for(let i = 0; i< 3; i++){
    let playedText_1 = document.createTextNode('有1133个用户玩过此游戏');
    arrPlyedText.push(playedText_1)
}
console.log(arrPlyedText)

let playedElementGet_1 = document.getElementsByClassName('plalyed_text');
mainContent[i].appendChild(arrPlyed[0]);
arrPlyed[0].appendChild(arrPlyedText[0]);

mainContent[i].appendChild(arrBtn[1]);
arrBtn[1].setAttribute('class','contentBtn_2');

let contentBtn_2 = document.getElementsByClassName('contentBtn_2')
contentBtn_2[i].innerHTML = '猜词版'


arrPlyed[1].setAttribute('class','palyed_text');

let playedElementGet_2 = document.getElementsByClassName('plalyed_text');
mainContent[i].appendChild(arrPlyed[1])
arrPlyed[1].appendChild(arrPlyedText[1]);

mainContent[i].appendChild(arrBtn[2]);
arrBtn[2].setAttribute('class','contentBtn_3')

let contentBtn_3 = document.getElementsByClassName('contentBtn_3')
contentBtn_3[i].innerHTML='高级难度版'


arrPlyed[2].setAttribute('class','palyed_text');

let playedElementGet_3 = document.getElementsByClassName('plalyed_text');
mainContent[i].appendChild(arrPlyed[2])
arrPlyed[2].appendChild(arrPlyedText[2]);
// 定义三角形
var triangle = [];
for(let i =0; i< 2; i++){
    let triangle_1 = document.createElement('div');
    triangle.push(triangle_1)
}
console.log(triangle)

triangle[0].setAttribute('class','triangle_1')
triangle[1].setAttribute('class','triangle_2')
mainContent[i].appendChild(triangle[0]);
mainContent[i].appendChild(triangle[1]);

contentBtn_1[i].onclick =function(){
    window.location.href="../set_game/index.html";
}



sessionStorage.removeItem('death_role')
sessionStorage.removeItem('menu_role')






