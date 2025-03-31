function addTask(){
    const taskInput=document.getElementById("taskInput");
    const taskList=document.getElementById("taskList");

    const taskText = taskInput.value.trim();

    if(taskText===''){
        alert("Please enter a task!");
        return;
    }
    const taskIteam=document.createElement("li");
    taskIteam.textContent=taskText;
    taskIteam.style.cssText="display: flex; justify-content: space-between; align-items: center; padding: 10px 15px; margin: 10px 0; background-color: #2e2b2b; border-radius: 10px; color: white;border:1px solid #E5E7EB; word-wrap: break-word;";

    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.style.cssText="background: linear-gradient(90deg, #FF416C, #FF4B2B); color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-weight: bold; margin-left: 10px;";

    deleteButton.addEventListener("click",()=>{
        taskIteam.remove();
    })

    taskIteam.appendChild(deleteButton);
    taskList.appendChild(taskIteam);
    taskInput.value=" ";
}

document.getElementById("taskInput").addEventListener("keydown" , function (event){
    if(event.key==="Enter"){
        event.preventDefault();
        addTask();
    }
})

