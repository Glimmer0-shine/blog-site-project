import { observeFadeIn } from "./ArticlesListAnimation.js";

const container = document.querySelector(".container");
const pagination = document.querySelector(".pagination");
const searchInput = document.getElementById("searchInput");
const searchButton =document.getElementById("searchButton");

let cards = [];
let filteredCards = [];
let currentPage = 1;
const cardsPerPage = 10;

//検索機能の処理
searchButton.onclick = () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const mode = document.querySelector('input[name="mode"]:checked').value;

    if (keyword === "") {
        filteredCards = cards; //検索キーワード入れなかった場合の全体表示のため
    } else {
        const keywords = keyword.split(/\s+/).filter(k => k.length > 0); //スペース(空白)で区切り、入力されたキーワードを配列化

        filteredCards = cards.filter(card => {
            const title = card.title.toLowerCase();
            const tags = Array.isArray(card.tags)?card.tags.map(tag => tag.toLowerCase()) : [];
            const matchResults = keywords.map(kw => {
                const inTitle = title.includes(kw);
                const inTags = tags.some(tag => tag.includes(kw));

                return inTitle || inTags;
            });

            if (mode === "or"){
                return matchResults.some(match => match);
            } else {
                return matchResults.every(match => match);
            }
        });
    }

    currentPage = 1;
    renderArticleList();
};


function renderArticleList(){
    container.innerHTML = "";

    const start = (currentPage - 1)*cardsPerPage;
    const end = start + cardsPerPage;
    const visibleCards = filteredCards.slice(start, end);

    if(visibleCards.length === 0){
        const message = document.createElement("div");
        message.textContent = "該当する記事はありません。";
        message.style.fontSize = "1.2rem";
        message.style.margin = "20px";
        container.appendChild(message);
        return; //このreturn必要？
    }


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
    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
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
        filteredCards = cards; //filteredCardsの初期設定。全部表示させる。
        renderArticleList();
    })
    .catch(err => {
        console.error("記事一覧の読み込みに失敗しました。", err)
    });   