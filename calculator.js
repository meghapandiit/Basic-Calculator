let string="";
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
  if(e.target.innerHTML=="="){
    string=eval(string);
    document.querySelector('input').value=string;
  }
  else if(e.target.innerHTML=="CLR"){
    string= "";
    document.querySelector('input').value=string;
  }
  else if(e.target.innerHTML=="DLT"){
    string=string.slice(0,-1);
    document.querySelector('input').value=string;
  }
  else if(e.target.innerHTML=="Sqrt"){
    string=Math.sqrt(string);
    document.querySelector('input').value=string;
  }
  else if(e.target.innerHTML=="Log"){
    string=Math.log(string);
    document.querySelector('input').value=string;
  }
  else{
    console.log(e.target)
    string=string+ e.target.innerHTML;
    document.querySelector('input').value=string;
  }
  
})
})
