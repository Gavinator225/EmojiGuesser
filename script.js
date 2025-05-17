const emojiSets = [
    {emojis: "🧛‍♂️🩸🏰", theme: "character", answer: "Dracula"},
    {emojis: "🧛‍♂️🧑🏨", theme: "movie", answer: "hotel transylvania"},
    {emojis: "🦇🌃🤵", theme: "character", answer: "Batman"},
    {emojis:"👨‍🍳🐀", theme:"movie", answer:"Ratatouille"},
    {emojis:"🚢🧊💔", theme:"movie", answer:"Titanic"},
    {emojis:"🧙‍♂️💍🔥", theme:"movie", answer:"The Lord of the Rings"},
    {emojis: "🐒🌍", theme: "movie", answer: "Planet of the Apes"},
    {emojis:"🧠💊🔴🔵", theme:"movie", answer:"The Matrix"},
    {emojis:"🪐⏳🤯", theme:"movie", answer:"Interstellar"},
    {emojis:"👩‍🚀👽😱", theme:"movie", answer:"Alien"},
    {emojis: "🦁👑", theme: "movie", answer: "The Lion King"},
    {emojis: "🏹🔥👧", theme: "book", answer: "The Hunger Games"},
    {emojis:"💰🐔👴🏻⚗️", theme:"tv show", answer:"Breaking Bad"},
    {emojis:"👶🧟‍♂️🚪", theme:"tv show", answer:"The Walking Dead"},
    {emojis: "🟢😡💥", theme: "character", answer: "Hulk"},
    {emojis: "🏴‍☠️👒🍖", theme: "character", answer: "Luffy"},
    {emojis:"🪑🐉⚔️", theme:"tv show", answer:"Game of Thrones"},
    {emojis: "🌪️🏡🦁", theme: "movie", answer: "The Wizard of Oz"},
    {emojis:"🧙‍♂️🦉⚡", theme:"book", answer:"Harry Potter"},
    {emojis:"🚀🌕👨‍🚀", theme:"historical event", answer:"Moon Landing"},
    {emojis:"🧬💉🌍", theme:"historical event", answer:"COVID-19"},
    {emojis:"🕷️🧑‍🎓🗽", theme:"movie", answer:"Spider-Man"},
    {emojis:"🦸‍♂️🧤✨", theme:"movie", answer:"Shazam"},
    {emojis:"🔍🐠🌊", theme:"movie", answer:"Finding Nemo"},
    {emojis:"🦖🚙🏝️", theme:"movie", answer:"Jurassic Park"},
    {emojis: "👨‍👩‍👧‍👦🦸‍♂️💥", theme: "movie", answer: "The incredibles"},
    {emojis:"🎈🏠👴🏻", theme:"movie", answer:"Up"},
    {emojis:"🚗🏁🔥", theme:"movie", answer:"Cars"},
    {emojis:"🧑‍🚀🤖🌍", theme:"movie", answer:"WALL-E"},
    {emojis:"📓☠️👩‍🎓", theme:"tv show", answer:"Death Note"},
    {emojis:"🏎️💨🛣️", theme:"video game", answer:"Mario Kart"},
    {emojis:"🅰️🔨🤖🛡️", theme:"movie", answer:"The Avengers"},
    {emojis:"👒🍖☠︎︎🏴‍☠", theme:"tv show", answer:"One Piece"},
    {emojis:"1️⃣👊👨‍🦲", theme:"tv show", answer:"One Punch Man"},
    {emojis:"1️⃣6️⃣🕯️", theme:"movie", answer:"Sixteen Candles"}
]

document.getElementById("start-btn").addEventListener("click",() => {
    document.getElementById("welcome-txt").style.display = "none";
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    startGame();
})

let selectedSet;
let score = 0;

function startGame(){

    console.log("Game has started")

    const randomIndex = Math.floor(Math.random() * emojiSets.length);
    selectedSet = emojiSets[randomIndex];

    const answer = selectedSet.answer;

    const btnNext = document.getElementById("next");
    btnNext.addEventListener("click", startGame);
    

    const container = document.getElementById("answer-input-container");
    container.innerHTML = "";

    for (let i = 0; i < answer.length; i++) {
    const char = answer[i];
    const input = document.createElement("input");
    input.setAttribute("maxlength", "1");
    input.setAttribute("class", "letter-input");
    input.setAttribute("data-index", i);

    if (char === "-") {
        input.value = "-";
        input.readOnly = true;
        input.classList.add("hyphen-box"); 
    }
    else if (char === " "){
        input.value = " ";
        input.readOnly = true;
        input.classList.add("hyphen-box");
    } 
    else {
        input.addEventListener("input", autoAdvance);
        input.addEventListener("keydown", handleBackspace);
    }

    container.appendChild(input);
}

    document.getElementById("emoji-output").textContent = selectedSet.emojis
    document.getElementById("theme-output").textContent = "Theme: " + selectedSet.theme
    document.getElementById("score").textContent = "Score: " + score;
    
    container.querySelector("input").focus();
}

document.getElementById("answer-submit").addEventListener("click", checkAnswer);

function checkAnswer(){
    const submitBtn = document.getElementById("answer-submit");

    const inputs = document.querySelectorAll(".letter-input");
    const userAnswer = Array.from(inputs).map(i => i.value).join("").toLowerCase();
    const correctAnswer = selectedSet.answer.trim().toLowerCase();

    if(userAnswer === correctAnswer){
        console.log("correct");
        submitBtn.classList.add("glow-correct");
        score++;

        setTimeout(() => {
            submitBtn.classList.remove("glow-correct");
            startGame();
        }, 300); // Let the glow animation fully play
    } else {
        console.log("incorrect");
        submitBtn.classList.add("glow-incorrect");

        setTimeout(() => {
            submitBtn.classList.remove("glow-incorrect");
        }, 300); // Let the glow animation fully play
    }
}

function autoAdvance(e) {
    const input = e.target;
    if (input.value.length === 1) {
        let next = input.nextElementSibling;
        while (next && next.readOnly) {
            next = next.nextElementSibling;
        }
        if (next) next.focus();
    }
}

function handleBackspace(e) {
    const input = e.target;

    if (e.key === "Backspace" && input.value === "") {
        let prev = input.previousElementSibling;
        while (prev && prev.readOnly) {
            prev = prev.previousElementSibling;
        }
        if (prev && !prev.readOnly) {
            prev.focus();
            e.preventDefault(); 
        }
    }
}


