const form=document.querySelector('#form')
const list=document.querySelector('#list')
const input=document.querySelector("#input")

class Storeg{
    static localstorege(arr){
        let storeg=localStorage.setItem("todo",JSON.stringify(arr))
        return storeg
   }
 }
  
  let todoarr=[];
 form.addEventListener("submit",(e)=>{
      e.preventDefault();
    let id=Math.random()*1000000
    const todo= new Todo(id,input.value)
    todoarr=[...todoarr,todo]
    UI.displaydata();
    UI.clearinput();
    UI.removetodo();
    Storeg.localstorege(todoarr)
    
 })

 class Todo{
    constructor(id,todo){
        this.id=id;
        this.todo=todo;
    }
 }

 class UI{
     static displaydata(){
        let displaydata=todoarr.map((item)=>{
            return`
            <div class="todo">
            <p>${item.todo}</p>
            <span class="remove">🗑️</span>
            </div>
            `
           
        })

        list.innerHTML=(displaydata).join(" ")
        
        
    }

    static clearinput(){
        input.value=" "
    }
    
    static removetodo(){
          list.addEventListener("click",(e)=>{
            if(e.target.classList.contains("remove")){
                e.target.parentElement.remove()
            }
          })
    }
 }

 window.addEventListener('DOMContentLoaded',()=>{
    UI.displaydata();
 })

  