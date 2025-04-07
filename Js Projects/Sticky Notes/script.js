const container=document.querySelector(".notes-container");
const addNoteButton=document.querySelector(".add-note");

addNoteButton.addEventListener("click",()=>{
    addNewNote("Write your note here...");
})
function addNewNote(content){
    const note=document.createElement('div')
    note.classList.add("note");
    note.style.backgroundColor=getRandomColor();
    note.innerHTML=`
    <textarea>${content}</textarea>
    <button class="delete-note">X</button>
    `;
    const textarea=note.querySelector('textarea');
    const deleteButton=note.querySelector('.delete-note');
    textarea.addEventListener('focus',()=>{
        if(textarea.value === "Write your note here..."){
            textarea.value="";
        }
    })
   deleteButton.addEventListener('click',()=>{
    note.remove();
   })

    container.appendChild(note);
}

function getRandomColor(){
    const colors=["#FF0000","#00FF00","#0000FF","#FFFF00","#00FFFF","#FF00FF"]
    return colors[Math.floor(Math.random()*colors.length)]
}