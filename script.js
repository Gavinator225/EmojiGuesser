const emojiSets = [
    {emojis:"👨‍🍳🐀", theme:"movie", answer:"Ratatouille"},
    {emojis:"🚢🧊💔", theme:"movie", answer:"Titanic"},
    {emojis:"🧙‍♂️💍🔥", theme:"movie", answer:"The Lord of the Rings"},
    {emojis:"🧠💊🔴🔵", theme:"movie", answer:"The Matrix"},
    {emojis:"🪞🕰️🐇", theme:"movie", answer:"Alice in Wonderland"},
    {emojis:"👦📖⚔️🐉", theme:"movie", answer:"The NeverEnding Story"},
    {emojis:"🪐⏳🤯", theme:"movie", answer:"Interstellar"},
    {emojis:"💼😐🔁", theme:"movie", answer:"Inception"},
    {emojis:"🧸🚪😱", theme:"movie", answer:"Monsters, Inc."},
    {emojis:"🍿🗣️👁️", theme:"movie", answer:"The Truman Show"},
    {emojis:"👩‍🚀👽😱", theme:"movie", answer:"Alien"},
    {emojis:"🧟‍♂️🎞️📺", theme:"movie", answer:"Night of the Living Dead"}, 
    {emojis:"👨‍⚕️🏥🩺", theme:"tv show", answer:"Grey's Anatomy"},
    {emojis:"🧪📚🧑‍🔬", theme:"tv show", answer:"Breaking Bad"},
    {emojis:"👶🧟‍♂️🚪", theme:"tv show", answer:"The Walking Dead"},
    {emojis:"🧙‍♂️🐉⚔️", theme:"tv show", answer:"Game of Thrones"},
    {emojis:"🧟‍♀️🏥🔫", theme:"video game", answer:"Resident Evil"},
    {emojis:"🌆🕷️🧑", theme:"video game", answer:"Spider-Man"},
    {emojis:"🧑‍🚀🪐👾", theme:"video game", answer:"Mass Effect"},
    {emojis:"🧙‍♂️🦉⚡", theme:"book", answer:"Harry Potter"},
    {emojis:"📖👧🏽👨🏽‍🦯🚪", theme:"book", answer:"The Book Thief"},
    {emojis:"🐷🏝️🔥", theme:"book", answer:"Lord of the Flies"},
    {emojis:"🦁👠🧙‍♀️", theme:"book", answer:"The Lion, the Witch and the Wardrobe"},
    {emojis:"🗽🛬🌎", theme:"historical event", answer:"Immigration to America"},
    {emojis:"🚀🌕👨‍🚀", theme:"historical event", answer:"Moon Landing"},
    {emojis:"💣🇯🇵🔥", theme:"historical event", answer:"Hiroshima Bombing"},
    {emojis:"🧬💉🌍", theme:"historical event", answer:"COVID-19 Pandemic"},
    {emojis:"🕷️🧑‍🎓🗽", theme:"movie", answer:"Spider-Man"},
    {emojis:"🦸‍♂️🧤✨", theme:"movie", answer:"Shazam"},
    {emojis:"🔍🐟🌊", theme:"movie", answer:"Finding Nemo"},
    {emojis:"🦖🚙🏝️", theme:"movie", answer:"Jurassic Park"},
    {emojis:"🎈🏠👴🏻", theme:"movie", answer:"Up"},
    {emojis:"🚗🏁🔥", theme:"movie", answer:"Cars"},
    {emojis:"🧑‍🚀🤖🌍", theme:"movie", answer:"WALL·E"},
    {emojis:"🎤🌍👨‍👩‍👧‍👦", theme:"tv show", answer:"The Voice"},
    {emojis:"👨‍🔬💣🧠", theme:"tv show", answer:"Young Sheldon"},
    {emojis:"🕵️‍♂️💻🔍", theme:"tv show", answer:"Mr. Robot"},
    {emojis:"📓☠️👩‍🎓", theme:"tv show", answer:"Death Note"},
    {emojis:"🗡️🛡️🐉", theme:"video game", answer:"The Legend of Zelda"},
    {emojis:"🏎️💨🛣️", theme:"video game", answer:"Mario Kart"},
    {emojis:"🪓🌲👾", theme:"video game", answer:"Minecraft"},
    {emojis:"👤🔫🎭", theme:"video game", answer:"Hitman"},
    {emojis:"👧🚪🦁", theme:"book", answer:"The Chronicles of Narnia"},
    {emojis:"🧒🪢🌾", theme:"book", answer:"Of Mice and Men"},
    {emojis:"🧔📚✍️", theme:"book", answer:"The Diary of a Young Girl"},
    {emojis:"🌊⚓🧭", theme:"book", answer:"Moby-Dick"},
    {emojis:"📚🚂🎓", theme:"book", answer:"Matilda"},
    {emojis:"✈️🏢🔥", theme:"historical event", answer:"9/11"},
    {emojis:"🛳️🧊💀", theme:"historical event", answer:"Sinking of the Titanic"},
    {emojis:"⚔️🏴‍☠️📜", theme:"historical event", answer:"American Revolution"}
]

document.getElementById("start-btn").addEventListener("click",() => {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    startGame();
})

let selectedSet;

function startGame(){

    document.getElementById("answer-input").value = "";

    console.log("Game has started")

    const randomIndex = Math.floor(Math.random() * emojiSets.length);
    selectedSet = emojiSets[randomIndex];

    document.getElementById("emoji-output").textContent = selectedSet.emojis
    document.getElementById("theme-output").textContent = "Theme: " + selectedSet.theme



    
}

document.getElementById("answer-submit").addEventListener("click", checkAnswer);

function checkAnswer(){
    const userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();
    const correctAnswer = selectedSet.answer.trim().toLowerCase();

    if(userAnswer == correctAnswer){
        console.log("correct")
        alert("nice")
        startGame();
    }
    else{
        alert("incorrect")
    }
}

