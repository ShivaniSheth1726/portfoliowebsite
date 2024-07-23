const form = document.querySelector("form");
const fullname = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone") 
const subject = document.getElementById("subject") 
const message = document.getElementById("message")
function reset(){
    document.getElementById("form").reset();
}

function sendEmail(){
    

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shethshivani1726@gmail.com",
        Password : "8103BB05F030EE84BEB5E8D6F1CEF88613F1",
        To : 'shethshivani1726@gmail.com',
        From : 'shethshivani1726@gmail.com',
        Subject : subject.value,
        Body : "Full Name: "+document.getElementById("name").value
        + "<br> Email: " +document.getElementById("email").value
        +"<br> Contact Number: " +document.getElementById("phone").value
        +"<br> Subject: " +document.getElementById("subject").value
        +"<br> Message: " +document.getElementById("message").value
    }).then(
    message => alert("Message Sent Successfully!")
    
    
    );
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    sendEmail();
    reset();
});