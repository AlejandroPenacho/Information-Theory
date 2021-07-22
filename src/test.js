let mine = document.getElementById("block");
let value = 0;

increaseValue = ()=>{
    value++;
    mine.innerHTML = value.toString();
}

mine.addEventListener("click", increaseValue);
