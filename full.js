var h1=document.querySelector("#demo");
function changeContent(){
  document.querySelector('#demo').innerHTML="Hello by mayank";
  h1.style.fontSize="105px";
}
var h2span=document.querySelector("#gmae");
function hello(){
    h2span.style.fontSize="155px";
}
var input=document.querySelector("input");
var p=document.querySelector("#p");
input.addEventListener("change",function(){
  p.textContent=input.value;
  if(input.value==5){
    p.classList.add("winner");
}
});


var check=document.querySelector("#check");
check.addEventListener("click",function(){
alert(document.querySelectorAll("button").length);
});
var lis=document.querySelectorAll(".lis");
for(var i=0;i<lis.length;i++){
lis[i].addEventListener("mouseover",function () {
  this.classList.toggle("selected");
});
}
