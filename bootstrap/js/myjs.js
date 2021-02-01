const msg1 = document.getElementById("skill_msg1");
const msg2 = document.getElementById("skill_msg2");
const msg3 = document.getElementById("skill_msg3");

function clickEvent1(per, msg) {
  msg1.innerHTML="";
  msg1.innerHTML = `<p class="click_msg">${per}</p>${msg}`;
}

function clickEvent2(per, msg) {
  msg2.innerHTML="";
  msg2.innerHTML = `<p class="click_msg">${per}</p>${msg}`;
}

function clickEvent3(per, msg) {
  msg3.innerHTML="";
  msg3.innerHTML = `<p class="click_msg">${per}</p>${msg}`;
}

// icon
function moseoverChange(iconnmae, stats){
  const icon = document.getElementById(iconnmae);
  icon.innerHTML = "";
  icon.innerHTML = `${stats}`;
}
function moseoutJava(iconnmae){
  const icon = document.getElementById(iconnmae);
  icon.innerHTML = "";
  icon.innerHTML = `<i class="fab fa-java fa-2x"></i>`;
}

function moseoutDB(iconnmae){
  const icon = document.getElementById(iconnmae);
  icon.innerHTML = "";
  icon.innerHTML = `<i class="fas fa-database fa-2x"></i>`;
}

function moseoutHTML(iconnmae){
  const icon = document.getElementById(iconnmae);
  icon.innerHTML = "";
  icon.innerHTML = `<i class="fab fa-html5 fa-2x"></i>`;
}

function moseoutCSS(iconnmae){
  const icon = document.getElementById(iconnmae);
  icon.innerHTML = "";
  icon.innerHTML = `<i class="fab fa-css3 fa-2x"></i>`;
}

function moseoutJS(iconnmae){
  const icon = document.getElementById(iconnmae);
  icon.innerHTML = "";
  icon.innerHTML = `<i class="fab fa-js fa-2x"></i>`;
}

function moseoutBS(iconnmae){
  const icon = document.getElementById(iconnmae);
  icon.innerHTML = "";
  icon.innerHTML = `<i class="fab fa-bootstrap fa-2x"></i>`;
}

function moseoutJSP(iconnmae){
  const icon = document.getElementById(iconnmae);
  icon.innerHTML = "";
  icon.innerHTML = `<i class="fab fa-java fa-2x"></i>`;
}


// 계산기 
const result = document.getElementById("result");
const temp = document.getElementById("temp");

// 숫자 버튼 이벤트
function numBtnClick(num){
    reg = temp.value.charAt(temp.value.length-1);
    if (reg == " ") {
        result.innerHTML = "";
    
    } else if (reg == "="){
        temp.innerHTML = "";
        result.innerHTML = "";
    } 
    
    temp.innerHTML += `${num}`;
    result.innerHTML += `${num}`;
}

// 기호 버튼 이벤트
operBtnClick = (op) => { 
    reg = temp.value.charAt(temp.value.length-2);
    eqreg = temp.value.charAt(temp.value.length-1);
    if(temp.value === "" || reg == "+" || reg == "-" || reg == "/" || reg == "*"){
        alert("잘못된 입력입니다.")
        
    } else if(eqreg == "="){
        temp.innerHTML = result.value + ` ${op} `;

    } else {
        temp.innerHTML += ` ${op} `;
    }
}

// 취소 버튼 이벤트
function cancelBtnClick() {
    result.innerHTML = "";
    temp.innerHTML = "";
}

// 계산 버튼 이벤트
function equlBtnClick() {
    reg = temp.value.charAt(temp.value.length-1);
    if(temp.value === "" || reg === " " || reg === "=") {
        alert("잘못된 입력입니다.")
    } else{
        temp.innerHTML += " =";
        result.innerHTML = total();
    }
}

// 결과 값
function total() {
    tempV = temp.value;
    resultV = tempV.split(" ");

    while (resultV.length !== 2){
        if (resultV.includes('*') && resultV.includes('/')){
            if (resultV.indexOf('*') < resultV.indexOf('/')) {
                calc(resultV, '*');

            } else {
                calc(resultV, '/');
            }

        } else if (resultV.includes('*')) {
            calc(resultV, '*');

        } else if (resultV.includes('/')) {
            calc(resultV, '/');

        } else if (resultV.includes('+')) {
            calc(resultV, '+');

        } else if (resultV.includes('-')) {
            calc(resultV, '-');
        }
    }
    return resultV[0];
}

 // 계산 함수
function calc(arr, cont) {
    index = arr.indexOf(cont);
    n1 = index - 1;
    n2 = index + 1;
    midresult = 0;
    
    if (cont === '+'){
        midresult = parseInt(arr[n1]) + parseInt(arr[n2]);

    } else if (cont === '-'){
        midresult = parseInt(arr[n1]) - parseInt(arr[n2]);

    } else if (cont === '*'){
        midresult = parseInt(arr[n1]) * parseInt(arr[n2]);

    } else if (cont === '/'){
        midresult = parseInt(arr[n1]) / parseInt(arr[n2]);
    }
    
    arr.splice(n1, 3, midresult);
}



// scrolltop 0 935 2107

const h = window.pageYOffset;

const intro = document.getElementById("intro");
const skill = document.getElementById("skill");
const project = document.getElementById("project");
const contact = document.getElementById("contact");

const nav_intro = document.getElementById("nav_intro");
const nav_skill = document.getElementById("nav_skill");
const nav_project = document.getElementById("nav_project");
const nav_contact = document.getElementById("nav_contact");

function pageScroll() {
  var page_yloca = window.pageYOffset;
  var skill_yloca = skill.offsetTop;
  var project_yloca = project.offsetTop;
  var contact_yloca = contact.offsetTop;

  if (page_yloca < skill_yloca - 150){
    nav_intro.style.color = 'gold';
    nav_skill.style.color = 'rgb(129, 128, 128)';
    nav_project.style.color = 'rgb(129, 128, 128)';
    nav_contact.style.color = 'rgb(129, 128, 128)';

  } else if (page_yloca < project_yloca - 150) {
    nav_intro.style.color = 'rgb(129, 128, 128)';
    nav_skill.style.color = 'gold';
    nav_project.style.color = 'rgb(129, 128, 128)';
    nav_contact.style.color = 'rgb(129, 128, 128)';

  } else if( page_yloca < contact_yloca - 750){
    nav_intro.style.color = 'rgb(129, 128, 128)';
    nav_skill.style.color = 'rgb(129, 128, 128)';
    nav_project.style.color = 'gold';
    nav_contact.style.color = 'rgb(129, 128, 128)';

  } else {
    nav_intro.style.color = 'rgb(129, 128, 128)';
    nav_skill.style.color = 'rgb(129, 128, 128)';
    nav_project.style.color = 'rgb(129, 128, 128)';
    nav_contact.style.color = 'gold';

  }
}

function mouseOutEvent() {
  var page_yloca = window.pageYOffset;
  var skill_yloca = skill.offsetTop;
  var project_yloca = project.offsetTop;

  if (page_yloca < skill_yloca - 150){
    nav_intro.style.color = 'gold';

  } else if (page_yloca < project_yloca - 150) {
    nav_skill.style.color = 'gold';

  } else {
    nav_project.style.color = 'gold';
  }
}

function mouseMove(element) {
  
  element.addEventListener("mouseover", function(){
    // mouseOutEvent();
    var page_yloca = window.pageYOffset;
    var skill_yloca = skill.offsetTop;
    var project_yloca = project.offsetTop;
    
    element.style.color = 'lightgray';
  })
  
  element.addEventListener("mouseout", function(){
    pageScroll();
  })
}


window.addEventListener("scroll", function ()  {  
  pageScroll();
}); 

window.addEventListener("load", function ()  {  
  pageScroll();
}); 

mouseMove(nav_intro);
mouseMove(nav_skill);
mouseMove(nav_project);
mouseMove(nav_contact);

// skill.addEventListener("pageshow", function(){
//   alert("로딩됬다!")
// })

