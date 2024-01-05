const btn = document.querySelector(".btn");
const txt = document.querySelector("#txt_1");
const container1 = document.querySelector("#todo");

const onClick = () => {
    btn.classList.add("hide");
    txt.classList.remove("hide");
    txt.focus();
}
const newIssue = (card) => {
 const issue = document.createElement("div");
 issue.innerText = card;
 issue.className = "card"
 issue.draggable= true;
 issue.setAttribute("data-contain", container1.id);
 issue.addEventListener("dragstart", onDrag);

 container1.append(issue);

 txt.classList.add("hide");
 btn.classList.remove("hide");
 txt.value = '';
 
}

const createIssue = (event) => {
    
 if(event.keyCode === 13){
    const value = txt.value;
    if(value === ''){
        alert("Please enter a issue");
    }else{
        newIssue(value);
    }
 }
}

btn.addEventListener("click", onClick);
txt.addEventListener("keyup", createIssue)