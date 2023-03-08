Naruto1 = "";
Warrior1 = "";
Faygo1 = "";
song1_status = "";
	song2_status = "";
  song3_status ="";

function preload()
{
    Naruto1 = loadSound("NarutoUK.mp3");
    Warrior1 = loadSound("Cowbell_Warrior.mp3");
    Faygo1 = loadSound("Blueberry_Faygo.mp3");
 console.log("song loaded")
}

function draw(){
  song1_status = Naruto1.isPlaying();
	song2_status = Warrior1.isPlaying();
  song3_status = Faygo1.isPlaying();
 
}

function NarutoUK()
{
   Naruto1.play();
   Warrior1.stop();
   Faygo1.stop();
   
}

function Warrior()
{
  Warrior1.play();
  Naruto1.stop();
  Faygo1.stop();
}

function Faygo()
{
    Faygo1.play(); 
    Warrior1.stop();
    Naruto1.stop();   
}