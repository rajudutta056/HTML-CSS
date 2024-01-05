const contain = document.getElementsByClassName("container");
const card = document.querySelector(".card");

const dragInfo = {
    source : null,
    currElement : null
}
function onDrag(event){
 dragInfo.source = event.target.getAttribute("data-contain");
 dragInfo.currElement = event.target;
}

const ondragOver = (e) => {
  let dropinContainer = e.currentTarget;
  if(dropinContainer.id === dragInfo.source) {
    return
  }else{
    e.preventDefault();
  }
}

const onDrop = (e) => {
const card = dragInfo.currElement;
const dropZone = e.currentTarget;

card.setAttribute("data-contain" , dropZone.id);
dropZone.appendChild(card);
}

for(let i =0; i< contain.length; i++){
    contain[i].addEventListener("dragover",ondragOver);
    contain[i].addEventListener("drop",onDrop);
}