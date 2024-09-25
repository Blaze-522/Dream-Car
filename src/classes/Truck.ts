// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow{
  override vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  towingCapacity: number;
  wheels: Wheel[];

  // Constructor for the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.towingCapacity = towingCapacity;
    this.topSpeed = topSpeed;
    // Check if the wheels array has 4 elements
    // If not, create 4 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
  tow(_vehicle: Truck | Motorbike | Car): void {
    throw new Error('Method not implemented.');
  }

  // Overriding the printDetails method from Vehicle class
  override printDetails(): void {
    // Call parent class's printDetails method
    super.printDetails();

    // Log Truck-specific details
    console.log(`Truck Details:
      VIN: ${this.vin}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Weight: ${this.weight} lbs
      Top Speed: ${this.topSpeed} mph
      Color: ${this.color}
      Towing Capacity: ${this.towingCapacity} lbs
      Wheels: ${this.wheels.length}`);
  }
}


// Export the Truck class as the default export
export default Truck;
