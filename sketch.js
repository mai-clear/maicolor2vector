let numWordArray =[];
let vectorArray = [];
let vectorWords = [];
let numWords = [];
let words = [];
let angle = 0;
let mapNum =[];
let mapNum2 = [];
let loopt = false;

function preload(){

  jFont = loadFont("electroharmonix.ttf");

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  colorMode(HSB, 100)
  input = createInput( );
  input.position(10, height + 10);
  cc = createP("Search for any word");
  cc.position(20  ,height + 20);
  button = createButton('submit');
  button.position(input.x + input.width, height + 10);
  cc = createP("Using Free Dictionary API");
  cc.position(width - 190 ,height);
  button.mousePressed(jLoad);
  

}


function draw() {
  
//     for( let i = 0; i < vectorWords.length; i++){
//     strokeWeight(2);
//     stroke(vectorWords[i].x, 100, 100);
//     noFill();
//     ellipse(random(600) - 300,random(600) - 300 ,300 ,10);
//     //console.log(vectorWords[i].x);
    
//    }
  
      frameRate(50);
  //background(0);
  //fill(random(150,255), random(200,255), 0);
  textFont(jFont);
  for(let i = 0; i < words.length ; i++ ){ 
    text(words[i], random(600) - 300,random(600) - 300);
    fill(vectorWords[i].x, vectorWords[i].y, 100);
    
    textSize(random(i)*10);
    //ambientLight(1000);
    //noStroke();
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 10);
   // graph.fill(random(255));
   // graph.textAlign(CENTER);
   // graph.textSize(random(counting[finalKey[i]]));
    //graph.text(dtxt[i],random(10),random(10)); 
    
    angle += 0.1;
   }
  
}

function jLoad() {
  loadJSON("https://api.dictionaryapi.dev/api/v2/entries/en/" + input.value(), giveme);
  
}

// this function is from here: https://stackoverflow.com/questions/27877197/convert-letter-to-number-in-javascript/30697101

function sumChars(s) {
  var i, n = s.length, acc = 0;
  for (i = 0; i < n; i++) {
    acc += parseInt(s[i], 36) - 9;
  }
  return acc;
}
////
//this part is an example from w3docs.com
//console.log(sumChars("hello"))
let string = "w3docs.com";
let firstChar = string.charAt(0); // Returns "w"
//console.log(firstChar);
///


function giveme(data) {
  //console.log(data);
  let url = data[0].meanings[0].definitions[0].definition;
  console.log(url);
  //select each word from description
  words = url.split(/\W+/);
  //console.log(words);
  //words2vectors
  maiColorVector(words);
  numWords = numWordArray;
  vectorWords = vectorArray;
  console.log(numWords);
  //console.log(vectorWords);
  vectorArray = [];
  //console.log(vectorWords[0].x);
//playing with ellipses
  background(0);
  

}

function maiColorVector(w){
   //convert each word to numbers
  for(let i = 0; i < w.length ; i++){
    numWordArray[i] = sumChars(w[i]);
    //The average word length in English language is 4.7 characters, so I mult 5x26 = 130 for do the mapping ,then up to 200
    mapNum[i] = map(numWordArray[i],0, 200, 0, 360 );
    mapNum2[i] = map(w.length,0, 50, 0, 100 );
    vectorArray[i] = createVector(mapNum[i],mapNum2[i],100);
    
  }
  return numWordArray, vectorArray; 
  
}


// //pause & play again
// function mousePressed() {
//   if(!loopt ){
//    noLoop();
//     loopt = !loopt;
//     } else {
//     loop();
//     loopt = !loopt;
//     }
//   }
