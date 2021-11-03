 var btn = document.getElementById('phantom');
 // 取得畫面長寬
 var screenWidth = window.innerWidth;
 var screenHeight = window.innerHeight;
// 按鈕設定 800/ 0.8s 後消失
 function hideLoadingDiv() {
    setTimeout(function(){
      document.getElementById('phantom').classList.add('hidden');
    },800)
  }
// 隨機長寬訂定按鈕位置
 btn.style.top = Math.floor((Math.random() * screenHeight) - 1) + "px";
 btn.style.left = Math.floor((Math.random() * screenWidth) - 1) + "px";
// 點擊100下取得密碼
 let count = 1;
 function myFunction() {
   if (count < 100) {
     count++;
   }
   else {
     document.getElementById("passcode").innerHTML = "passYa12!#";
   }
 };