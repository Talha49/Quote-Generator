
window.onload = function() {
    generatequote();
}

function generatequote() {

let btn = document.getElementById("btn")

btn.onclick = function() {

   var quotesarray = [
       "A true friend is someone who sees the pain in your eyes while everyone else believes the smile on your face.",
        "A friend is one who knows you and loves you just the same.", "Friendship is the only cement that will ever hold the world together.",
        "Friendship is the purest love. It is the highest form of love where nothing is asked for, no condition, where one simply enjoys giving.",
        "The greatest gift of life is friendship, and I have received it.",
        "A brother shares childhood memories and grown-up dreams.", "A brother is a friend God gave you.",
        "Having a brother is like having a best friend you can't get rid of.",
        "A brother is a friend given by nature."
    ];



var randquot = document.getElementById("randquot");
var ran = Math.floor(Math.random()*10);
randquot.textContent = quotesarray[ran]; 
}
}