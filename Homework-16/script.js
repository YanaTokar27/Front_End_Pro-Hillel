function Human(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Flat() {
    this.habitants = [];

    this.addHabitant = function (habitant) {
        if (habitant instanceof Human) {
            this.habitants.push(habitant)
            return this.habitants
        } else {
            return 'Error';
        }
    }
}

function Building(maxFlats) {
    this.flats = [];
    this.maxFlats = maxFlats;

    this.addFlat = function (flat) {
        if (!(flat instanceof Flat)) {
            console.log('Error');
            return 'Error'
        }
        if (this.flats.length < maxFlats) {
            this.flats.push(flat)
        } else {
            console.log('Too many flats!');
            return 'Too many flats!';
        }
    }
}

const Oleg = new Human("Oleg", 'male');
const Yana = new Human("Yana", 'female');
const Mark = new Human("Mark", 'male');

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();

flat1.addHabitant(Oleg);
flat2.addHabitant(Yana);
flat3.addHabitant(Mark);

const building = new Building(6);
building.addFlat(flat1);
building.addFlat(flat2);
building.addFlat(flat3);

console.log(building);





