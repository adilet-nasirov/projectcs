const div = document.querySelectorAll(".box");
console.log(div);
const large=document.querySelector('#large');

for (let i = 0; i < div.length; i++) {
  div[i].style.backgroundColor = "#888";
  div[i].style.border = "15px solid rgb(54, 52, 52)";
  div[i].style.height = "100px";
  div[i].style.textAlign = "center";
  div[i].style.fontSize = "80px";
  div[i].style.color = "white";
  div[i].style.borderRadius = "20px";
//   div[i].style.display = "flex";
//   div[i].style.alignItems = "center";
//   div[i].style.justifyContent = "center";
}


for (let i = 0; i < div.length - 1; i++) {
  div[i].style.width = "200px";
  div[i].style.display='inline-block'
}

large.style.width='672px'
