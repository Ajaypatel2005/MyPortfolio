let cvbtn = document.getElementById("cvbtn");
let submit = document.getElementById("submit");
let bar = document.getElementById("bar");
cvbtn.addEventListener("click",()=>{
    alert("Downlod Successfully");
})

submit.addEventListener("click",()=>{
   let email = document.getElementById("Email");
   let pass = document.getElementById("pass");
   let mgs = document.getElementById("mgs");

   if(email.value == "" && pass.value == ""){
    alert("Fill the Detail")
   }else{
    alert(" Successfully Logged In")
   }
})

let ul = document.querySelector("ul");
bar.addEventListener("click",()=>{
    ul.classList.toggle("showData");
    if(ul.className == "showData"){
        bar.className= "fa-solid fa-xmark"
    }else{
        bar.className= "fa-solid fa-marks"
    }
})
var typed = new Typed('#animate', {
    strings: ['Web Developer', 'Software Developer','YouTuber','Software Engineer','Video Editor' ],
    typeSpeed: 50,
    loop:true
  });
