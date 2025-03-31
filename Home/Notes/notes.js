const noteInput=document.getElementById('noteInput');
const notesList=document.getElementById('notesList');

function addNote(){
    const noteText=noteInput.value.trim();
    if(noteText===""){
        alert("please write someting before saving!");
        return;
    }
    const noteIteam=document.createElement("div");
    noteIteam.className="note-item";
    const noteContent=document.createElement("p");
    noteContent.textContent=noteText;

    const deleteButton=document.createElement("button");
    deleteButton.textContent='Delete';
    deleteButton.className="delete-btn";

    deleteButton.onclick=()=>{
        notesList.removeChild(noteIteam);
    }
    noteIteam.appendChild(noteContent);
    noteIteam.appendChild(deleteButton);
    
    notesList.appendChild(noteIteam);
    noteInput.value="";
}

noteInput.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        addNote();
    }
});

