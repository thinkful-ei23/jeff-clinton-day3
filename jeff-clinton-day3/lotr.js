'use strict';

function createCharacter(name, nickname, race, origin, weapon, attack, defense) {
  return {
    name, nickname, race, origin, weapon, attack, defense, 
    describe: function() {
      console.log(`${this.name} is a ${this.race} of ${this.origin} who uses ${this.weapon}.`);
    },
    evaluateFight: function(character) {
      let opponentDamage = this.attack - character.defense;
      let playerDamage = character.attack - this.defense;
      if (opponentDamage < 0) {
        opponentDamage = 0;
      }
      if (playerDamage < 0) {
        playerDamage = 0;
      }
      console.log(`Your opponent takes ${opponentDamage} damage and you receive ${playerDamage} damage.`);
    }
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 'a wizard staff', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'the Ring', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'the String and Barrow Blade', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 'Anduril', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'a bow and arrow', 8, 5),
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 'Hadhafang', 4, 4));

characters.find(char => char.nickname === 'aragorn').describe();

const hobbits = characters.filter(char => char.race === 'Hobbit');
// console.log(hobbits);

const strongChars = characters.filter(char => char.attack > 5);
// console.log(strongChars);

characters.find(char => char.nickname === 'gandalf')
  .evaluateFight(characters.find(char => char.nickname === 'aragorn'));