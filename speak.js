function speak() {
    var text = document.querySelector('.text').value;
    speechSynthesis.speak(
        new SpeechSynthesisUtterance(text)
    );
}

function addItem(){
    var text = document.querySelector('.text').value;
    var btn = document.createElement("Button");
    btn.onclick = function(){
        speechSynthesis.speak(
            new SpeechSynthesisUtterance(text)
        );
    } 
    btn.textContent = text;
    document.getElementById("sample").appendChild(btn);
}

