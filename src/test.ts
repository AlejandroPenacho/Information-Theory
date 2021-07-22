let mine: HTMLElement = document.getElementById("block");
let value: number = 0;


let getUntil = (text: string) : string => {
    if (text[0] == "p"){
        return ""
    } else {
        return (text[0] + getUntil(text.slice(1)))
    }
}

let increaseValue = () : void =>{
    value++;
    mine.innerHTML = value.toString();

    let currentSize = window.getComputedStyle(mine).fontSize;
    


    let numSize = getUntil(currentSize);

    mine.style.fontSize=(parseInt(numSize)+1)+"px";
    console.log(numSize)
}

mine.addEventListener("click", increaseValue);
