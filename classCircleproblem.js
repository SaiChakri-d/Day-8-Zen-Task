//2. Class Circle problem

class Circle{
  constructor(...args){
      [this.radius, this.color] = args; //taking an array of values as arguments
  }
  getRadius(){
      return this.radius; //read the value of radius from i/p array
  }
  getcolor(){
      return this.color; //read the value of color from i/p array
  }
  setRadius(value){
      this.radius = value; //set the radius value taken from i/p
  }
  setColor(value){
      this.color = value; //set the color taken from i/p
  }
  toString(){
      return `radius= ${this.radius}, color= ${this.color}`; //display the output as strings as given in problem statement
  }
  getArea(){
    return Math.PI * Math.pow(this.radius,2); //using area of circle formula to calculate area {PI*r^2}
}

  getCircumference(){
      return Math.PI * 2 * this.radius; // area of circumference formula  {2*PI*r}
  }
}

let mycircle = new Circle(15,"red"); //taking an array of strings input
console.log(mycircle); //display output as per given input
mycircle.setRadius(5.5); // set new radius value = 5.5
console.log(mycircle.getRadius()); // display 5.5
mycircle.setColor("black"); //set new color as black
console.log(mycircle.getcolor()); // display black
console.log(mycircle.getArea()); // get new area values
console.log(mycircle.getCircumference()); // get new circumference values
console.log(mycircle.toString()); // get new results as per given format
// Output
// Circle { radius: 15, color: 'red' }
// 5.5
// black
// 95.03317777109125
// 34.55751918948772
// radius= 5.5, color= black