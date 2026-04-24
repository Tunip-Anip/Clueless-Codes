var pages = ["gamescreen.html","",]
var symbols = ["Pentacle","Fib","Golden_Ratio","Hindu_Swastika"]
const Pentacle = {
  Name: "Pentacle",
  info: "The Pentacle; a five pronged star enclosed in a circle was a heavily appreciated symbol around ancient human history, through multiple religions it has been claimed to symbolise many different things such as the five elements: Wood, Fire, Water, Earth and Metal in Daoism which was a philisophical chinese point of view, in other cultures it is said to represent the five human senses, but most of them converge to symbols of love, life and beauty, follwoing goddess rituals envoking and reestablishing the natural Femininity of the world.",
  OriginDate: "3500 BCE",
  OriginPlace: "Mesopotamia",
  ReligousGroup: "Polytheism",
  image: "Pentacle.png"
};

function next(){
      document.location.href = pages[0];
    }

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
    setTimeout(next, 450)

    
}

function newPopup(url,symbol) {
    
	popupWindow = window.open(
    url,'popUpWindow','height=300,width=400,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
    document.getElementById("changesymbol").src = "Pentacle.png";
    
}   


    
