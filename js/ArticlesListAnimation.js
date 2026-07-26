// ArticlesListAnimation.js

const setItemActive = function(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
};

const observer = new IntersectionObserver(setItemActive, { threshold: 0.1 });

// 汎用関数として export（カードなど動的要素に使う用）
export function observeFadeIn(elements) {
    elements.forEach(el => observer.observe(el));
}

// 静的要素（.textAnimation）には自動で監視を開始
document.addEventListener("DOMContentLoaded", () => {
    const textAnimations = document.querySelectorAll(".textAnimation");
    textAnimations.forEach(el => observer.observe(el));
});
