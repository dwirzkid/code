function Motor(brand, color, maxSpeed, chassisNumber){
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

Motor.prototype.drive = function(){
    console.log(`${this.brand} ${this.color} is driving`);
    
}

Motor.prototype.reverse = function(){
    console.log(`${this.brand} ${this.color} is reversing`);
}

Motor.prototype.turn = function(){
    console.log(`${this.brand} ${this.color} is turning`);
}

const motor1 = new Motor(`Super`, `Black`, 150, `su-1`);
const motor2 = new Motor(`Excel`, `White`, 150, `ex-1`);
const motor3 = new Motor(`VBB`, `White`, 150, `vb-1`);

console.log(motor1);
console.log(motor3);
console.log(motor2);

motor1.reverse();
motor2.reverse();
motor3.reverse();