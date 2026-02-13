const words=["Luxury Vision","Sunglasses","Blue Cut","Aviators","Kids Frames"];
let i=0;

setInterval(()=>{
i=(i+1)%words.length;
document.getElementById("changing-text").textContent=words[i];
},2000);

let slides=document.querySelectorAll(".slide");
let index=0;

setInterval(()=>{
slides[index].classList.remove("active");
index=(index+1)%slides.length;
slides[index].classList.add("active");
},3000);
