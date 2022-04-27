const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const element1 = document.getElementById('blur')

openModalButtons.forEach(span => {
  
    span.addEventListener('click', () => {
      const modal = document.querySelector(span.dataset.modalTarget)
       openModal(modal)
    })
  })
  

  

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.popup') 
      closeModal(modal)
    })
  })
  
  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    element1.style.filter = "blur(3px)"
  }


  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    element1.style.filter = "none"
  }


  const card = [];
  function addNew(){
      const newItem = document.getElementById('name').value;
      const tempCard = {
          taskname : newItem
          
      }
      card.push(tempCard);
      addCard();
      
      
      
      
  }

  function addCard(){
  const element=document.createElement("div")
  element.setAttribute("class","child")
  element.innerText=card[card.length-1].taskname
  

  const ExistingElement=document.getElementById("card-container")
  ExistingElement.appendChild(element)

  const line = document.createElement("hr")
  line.setAttribute('class', 'line')
  element.appendChild(line)

  const todoList =  document.createElement("div")
  todoList.setAttribute("id","items") 
  element.appendChild(todoList)




  const element2 = document.createElement("span")
  element2.setAttribute("data-modal-target1","#modal1")
  element2.setAttribute("id","open-modal")
  element.appendChild(element2)

  const element3 = document.createElement("i")
  element3.setAttribute("class","fa-solid fa-circle-plus")
  element2.appendChild(element3)


  const deleteCard = document.createElement("span")
  deleteCard.setAttribute("id","delCard")
  deleteCard.setAttribute("data-modal-target2","#modal2")
  element.appendChild(deleteCard)
  

  const deleteBtn = document.createElement("i")
  deleteBtn.setAttribute("class","fa-solid fa-trash")
  deleteCard.appendChild(deleteBtn)



  const open = document.querySelectorAll("[data-modal-target1]")
  const close = document.querySelectorAll("[data-close-button1]")
  

  open.forEach(span => {
    span.addEventListener('click', () => {
      const modal1 = document.querySelector(span.dataset.modalTarget1)
       openModal1(modal1)
       
    })
  })


  function openModal1(modal1) {
    if (modal1 == null) return
    modal1.classList.add('active') 
    element1.style.filter = "blur(3px)"
  }

  close.forEach(button => {
    button.addEventListener('click', () => {
      const modal1 = button.closest('.popup2')
      closeModal1(modal1)
    })
  })

  function closeModal1(modal1) {
    if (modal1 == null) return
    modal1.classList.remove('active')
    element1.style.filter = "none"
  }
  
    
  deleteBtn.addEventListener("click",() => {
    element.remove()
  })
  



}


// -----------------------------------




function addNew2(){
  const task = []
  const newTask = document.getElementById("name2").value
            const tempTask = {
              taskList : newTask
            }
              task.push(tempTask)
              document.querySelector("#items").innerHTML += ` 
             <div class="task">
                 <span id="taskname">
                 ${task[task.length-1].taskList} 
                 
                 </span>
                 <button class="delete">
                      mark done
                 </button>
              </div>`
              var tasks = document.querySelectorAll(".task");
           for(var i=0; i<tasks.length; i++){
               tasks[i].onclick = function(){
                 this.classList.toggle('completed');
                 
                  }
            }
            

       document.querySelector("#name2").value = ""

}



    






