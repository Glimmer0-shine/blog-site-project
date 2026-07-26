
const RecentArticlesBox = document.querySelector('.RecentArticlesBox');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const textGetElements = document.querySelectorAll(".textAnimation");


let options = {
    threshold: 0.1
};

const setItemActive = function(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");

            // 子要素を取得して順に表示
            const children = entry.target.querySelectorAll('.child');
            children.forEach((child, index) => {
                // 順番に遅延表示（例：100msずつ遅らせる）
                setTimeout(() => {
                    child.classList.add("active");
                }, index * 1000);
            });

        } else {
            entry.target.classList.remove("active");

            // 子要素も非表示に
            const children = entry.target.querySelectorAll('.child');
            children.forEach((child) => {
                child.classList.remove("active");
            });
        }
    });
};

let observer = new IntersectionObserver(setItemActive, options);

// box1, box2, box3 すべてに監視を設定
textGetElements.forEach((el) => {
    observer.observe(el);
});


observer.observe(box1);
observer.observe(box2);
observer.observe(box3);


// const box1ID = document.getElementById('box1ID');

// const setItemActive = function(entries) {
//     console.log(entries);
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//             entry.target.classList.add("active");
//         } else {
//             entry.target.classList.remove("active");
//         }
//     });
// };

// const hasActiveClass = box1ID.classList.contains('active');

// const ActiveConfirmation = function(){
//     if(hasActiveClass){
//         RecentArticlesBox.classList.add("active");
//     } else {
//         RecentArticlesBox.classList.remove("active");
//     }
// } ;


// let options = {
//     threshold: 0.1
// };

// let observer = new IntersectionObserver(setItemActive, options);

// textGetElements.forEach((el) => {
//     observer.observe(el);
// });

// observer.observe(box1);
// observer.observe(box2);
// observer.observe(box3);



