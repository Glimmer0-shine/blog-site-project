const box1=document.getElementsByClassName("box1")[0];

function updateSlidePosition1(){
    const rect1=box1.getBoundingClientRect(); //その時の要素の寸法と、そのビューポートに対する相対位置を取得
    const windowHeight1=window.innerHeight;
    const centerRatio1=(rect1.top+rect1.height/2)/windowHeight1; //要素の中心が画面のどこにあるかの比率

    const distanceFromCenter1=centerRatio1-0.5; //画面の中心で0、上側ならtopの値が小さくなるのでマイナス。範囲は-0.5≦distanceFromCenter≦0.5

    const maxTranslate1=-500;
    let translateX1=distanceFromCenter1*2*maxTranslate1; //×2を入れることで移動範囲が-1倍≦x≦1倍

    translateX1=Math.min(100,Math.max(maxTranslate1,translateX1));

    box1.style.transform=`translateX(${translateX1}px)`; //cssに適用する内容なのでクォーテーションで囲う
}

window.addEventListener("scroll", updateSlidePosition1); //スクロールしたときにアップデートされるように
window.addEventListener("resize", updateSlidePosition1); //画面のサイズが変わったときにアップデートされるように
window.addEventListener("load", updateSlidePosition1); //画面が開かれたときに状態の情報を取得できるように


const box2=document.getElementsByClassName("box2")[0];

function updateSlidePosition2(){
    const rect2=box2.getBoundingClientRect(); //その時の要素の寸法と、そのビューポートに対する相対位置を取得
    const windowHeight2=window.innerHeight;
    const centerRatio2=(rect2.top+rect2.height/2)/windowHeight2; //要素の中心が画面のどこにあるかの比率

    const distanceFromCenter2=centerRatio2-0.5; //画面の中心で0、上側ならtopの値が小さくなるのでマイナス。範囲は-0.5≦distanceFromCenter≦0.5

    const maxTranslate2=500;
    let translateX2=distanceFromCenter2*2*maxTranslate2; //×2を入れることで移動範囲が-1倍≦x≦1倍

    translateX2=Math.max(-100,Math.min(maxTranslate2,translateX2));

    box2.style.transform=`translateX(${translateX2}px)`; //cssに適用する内容なのでクォーテーションで囲う
}

window.addEventListener("scroll", updateSlidePosition2); //スクロールしたときにアップデートされるように
window.addEventListener("resize", updateSlidePosition2); //画面のサイズが変わったときにアップデートされるように
window.addEventListener("load", updateSlidePosition2); //画面が開かれたときに状態の情報を取得できるように
