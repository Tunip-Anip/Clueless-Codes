var pages = ["gamescreen.html","",]
var symbols = ["Pentacle","Fib","Golden_Ratio","Hindu_Swastika"]
let symbolc = ""
const Pentacle = {
  Name: "Pentacle",
  info: "The Pentacle; a five pronged star enclosed in a circle was a heavily appreciated symbol around ancient human history, through multiple religions it has been claimed to symbolise many different things such as the five elements: Wood, Fire, Water, Earth and Metal in Daoism which was a philosophical Chinese point of view, in other cultures it is said to represent the five human senses, but most of them converge to symbols of love, life and beauty, following goddess rituals envoking and reestablishing the natural Femininity of the world. Its history ties in well with the pentagram whereas in the renaissance Heinrich Cornelius Agrippa and others portrayed its power to be a symbol for magic. From this it was also used as a source of protection from evil forces, but its meaning as well as the pentagram have been shifted from the protective and earthly symbol that it was to a more demonic and devilish symbol brought upon by occult practices by Judeo-Christian beliefs, where they used the pentacle and pentagram to support their practices which the Christian church would spell heresy.",
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
    
    symbolc = symbol
    console.log(symbolc)
	popupWindow = window.open(
    url,'popUpWindow','height=300,width=400,left=10,top=10,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no')
    popupWindow.resizeTo(1129,700)
}   

function changeSymbol() {
    console.log(symbolc)
    if(symbolc==''){
        document.getElementById("changesymbol").src = "Pentacle.png";
        document.getElementById("Info").innerHTML = Pentacle.info;
        document.getElementById("Ttl").innerHTML = Pentacle.Name;
        document.getElementById("Date").innerHTML = Pentacle.OriginDate;
        document.getElementById("Area").innerHTML = Pentacle.OriginPlace;
        document.getElementById("Group").innerHTML = Pentacle.ReligousGroup;
    }
}

    
