let Textarea = document.getElementById("Textarea");
let TotalCharacters =document.getElementById("span1");
let RemainingNumber = document.getElementById("span2");

Textarea.addEventListener("keyup",()=>{
    TotalCharacters.innerText = Textarea.value.length;
    RemainingNumber.innerText = Textarea.getAttribute("maxLength")-Textarea.value.length;
    
})