
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        // companion : {
        //     name: "Frank",
        //     type: "flea",
        //     belongings: ["small hat", "sunglasses"]
        },
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
        }
}


const flea = {
    name: "Frank",
    type: "flea",
    belongings: ["small hat", "sunglasses"]
}

adventurer.companion.companion = flea;
console.log(adventurer);

adventurer.roll();

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  }

  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];

  class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  class Companion extends Character {
    constructor(name, type){
        super(name);
        this.type = type;

    }
  }

  const Robin = new Adventurer("Robin", "hero");
  console.log(Robin);

  const Leo = new Companion("Leo", "cat");
  console.log(Leo);

  const Frank = new Companion("Frank", "flea");
  Frank.inventory.push("small hat", "sunglasses");
  console.log(Frank);


