var boxCount;
function getRandomEmoji1() {
    let emoticons1 = ['0x1F917', '0x1F911', '0x1F3C6', '0x1F389', '0x1F37B', '0x1F60E', '0x1F44F']
    num1 = Math.floor(Math.random() * 7)
    emoji1 = String.fromCodePoint(emoticons1[num1]);
    return emoji1;
}
function getRandomEmoji2() {
    let emoticons2 = ['0x1F47E', '0x23F1', '0x1F605', '0x1F914', '0x1F1F480', '0x1F440', '0x1F937']
    num2 = Math.floor(Math.random() * 7)
    emoji2 = String.fromCodePoint(emoticons2[num2]);
    return emoji2;
}
let maincolor = getRandomColor();
var score = 0;
var extra=0;
function getRandomColor() {
    color = "rgb(" + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
    return color;
}
easy();

function newGame()
{
    document.getElementById("score").innerHTML = "Score: 0" ;
    score = 0;
    setRandomColor();
    document.getElementById("message").innerHTML = "";
    

}
setRandomColor();

function easy() {
    boxCount = 3;
    setRandomColor();
    for (i = 4; i <= 6; i++) {
        document.getElementById("box" + [i]).style.visibility = "hidden";
    }
    newGame();
}
function hard() {
    boxCount = 6;
    setRandomColor();
    for (i = 4; i <= 6; i++) {
        document.getElementById("box" + [i]).style.visibility = "visible";
    }
    newGame();
}
function setRandomColor() {
    var boxes = document.querySelectorAll(".grid")
    maincolor = getRandomColor();
    document.getElementById("color-code").innerHTML = maincolor;
    for (i = 0; i <= (boxCount - 1); i++) {
        boxes[i].style.backgroundColor = getRandomColor();

    }
    boxes[Math.floor(Math.random() * (boxCount))].style.backgroundColor = maincolor;
    extra = 0;
    document.getElementById("message").innerHTML = "";


}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function select(clicked_id) {

    myDivObj = document.getElementById(clicked_id);
    let optioncolor = window.getComputedStyle(myDivObj).backgroundColor;
    if (optioncolor == maincolor) {
        document.getElementById("message").innerHTML = "Correct!" + getRandomEmoji1();
        message.style.color = "green";
        document.getElementsByClassName("Heading")[0].style.backgroundColor = maincolor;
        var boxes = document.querySelectorAll(".grid");
        for (let i = 0; i <= 5; i++) {
            boxes[i].style.backgroundColor = maincolor;
        }
        updateScore();
    }
    else {
        reduceScore();
        document.getElementById("message").innerHTML = "Try Again!" + getRandomEmoji2();
        document.getElementById(clicked_id).style.backgroundColor = "#292927";
        message.style.color = "red";
    }
    if(score<0)
    {
        alert("You lost the game. ");
        newGame();
        
    }
}

function updateScore()
{
    if (!extra) {
        score = score + 1;
        document.getElementById("score").innerHTML = "Score: " + score;
        extra += 1;
    }

}
function reduceScore()
{
    score -= 0.75;  
    document.getElementById("score").innerHTML = "Score: " + score;
}

