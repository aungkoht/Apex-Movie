let img = 1;



function prev() {
   try {
         document.querySelector("#img" + img).style.display = "none";
   img--;
   if (img < 1) img = 3;
   document.querySelector("#img" + img).style.display = "inline"
   
   } catch (err) {
      console.log(err.message)
   }
}
function next() {
   try {
      document.querySelector("#img" + img).style.display = "none";
      img++;
      if (img > 3) img = 1;
      document.querySelector("#img" + img).style.display = "inline"
   } catch(err) {
      console.log(err.message)
   }
}
document.querySelector(".nextBtn").onclick = next;
document.querySelector(".prevBtn").onclick = prev;
setInterval(next, 4000);