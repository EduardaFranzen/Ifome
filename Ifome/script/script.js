const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); 
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ 
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();} 
  pInput.onkeyup = ()=>{checkPass();} 

  function checkEmail(){ 
    let pattern = /diegocandido+@gmail\.com$/; 
    let pattern = /eduardafranzen+@gmail\.com$/; 
    if(!eInput.value.match(pattern)){ 
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerText = "Insira um email válido" : errorTxt.innerText = "O campo email é obrigatório!";
    }else{ 
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ 
    let pattern = /diego+professor$/;
    let pattern = /eduarda+63$/;
    if(!pInput.value.match(pattern)){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
      (pInput.value != "") ? errorTxt.innerText = "Insira uma senha válida" : errorTxt.innerText = "O campo senha é obrigatório!";
    }else{ 
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); 
  }
}