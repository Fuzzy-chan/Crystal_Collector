var currentValue = 0;
var crystal1Val=0;
var crystal2Val=0;
var crystal3Val=0;
var crystal4Val=0;
var targetValue=0;
var wins = 0;
var losses = 0;

//Function to prepare game to be played
function resetGame(){
    //sets target value to an integer between 40 and 60
     targetValue = Math.floor((Math.random() * 20)+40);
    //writes target value to webpage
    $("#finalValue").text(targetValue);
    console.log(targetValue);
    //sets current value to 0 and writes it to webpage
    currentValue = 0;
    $("#currentValue").text(currentValue);

 crystal1Val = Math.floor((Math.random()*9)+2);
 crystal2Val = Math.floor((Math.random()*9)+2);
 crystal3Val = Math.floor((Math.random()*9)+2);
 crystal4Val = Math.floor((Math.random()*9)+2);
console.log("Value of Crystal 1: " + crystal1Val);
console.log("Value of Crystal 2: " + crystal2Val);
console.log("Value of Crystal 3: " + crystal3Val);
console.log("Value of Crystal 4: " + crystal4Val);
}

$("button").on("click", function(){
    resetGame();
    console.log("start button pressed");
});

    $("#crystal1").on("click", function(){
        currentValue = currentValue + crystal1Val;
        $("#currentValue").text(currentValue);
        console.log("Current total value " + currentValue)
        console.log("Total Value: "+ targetValue);
        resolve();    
   });
   
   $("#crystal2").on("click", function(){
       currentValue = currentValue + crystal2Val;
       $("#currentValue").text(currentValue);
       console.log("Current total value " + currentValue)
       console.log("Total Value: "+ targetValue);
       resolve();
   });
   
   $("#crystal3").on("click", function(){
       currentValue = currentValue + crystal3Val;
       $("#currentValue").text(currentValue);
       console.log("Current total value " + currentValue)
       console.log("Total Value: "+ targetValue);
       resolve();
   });
   
   $("#crystal4").on("click", function(){
       currentValue = currentValue + crystal4Val;
       $("#currentValue").text(currentValue);
       console.log("Current total value " + currentValue)
       console.log("Total Value: "+ targetValue);
       resolve();
   });


function resolve(){
if (currentValue === targetValue && targetValue !==0){
    wins++;
    $("#gamesWon").text(wins);
    resetGame();
    alert("You Win!")
}

else if (currentValue > targetValue && targetValue !==0){
    losses++;
    $("#gamesLost").text(losses);
    resetGame();
    alert("You lose.")
}
}
