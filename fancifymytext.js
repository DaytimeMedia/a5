// testing if javascript code is running
function makeBigger() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
  }
  
  //radio buttons function
  function applyStyle() {
    let textArea = document.getElementById("userText");
  
    if (document.getElementById("fancy").checked) {
      alert("FancyShmancy selected!");
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked) {
      alert("BoringBetty selected!");
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  //moo function
  function makeMoo() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
  
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
      let words = sentences[i].trim().split(" ");
      if (words.length > 0) {
        words[words.length - 1] += "-Moo";
      }
      sentences[i] = words.join(" ");
    }
  
    textArea.value = sentences.join(". ");
  }