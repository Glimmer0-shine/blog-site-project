// const box1 = document.querySelector(".box1");
const articleBox = document.getElementById("articleBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let cards = []; //空で初期化
let startIndex = 0;

function renderCards(){
    articleBox.innerHTML = "";
    const visibleCards = cards.slice(startIndex, startIndex+3); //slice(始, 終)
    visibleCards.forEach(card => {
        //枠要素の追加
        const div = document.createElement("div");
        div.className = "card";
        
        //画像の追加
        const img =document.createElement("img");
        img.src = card.img;
        // img.alt = card.title;
        img.alt = "画像準備中";
        img.className = "card-img"; //css調整できるように

        //記事タイトルの追加
        const title = document.createElement("div");
        title.textContent = card.title;
        title.className = "card-title";
        div.onclick = () => location.href = card.url;

        div.appendChild(img);
        div.appendChild(title);
        articleBox.appendChild(div);
    })
};

prevBtn.addEventListener("click", () =>{
    if(startIndex > 0){
        startIndex --;
        renderCards();
    }
});

nextBtn.addEventListener("click", () => {
    if(startIndex + 3 < cards.length){
        startIndex ++ ;
        renderCards();
    }
});

fetch("articles.json")
    .then(res => res.json())
    .then(data => {
        cards = data;
        renderCards();
    })
    .catch(err => {
        console.error("記事一覧の読み込みに失敗しました。", err)
    });