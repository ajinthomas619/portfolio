
function validate(){
    var name=document.getElementById("namex").value.trim();
    var mail=document.getElementById("email").value.trim();
    var projet=document.getElementById("project").value.trim();
    var contactno=document.getElementById("number").value.trim();
    var message=document.getElementById("message").value;

 if(name==""){
alert("the field must not be blank");
    document.form.name.focus();
    return false;
 }

 if(mail==""){
    alert("please enter your email");
    document.form.mail.focus();
    return false;
 }

 if(projet==""){
    alert("mention your project");
    document.form.projet.focus();
    return false;
 }
 if(message ==""){
    alert("the field must not be blank");
        document.form.message.focus();
        return false;
     }
     if(contactno ==""){
        alert("please enter a  contact no");
            document.form.contactno.focus();
            return false;
         }
         else if(contactno.length>10||contactno.length<10){
            alert("please enter a valid contact no");
            return false;
         }
        
    
 return true;
 
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyg7zqZeYQSos6hECPNkeLcOt_FQ3mcFqR9CYBpsyDO8gN9SqKroGKHwXn4m7JYvYWswg/exec'
const form = document.getElementById("form");
const spinner = document.getElementById("spinner");
//const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  if (validate()) {
    var parent=spinner.parentElement;
    parent.classList.remove("hide");
    parent.classList.add("show");
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        //msg.innerHTML = "Sent Successfully"
        parent.classList.remove("show");
        parent.classList.add("hide");
        alert("Sent Successfully");
        
        // setTimeout(function () {
        //   msg.innerHTML = ""
        // }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  }
})