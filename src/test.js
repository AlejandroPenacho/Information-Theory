let mine = document.getElementById("block");
let value = 0;

increaseValue = ()=>{
    value++;
    mine.innerHTML = value.toString();

    let currentSize = window.getComputedStyle(mine).fontSize;
    
    getUntil = (text) => {
        if (text[0] == "p"){
            return ""
        } else {
            return (text[0] + getUntil(text.slice(1)))
        }
    }


    let numSize = getUntil(currentSize);

    mine.style.fontSize=(parseInt(numSize)+1)+"px";
    console.log(numSize)
}

mine.addEventListener("click", increaseValue);
