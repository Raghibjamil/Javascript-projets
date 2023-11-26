const note_container=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");

// let notes=document.querySelectorAll(".input-box");


createBtn.addEventListener("click",(e)=>{
    let inputBox=document.createElement("p");
    let div_container=document.createElement("div");
    let img=document.createElement("img");
    inputBox.className="input-box";
    div_container.className="child-div";
    inputBox.setAttribute("contenteditable","true");
    img.src="./Image/delete.png";
    // note_container.appendChild(inputBox).appendChild(img);
    // note_container.appendChild(div_container).appendChild(inputBox);
    note_container.appendChild(div_container);
    div_container.appendChild(inputBox);
    div_container.appendChild(img);
    

    if(e.target.tagName === "BUTTON"){
        updates();
    }
  
})

note_container.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updates();
    }
    else if(e.target.tagName === "P"){
         let notes=document.querySelectorAll(".input-box");
        notes.forEach((n)=>{
            n.onkeyup=function(){
                updates();
            }

        })
    }
    
    
    
})

document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
       
    }
})
function updates(){
    localStorage.setItem("note",note_container.innerHTML);
    
}
function showNotes(){
    note_container.innerHTML=localStorage.getItem("note");
}
showNotes()