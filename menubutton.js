const menuButton =document.getElementById("menuButton");
const menu = document.getElementById("menu");

// function buttonClick(){
//     menu.classList.add("active");
// }

// document.addEventListener("click", buttonClick)

// menu.addEventListener("click", function(event){
//     event.stopPropagation();
// })

// document.addEventListener("click", function () {
//     menu.classList.remove("active");
// });



document.addEventListener("DOMContentLoaded", function () {

    // メニュー表示
    menuButton.addEventListener("click", function (event) {
        menu.style.display = "block";
        menu.classList.add("active");

        // フェードインアニメーションを設定
        menu.style.animationName = "fade-in";
        menu.style.animationDuration = "0.5s";
        menu.style.animationTimingFunction = "ease-out";
        event.stopPropagation(); // イベントが親に伝播しないように
    });

    // メニュー内をクリックしても閉じないようにする
    menu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // ドキュメント全体をクリックしたとき → メニューを非表示
    document.addEventListener("click", function () {
        if(menu.classList.contains("active")){
            menu.style.animationName = "fade-out";
            menu.style.animationDuration = "0.5s";
            menu.style.animationTimingFunction = "ease-out";
    
            function handleFadeOut(){
                menu.classList.remove("active");
                menu.style.display="none";
                menu.removeEventListener("animationend", handleFadeOut); //重複防止のため、使ったら削除する
            }


            menu.addEventListener("animationend", handleFadeOut);
        }
    });
});


