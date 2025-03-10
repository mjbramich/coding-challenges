/* Description:
Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}   
*/

// My solution:
function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let defender = attacker === fighter1 ? fighter2 : fighter1;

  while (attacker.health > 0 && defender.health > 0) {
    defender.health -= attacker.damagePerAttack;

    if (defender.health <= 0) {
      return attacker.name;
    }
    [attacker, defender] = [defender, attacker];
  }
}
