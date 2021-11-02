 var btn = document.getElementById("btn");

 function hideLoadingDiv() {
    setTimeout(function(){
      document.getElementById('btn').classList.add('hidden');
    },2000)
  }

 btn.style.top = Math.floor((Math.random() * 800) + 1) + "px";
 btn.style.left = Math.floor((Math.random() * 800) + 1) + "px";

 let count = 1;
 function myFunction() {
   if (count < 4) {
     count++;
   }
   else {
     document.getElementById("passway").innerHTML = "passYa";
   }
 };