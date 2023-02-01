let data; // var for json data
let inputField; // user input area
let sendButton; // the button to send input

let answer = ''; // the bot output

function preload(){
  data = loadJSON("dialog.json"); // loading the json file
}

function setup() {
  createCanvas(400, 400);
  console.log(data);
  
  inputField = createInput(""); // create the input field
  inputField.size(width/2, 40);
  inputField.position(width/4, height/4)
  
  sendButton = createButton("SEND");
  sendButton.size(100, 40)
  sendButton.position(150, 150)
  
  sendButton.mousePressed(answerMe);
}

function answerMe(){
  // get the input
  let inputStr = inputField.value();
  inputStr = inputStr.toLowerCase();
  console.log(inputStr)
  
  // loop throught the brain array and through each triggers array
  
  // if there is a match, select randomly from the responses
  
  // break out of the loop
  loop1: for(let i = 0; i < data.brain.length; i++){
    loop2: for(let j = 0; j < data.brain[i].triggers.length; j++){
      if(inputStr.indexOf(data.brain[i].triggers[j]) !== -1){
        answer = random(data.brain[i].responses);
        break loop1
      }
      else{
        answer = random(data.catchall);
      }
    }
  }
}

function draw() {
  background(220);
  textAlign(CENTER)
  text(answer, width/4, 250, width/2, height/2)
}