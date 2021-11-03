 var btn = document.getElementById("phantom");
 var screenWidth = window.innerWidth;
 var screenHeight = window.innerHeight;

 function hideLoadingDiv() {
    setTimeout(function(){
      document.getElementById('phantom').classList.add('hidden');
    },800)
  }

 btn.style.top = Math.floor((Math.random() * screenHeight) - 1) + "px";
 btn.style.left = Math.floor((Math.random() * screenWidth) - 1) + "px";

 let count = 1;
 function myFunction() {
   if (count < 100) {
     count++;
   }
   else {
     document.getElementById("passcode").innerHTML = "passYa";
   }
 };