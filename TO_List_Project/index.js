const inputBox=document.getElementById("input-Box");
const listcontainer=document.getElementById("list-container");
const addTask=document.getElementById('AddTask');


inputBox.addEventListener("keyup",(e)=>{
    e.preventDefault();
  
    if(e.keyCode === 13){
        addTask.click();
    }
})

addTask.addEventListener('click',(e)=>{
    if(inputBox.value== ''){
        alert("you must write something!!")
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
        
      
    }
    inputBox.value='';
    saveData();
    

},false)

/* if you want to use onclick event  inside the tag  then we can use this function as a click event ....* */

// function addTask(){
//     if(inputBox.value== ''){
//         alert("you must write something!!")
//     }else{
//         let li=document.createElement("li");
//         li.innerHTML=inputBox.value;
//         listcontainer.appendChild(li);
//         let span=document.createElement('span');
//         span.innerHTML='\u00d7';
//         li.appendChild(span);
//         const past_textvalue=inputBox.value;
      
//     }
//     inputBox.value='';

// }



listcontainer.addEventListener("click",(e)=>{
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked');
        saveData();

    }else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        saveData();

    }
},false);
function saveData(){
    localStorage.setItem('data',listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem('data');
}
showTask();