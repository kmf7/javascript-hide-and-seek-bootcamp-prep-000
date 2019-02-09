function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  const first=  document.querySelector("#nested");
  const second= first.nestedTarget;
  return second;
}
function increaseRankBy(n){
  const lis= document.getElementById("app")
  .querySelectorAll('ul.ranked-list');
  for (let i=0; i<lis.length; i++){
    lis[i].innerHTML= (i + 1).toString();
  }
}
function deepestChild(){
  
}