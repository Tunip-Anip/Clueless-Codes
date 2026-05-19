var pages = ["gamescreen.html","transition1.html","gs2.html","transition2.html"]
var subpage = ["Correct.html"]
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
  info: "The Fibonacci Sequence, while being a popular sequence with a recognisable name, was not in fact discovered  by fibonacci. It was initially discovered by Indian scholars with Indian mathematics around 400 years before Fibonacci. The first reference to the “Fibonacci Sequence” was with Fibonacci's book e Book of Calculation, (1202). The Fibonacci sequence was a regular number sequence except the next number is the sum of the two last numbers. E.g 0 1 1 2 3 5 8… The Fibonacci Sequence was influenced by the golden ratio and is expressed with the area of the golden rectangle (the rectangle which follows the golden ratio with length: width) following the fibonacci sequence. Expressed by the symbol in the Golden Ratio’s entry",
  OriginDate: "100 BCE-350 CE",
  OriginPlace: "India",
  ReligousGroup: "Mathematics",
  image: "Fib.png"
};

const Golden_Ratio = {
  Name: "Golden Ratio",
  info: "The Golden Ratio is a mathematical representation of what is said to be one of the most beautiful ratios known to humans. It exists as a constant within nature, from the shape of a snail spiral to the length and width of the average human eye the golden ratio appears as a reoccurring and transcendent constant to which nature miraculously abides by. It was proved by Euclid and is represented by the Greek letter Phi ɸ and can be expressed through the Fibonacci sequence. The golden ratio can be expressed as the area of the square is the same as the sum of the two previous areas which would lead to the famous visualisations of both these formulas, formulating a mathematically perfect rectangle with a spiral representing the circle of life. Since the ties between the Fibonacci sequence and the golden ratio run so close it is often easy to confuse them to be each other, for clarity, the Fibonacci sequence as mentioned in the item description is a list of numbers while the golden ratio is the specific ratio of a rectangle’s width to height.",
  OriginDate: "500-300 BCE",
  OriginPlace: "Ancient Greece",
  ReligousGroup: "Science",
  image: "gRatio.png"
};

const Hindu_Swastika = {
  Name: "Hindu Swastika",
  info: "The Hindu Swastika is a powerful figure within many cultures, but the specification of 'Hindu' was made for the disambiguation to another event. The swastika was taken from many East-Asia cultures by the Nazis and was rotated and in some instances flipped to become a banner for their terror, the use of the symbol cause heavy backlash with the associated symbol where religions who have used the symbol for thousands of years had to face public ridicule for a stolen symbol. The Hindu swastika mainly represents the eternal cycle of birth, death and rebirth as well as representing the 4 states or Yugas of the world. These states were expressed through how closely the evil was contained in the universe, in the first Yuga: Krita Yuga - The separation of evil was contained in different worlds, the second Yuga: Treta Yuga -The separation was between Islands, the third Yuga: Dvapara Yuga - The separation was between family and in the fourth which is also the current yuga: Kali Yuga the evil is contained within ourselves.",
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


function newPopupP(url) {
	popupWindowp = window.open(
    url,'popUpWindowp','height=300,width=400,left=10,top=10,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no')
    popupWindowp.resizeTo(1129,700)
}   

function newPopupN(url) {
	popupWindo = window.open(
    url,'popUpWindo','height=300,width=400,left=10,top=10,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no')
    popupWindo.resizeTo(1129,700)
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
    sessionStorage.clear("symb");
}

function Shine(){
    let i=0;
    correct = document.getElementById('answer').value
    let includes = correct.includes("grave")
    let includes2 =correct.includes("yard")
    let includes3 = correct.includes("Grave")
    let includes4 =correct.includes("Yard")
    
    if(includes == true){
        i=1;
    }
    if(includes2 == true){
        i= i+1;
    }
    if(includes3 == true){
        i=1;
    }
    if(includes4 == true){
        i= i+1;
    }
    if(i>1){document.location.href = subpage[0];}
}