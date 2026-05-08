var pages = ["gamescreen.html","",]
var symbols = ["Pentacle","Fib","Golden_Ratio","Hindu_Swastika"]

const Pentacle = {
  Name: "Pentacle",
  info: "The Pentacle; a five pronged star enclosed in a circle was a heavily appreciated symbol around ancient human history, through multiple religions it has been claimed to symbolise many different things such as the five elements: Wood, Fire, Water, Earth and Metal in Daoism which was a philosophical Chinese point of view, in other cultures it is said to represent the five human senses, but most of them converge to symbols of love, life and beauty, following goddess rituals envoking and reestablishing the natural Femininity of the world. Its history ties in well with the pentagram whereas in the renaissance Heinrich Cornelius Agrippa and others portrayed its power to be a symbol for magic. From this it was also used as a source of protection from evil forces, but its meaning as well as the pentagram have been shifted from the protective and earthly symbol that it was to a more demonic and devilish symbol brought upon by occult practices by Judeo-Christian beliefs, where they used the pentacle and pentagram to support their practices which the Christian church would spell heresy.",
  OriginDate: "3500 BCE",
  OriginPlace: "Mesopotamia",
  ReligousGroup: "Polytheism",
  image: "Pentacle.png"
};

const Fib = {
  Name: "Fibonacci Sequence",
  info: "The fibonacci sequence, while being a popular sequence with a recognisable name, was not in fact discovered  by fibonacci. It was initially discovered by Indian scholars with Indian mathematics around 400 years before Fibonacci. The first reference to the “Fibonacci Sequence” was with Fibonacci's book e Book of Calculation, (1202). The Fibonacci sequence was a regular number sequence except the next number is the sum of the two last numbers. E.g 0 1 1 2 3 5 8… The Fibonacci Sequence was influenced by the golden ratio and is expressed with the area of the golden rectangle (the rectangle which follows the golden ratio with length: width) following the fibonacci sequence. Expressed by the symbol in the Golden Ratio’s entry",
  OriginDate: "100 BCE-350 CE",
  OriginPlace: "India",
  ReligousGroup: "Mathematics",
  image: "Fib.png"
};

const Golden_Ratio = {
  Name: "Golden Ratio",
  info: "The Pentacle; a five pronged star enclosed in a circle was a heavily appreciated symbol around ancient human history, through multiple religions it has been claimed to symbolise many different things such as the five elements: Wood, Fire, Water, Earth and Metal in Daoism which was a philosophical Chinese point of view, in other cultures it is said to represent the five human senses, but most of them converge to symbols of love, life and beauty, following goddess rituals envoking and reestablishing the natural Femininity of the world. Its history ties in well with the pentagram whereas in the renaissance Heinrich Cornelius Agrippa and others portrayed its power to be a symbol for magic. From this it was also used as a source of protection from evil forces, but its meaning as well as the pentagram have been shifted from the protective and earthly symbol that it was to a more demonic and devilish symbol brought upon by occult practices by Judeo-Christian beliefs, where they used the pentacle and pentagram to support their practices which the Christian church would spell heresy.",
  OriginDate: "500-300 BCE",
  OriginPlace: "Ancient Greece",
  ReligousGroup: "Science",
  image: "gRatio.png"
};

const Hindu_Swastika = {
  Name: "Hindu Swastika",
  info: "The Pentacle; a five pronged star enclosed in a circle was a heavily appreciated symbol around ancient human history, through multiple religions it has been claimed to symbolise many different things such as the five elements: Wood, Fire, Water, Earth and Metal in Daoism which was a philosophical Chinese point of view, in other cultures it is said to represent the five human senses, but most of them converge to symbols of love, life and beauty, following goddess rituals envoking and reestablishing the natural Femininity of the world. Its history ties in well with the pentagram whereas in the renaissance Heinrich Cornelius Agrippa and others portrayed its power to be a symbol for magic. From this it was also used as a source of protection from evil forces, but its meaning as well as the pentagram have been shifted from the protective and earthly symbol that it was to a more demonic and devilish symbol brought upon by occult practices by Judeo-Christian beliefs, where they used the pentacle and pentagram to support their practices which the Christian church would spell heresy.",
  OriginDate: "3000 BCE",
  OriginPlace: "Indus Valley",
  ReligousGroup: "Hinduism",
  image: "Hindus.png"
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

function newPopup(url) {
    
    
    
	popupWindow = window.open(
    url,'popUpWindow','height=300,width=400,left=10,top=10,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no')
    popupWindow.resizeTo(1129,700)

    
    
    
}   



function changeSymbol(symbolc) {
    console.log(symbolc)
    if(symbolc=='Pentacle'){
        document.getElementById("changesymbol").src = Pentacle.image;
        document.getElementById("Info").innerHTML = Pentacle.info;
        document.getElementById("Ttl").innerHTML = Pentacle.Name;
        document.getElementById("Date").innerHTML = Pentacle.OriginDate;
        document.getElementById("Area").innerHTML = Pentacle.OriginPlace;
        document.getElementById("Group").innerHTML = Pentacle.ReligousGroup;
    }
    if(symbolc=='Fib'){
        document.getElementById("changesymbol").src = Fib.image;
        document.getElementById("Info").innerHTML = Fib.info;
        document.getElementById("Ttl").innerHTML = Fib.Name;
        document.getElementById("Date").innerHTML = Fib.OriginDate;
        document.getElementById("Area").innerHTML = Fib.OriginPlace;
        document.getElementById("Group").innerHTML = Fib.ReligousGroup;
    }
    if(symbolc=='GR'){
        document.getElementById("changesymbol").src = Golden_Ratio.image;
        document.getElementById("Info").innerHTML = Golden_Ratio.info;
        document.getElementById("Ttl").innerHTML = Golden_Ratio.Name;
        document.getElementById("Date").innerHTML = Golden_Ratio.OriginDate;
        document.getElementById("Area").innerHTML = Golden_Ratio.OriginPlace;
        document.getElementById("Group").innerHTML = Golden_Ratio.ReligousGroup;
    }
    if(symbolc=='HS'){
        document.getElementById("changesymbol").src = Hindu_Swastika.image;
        document.getElementById("Info").innerHTML = Hindu_Swastika.info;
        document.getElementById("Ttl").innerHTML = Hindu_Swastika.Name;
        document.getElementById("Date").innerHTML = Hindu_Swastika.OriginDate;
        document.getElementById("Area").innerHTML = Hindu_Swastika.OriginPlace;
        document.getElementById("Group").innerHTML = Hindu_Swastika.ReligousGroup;
    }
    setTimeout(kill, 450)
}

function kill(){
    sessionStorage.clear()
}

