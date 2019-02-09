function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector("#nested .target");
  }
function increaseRankBy(n){
  const lis= document.getElementById("app")
  .querySelectorAll('ul.ranked-list');
  for (let i=0; i<lis.length; i++){
    lis[i].innerHTML= (i + 1).toString();
  }
}
function deepestChild(){
  var main= document.querySelector('#grand-node');
  while(main.children.length !== 0){
    main = main.children[0];
  }
  return main;
  
}