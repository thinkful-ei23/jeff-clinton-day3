'use strict';


function createCharacter(name, nickname, race, origin, attack, defense) {
  return {name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight(character) {
      let opponentDamage = this.attack - character.defense;
      let playerDamage = character.attack - this.defense;
      if (opponentDamage < 0) {
        opponentDamage = 0;
      }
      if (playerDamage < 0) {
        playerDamage = 0;
      }
      return `Your opponent takes ${opponentDamage} damage and you receive ${playerDamage} damage`;
    }
  };
}
const characters = [
  createCharacter(name, nickname, race, origin, attack, defense),
  createCharacter(name, nickname, race, origin, attack, defense),
  createCharacter(name, nickname, race, origin, attack, defense),
  createCharacter(name, nickname, race, origin, attack, defense),
  createCharacter(name, nickname, race, origin, attack, defense),
];

