// JavaScript source code
// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
        console.log('The existing energy level is at: ', this.energy)
    }
    doSomethingFun() {
        this.energy -= 10;
        console.log('The energy level has fallen to:  ', this.energy)
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log('The current energy level is at:', this.xp)
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    newIntern = new Worker("Bob", 21, 110, 0, 10);
    newIntern.goToWork();
    return newIntern;
}

intern();



// Task 4: Code a manager object, methods
function manager() {
    newManager = new Worker("Alice", 30, 120, 100, 30);
    newManager.doSomethingFun();
    return newManager;
}

manager();