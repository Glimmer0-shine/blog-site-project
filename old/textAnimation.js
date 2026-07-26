const textGetElements = document.querySelectorAll(".textAnimation");

for (let i = 0; i<textGetElements.length; i++) {
    const targetElement = textGetElements[i];
    const texts = targetElement.textContent;
    const textsArray = [];
            
    targetElement.textContent = "";
        
        
    for(let j =0; j < texts.split("").length; j++){
        textsArray.push('<span><span style="animation-delay: '+ ((j+12) * 0.2) +'s" >' + texts[j] + '</span></span>');
    }
    for(let k =0; k < textsArray.length; k++){
        targetElement.innerHTML += textsArray[k];
    }
}
