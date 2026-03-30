var pages = ["index.html","Lorem.html","",]



const btnn = document.getElementsByClassName("Codex-btn"); // Get the button from the page
if (btnn) {
  // Detect clicks on the button
  btnn.onclick = function () {
    btnn.src =
      "Codex.gif";
    function pausegif() {
      btnn.src =
        "CodexFreeze.png"};
    function next(){
      document.location.href = pages[0];
    }
    //const mytimeout = setTimeout(pausegif, 700);
    //const mytimeout2 = setTimeout(next, 800);
    //document.getElementById("White").loop = true; 
    
  };
}