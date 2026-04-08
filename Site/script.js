var pages = ["index.html","Lorem.html","",]



function changeImage() {
    console.log("hewo")
    document.getElementById("Codex-btn").src = "CodexContinuos.gif";
    setTimeout(slowgif, 3000)
        
}

function slowgif(){
    document.getElementById("Codex-btn").src = "Codex.gif";
    setTimeout(stopgif, 450)
}

function stopgif(){
    document.getElementById("Codex-btn").src = "CodexFreeze.png";
}