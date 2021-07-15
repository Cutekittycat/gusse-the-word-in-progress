var score=0;

function updateScore(){
    score++;
    document.getElementById("score").innerHTML="Score :"+score; 
}
function saveScore(){
    localStorage.setItem("score",score);
}

function nextPage(){
window.location="https://www.youtube.com/channel/UCB-qjmdhor0XEwfKkHI9l6g";
}
