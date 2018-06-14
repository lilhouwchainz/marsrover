var xCar = 50;

function setup() {
  //Canvas van 200 px bij 200 px
  createCanvas(800, 300); 
  //Één cijfer geeft grijswaarden
  background(20); 
}

function draw() {
    //Geen randen om de auto
    noStroke(); 
    //Kies de opvulkleur (rgb)
    fill(100, 50, 115); 
    //Parameters: x, y, breedte, hoogte
    rect(xCar, 120, 30, 0); 
    rect(xCar + 300, 78, 70, 40);
    // Wielen
    //Witte randen voor de wielen
    stroke(300); 
    //Iets dikkere randen
    strokeWeight(9); 
    fill(12, 66, 66);
    //Parameters: x, y, breedte, hoogte
    ellipse(xCar + 300, 121, 24, 24); 
    ellipse(xCar + 370, 121, 24, 24);
    stroke(200, 80, 0); //Zwarte weg
    //Parameters: x1,y1,x2,y2 
    line(0, 121+12, 3000, 121+12);
};
