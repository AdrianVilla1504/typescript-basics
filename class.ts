//creating a class
class Employee {
  id!: number;
  name!: string;
  address!: string;

//constructor of class
  constructor(id: number, name: string, address: string){
    this.address = address;
    this.id = id;
    this.name = name;
  }

//instance of class
  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`
  }
}

let john = new Employee(1, "John", "Highway 71");

//john.id = 1;
//john.name = 'John';
//john.address = 'Highway 71';


let address  = john.getNameWithAddress();

console.log(address);
