import { observeFadeIn } from "./ArticlesListAnimation.js";

const container = document.querySelector(".container");
const pagination = document.querySelector(".pagination");

let cards = [];
let currentPage = 1;
const cardsPerPage = 10;

function renderArticleList(){
    container.innerHTML = "";

    const start = (currentPage - 1)*cardsPerPage;
    const end = start + cardsPerPage;
    const visibleCards = cards.slice(start, end);

    for(let i=0; i<visibleCards.length; i++){
        //枠要素の追加
        const div = document.createElement("div");
        div.className = "card";

        const eachCard = visibleCards[i];
        
        //画像の追加
        const img =document.createElement("img");
        img.src = eachCard.img;
        // img.alt = card.title;
        img.alt = "画像準備中";
        img.className = "card-img"; //css調整できるように

        //記事タイトルの追加
        const title = document.createElement("div");
        title.textContent = eachCard.title;
        title.className = "card-title";
        div.onclick = () => location.href = eachCard.url;

        div.appendChild(img);
        div.appendChild(title);
        container.appendChild(div);
    };

    // カード要素を取得してアニメーションを適用
    const newCards = container.querySelectorAll(".card");
    observeFadeIn(newCards);
    
    renderPagination();
};

function renderPagination(){
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    pagination.innerHTML = "";

    //prevボタンの生成と設定
    const prev = document.createElement("button");
    prev.textContent = "←";
    prev.disabled = currentPage === 1; //currentPageが1になると非活性になる

    prev.onclick = () => {
        currentPage--;
        renderArticleList();
    };
    pagination.appendChild(prev);

    //間のページ番号の生成と設定
    for(let i = 1; i <= totalPages; i++){
        const btn = document.createElement("button");
        btn.textContent = i;
        if(i === currentPage){
            btn.classList.add("active")
        };

        btn.onclick = () => {
            currentPage = i;
            renderArticleList();
        }
        pagination.appendChild(btn);
    };

    //nextボタンの生成と設定
    const next = document.createElement("button");
    next.textContent = "→";
    next.disabled = currentPage === totalPages;
    next.onclick = () => {
        currentPage++;
        renderArticleList();
    };
    pagination.appendChild(next);
};

fetch("articles.json")
    .then(res => res.json())
    .then(data => {
        cards = data;
        renderArticleList();
    })
    .catch(err => {
        console.error("記事一覧の読み込みに失敗しました。", err)
    });   