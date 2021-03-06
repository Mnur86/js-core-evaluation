/**
 * A function that takes an array of Writers objects and finds the ones who are alive
 *
 * Think which array method we need to use (map, forEach, filter, find, every)
 *
 */
var findAlive = function(writers) {
  var aliveOnes = writers.filter(function(person) {
    if (person.alive === true) return true;
  });
  return aliveOnes;
};

module.exports = findAlive;
