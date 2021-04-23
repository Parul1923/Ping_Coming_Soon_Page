var message;
var erMessage;
function check(){
    erMessage=document.getElementById("error-text");
    erMessage.innerHTML="";
    message=document.getElementById("email").value;
    try{
        if(message===""){
            throw "Whoops! It looks like you forgot to add your email";
        }
        else
        if(ValidateEmail(message)){
           
        }
        else{
            throw "Please provide a valid email address";
        }
    }
    catch(err){
        document.getElementById("email").classList.add("pressed");
       
       erMessage.innerHTML=err;
    }
}
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
  
    return (false)
}

