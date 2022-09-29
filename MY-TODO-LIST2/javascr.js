window.addEventListener('load',()=>{
    let userInput = document.querySelector("#input-text");
    let form = document.querySelector("#input-form");
    let tasksDiv = document.querySelector(".tasks");
    // let addBtn = document.getElementById("addButton");
    // addBtn.addEventListener('submit',()=>{
    //     let task = userInput.value;
    //     console.log(task);
    // })
 
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task = userInput.value;
        if(!task){
            alert("please enter task");
            return;
        }
        let el_Div = document.createElement("div");
        el_Div.classList.add("task");
       

        let elInput=document.createElement("input");
        elInput.classList.add("list-item");
        elInput.type="text";
        elInput.value=task;
        el_Div.appendChild(elInput);

        let actionButtonsDiv = document.createElement("div");
        actionButtonsDiv.classList.add("action-btn");
      


        let editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.innerHTML="Edit";
        actionButtonsDiv.appendChild(editBtn);


        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.innerHTML="Delete";
        actionButtonsDiv.appendChild(deleteBtn);
        el_Div.appendChild(actionButtonsDiv);
        tasksDiv.appendChild(el_Div);
        
       
        userInput.value="";
    })
    
})