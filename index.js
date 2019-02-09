function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  const first=  document.getElementById("nested");
  return first.target;
 
}
function increaseRankBy(n){
  const lis= document.getElementById("app")
  .querySelectorAll('ul.ranked-list');
  for (let i=0; i<lis.length; i++){
    lis[i].innerHTML= (i + 1).toString();
  }
}
function deepestChild(){
  const main= document.querySelector('div#grand-node');
  const sec= main.children[main.length];
}