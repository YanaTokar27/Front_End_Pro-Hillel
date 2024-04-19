function Human(name, gender) {
    this.name = name;
    this.gender = gender;

}

function Flat() {
    this.habitants = [];

    this.addHabitants = function (user) {

        if (user instanceof Human) {
            this.habitants.push(user)
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
        if (flat instanceof Flat) {

            this.flats.push(flat)
        } else {
            console.log('Error');
        }
    }
}

const Oleg = new Human("Oleg", 'male');
const Yana = new Human("Yana", 'female');
const Mark = new Human("Mark", 'male');

console.log(Oleg);
console.log(Yana);
console.log(Mark);



const newHabitans = new Flat('Oleg');
console.log(newHabitans.addHabitants(Oleg));

// const maxFlats23 = new Building(23);
// maxFlats23.addFlat(23);




