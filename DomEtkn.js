//Dom etkinlikleriyle çalışmak
let greeting = document.querySelector("#greeting")
greeting.addEventListener("clcik",domClick)

function domClick(){
    console.log("tıklandi")
    this.style.color="blue"
}

//mouseover (event listesine bak)