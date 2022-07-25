//parentElement
var itemList = document.querySelector('#items');



//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#0000CD';
//console.log(itemList.parentElement.parentElement.parentElement);

//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'hello';

//lastChild
//console.log(itemList.lastChild);

//console.log(itemList.children);



//firstchild
//console.log(itemList.firstChild);
//first element child
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'hello1';

//nextSibling

//console.log(itemList.nextSibling);
//nextElementSibling


//console.log(itemList.nextElementSibling);
//previoussibling

//console.log(itemList.previousSibling);

//previousElementSibling

//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

//createelement

var divnew = document.createElement('div');
divnew.className = 'hai';
divnew.id = 'hai1';
divnew.setAttribute =('title','Hello div');


//create textnode
var divtext = document.createTextNode('Hello WORLD');
divnew.appendChild(divtext);
console.log(divnew);

var li =document.createElement('li');
li.textContent='helo';
items.insertBefore(li,items.firstElementChild);







