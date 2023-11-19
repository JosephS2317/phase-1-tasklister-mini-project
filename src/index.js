document.addEventListener("DOMContentLoaded", () => {
 document.querySelector('form').addEventListener('submit', (e) =>{
    (e).preventDefault()
   handleTask(e.target.new_task_description.value)
 
  })
})

function handleTask(task){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent = 'x'
  btn.addEventListener('click', handleDelete)
  p.textContent = task
  p.appendChild(btn)
  console.log(p)

  document.querySelector('#tasks').appendChild(p)
 
}

function handleDelete(e){
  e.target.parentNode.remove()
}
