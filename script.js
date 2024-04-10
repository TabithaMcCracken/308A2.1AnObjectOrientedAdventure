
// //Part 1

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         // companion : {
//         //     name: "Frank",
//         //     type: "flea",
//         //     belongings: ["small hat", "sunglasses"]
//         },
//         roll (mod = 0) {
//             const result = Math.floor(Math.random() * 20) + 1 + mod;
//             console.log(`${this.name} rolled a ${result}.`)
//         }
// }


// const flea = {
//     name: "Frank",
//     type: "flea",
//     belongings: ["small hat", "sunglasses"]
// }

// adventurer.companion.companion = flea;
// console.log(adventurer);

// adventurer.roll();
// Part 2
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    static MAX_HEALTH = 100;
  }

  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];

  // Part 3
  class Adventurer extends Character {
    constructor (name, role) {
      super(name);
          // Check if the given role is valid
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(`Invalid role "${role}".`);
    }
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }

    static ROLES = [
      "Fighter",
      "Healer",
      "Wizard"
    ];
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

    roll (mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`)
      return result;
    }

    duel(adventurer1, adventurer2){
      adventurer2.rolled = adventurer2.roll();
      adventurer1.rolled = adventurer1.roll();
      if(adventurer1.rolled<adventurer2.rolled){
        adventurer1.health -= 1;
      } else if (adventurer2.rolled<adventurer1.rolled){
        adventurer2.health -= 1;
      }
      else{console.log("It's a tie.");
    }
    }
  }

  class Companion extends Character {
    constructor(name, type){
        super(name);
        this.type = type;
        

    }
  }

  const Robin = new Adventurer("Robin", "Fighter");
  console.log(Robin);

  const Leo = new Companion("Leo", "cat");
  console.log(Leo);

  const Frank = new Companion("Frank", "flea");
  Frank.inventory.push("small hat", "sunglasses");
  console.log(Frank);

  // Part 4


  class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
      return newAdventurer;
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin2 = healers.generate("Robin");
  const robin4 = healers.generate("Robin");
  robin2.duel(robin2, robin4);
  console.log(robin2.health);
  console.log(robin4.health);
  // Now, we can create many “healers” using the healer factory, and conveniently find them using the factory’s methods. 
  //We can also add additional convenience methods to the factory as the requirements of the program expand.
  // An alternative approach to this would be to extend the Adventurer class to create a Healer class. 
  //This would be the practical approach if healers had additional properties and methods, 
  //but if healers are just adventurers with a specific role, creating an entire class for them is inefficient.
  // In the next part, it may be prudent to create classes for each adventuring role, depending on the additional properties and methods you would like to add.
  // 
  
  
  
  //Part 6: Developing Skills
  // Many of the core features of these characters are now implemented, but the adventurers cannot really do much yet. 
  //The only action (method) they have is scout().
  // Create an additional method, duel(), for the Adventurer class with the following functionality:
  // Accept an Adventurer as a parameter.
  // Use the roll() functionality to create opposing rolls for each adventurer.
  // Subtract 1 from the adventurer with the lower roll.
  // Log the results of this “round” of the duel, including the rolls and current health values.
  // Repeat this process until one of the two adventurers reaches 50 health.
  // Log the winner of the duel: the adventurer still above 50 health.
  // What other properties and methods could these classes have? Should fighters, healers, and wizards have their own methods? Should companions have specific methods?
  // Feel free to experiment with your own ideas, be they silly or practical. The goal of this exercise is to develop new skills for the characters and yourself! Express your creativity.
  // Part 7: Adventure Forth
  // Now that you have convenient ways to create a variety of characters with a variety of methods, experiment! Generate a whole host of adventurers and their companions, and have them interact using the instance methods you have developed.
  // If time allows, create other classes that can interact with your characters; perhaps more characters, but in a different direction from adventurers or companions – dragons, orcs, elves, vampires...
  // You can also create classes for the inventory itself, and include inventory methods such as adding, removing, searching, selling, trading. Even individual items could be their own classes, and have properties and methods specific to the type of item.
  // While this activity is intended to be light-hearted and silly, every tool you have utilized thus far is extremely common and relevant in every variety of development environment, from game development to data processing to complex enterprise applications.
  // Object-oriented programming is a feature of almost every modern programming language, and being comfortable with its core concepts will enable you to be a more capable developer!