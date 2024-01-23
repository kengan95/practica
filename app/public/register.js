/*const mensajeError = document.getElementsByClassName("error")[0];

document.getElementById("register-form").addEventListener("submit",async(e)=>{
  e.preventDefault();
  console.log(e.target.children.user.value)
  const res = await fetch("http://localhost:4000/api/register",{
    method:"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      user: e.target.children.user.value,
      email: e.target.children.email.value,
      password: e.target.children.password.value
    })
  });
  if(!res.ok) return mensajeError.classList.toggle("escondido",false);
  const resJson = await res.json();
  if(resJson.redirect){
    window.location.href = resJson.redirect;
  }
})*/


const mensaje=document.querySelector('.error')[0] 

document.getElementById('form-container').addEventListener('submit',async(e)=>{

  e.preventDefault() 

  const response=await fetch('http://localhost:4000/api/register',{ 
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({
      user:e.target.chidren.user.value,
      password:e.target.password.value

    }) 
    
  }) 


  if(!response.ok) return mensaje.classList.toggle('escondido',false) 

  const data=response.json() 

  if(data.redirect){
    window.location.href=data.redirect
  }  

  
})