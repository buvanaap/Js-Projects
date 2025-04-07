const inputbox=document.getElementById('input-box');
const submitbtn=document.getElementById('submit-btn');
const todobox=document.querySelector('.todobox'); 
// local storage,cookies
let todos=[];
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo =>addtodo(todo))
}
submitbtn.addEventListener('click',()=>{
    todos.push(inputbox.value);
    console.log(todos)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(inputbox.value);
    inputbox.value='';
})
function addtodo(todo){
      let para=document.createElement("p");
      para.innerText =todo
      todobox.appendChild(para);
      
      para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
      })
      para.addEventListener('dblclick',()=>{
       todobox.removeChild(para);
       remove(todo)
      })
}
function remove(todo){
    let index=todos.indexOf(todo)
    if(index>-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}
  