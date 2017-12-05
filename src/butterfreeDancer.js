var ButterfreeDancer = function(top, left, timeBetweenSteps) {
  this.pokemonImage = './images/butterfree.gif';
  this.shouldMove = true;
  this.id = 'butterfree';
  Dancer.call(this, top, left, timeBetweenSteps, this.pokemonImage, this.id);
};

ButterfreeDancer.prototype = Object.create(Dancer.prototype);
ButterfreeDancer.prototype.constructor = ButterfreeDancer;

ButterfreeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this); 
  if (this.shouldMove) {
    this.$node.animate({left: '+=10px'});
  }
  // if (this.$node.position().left > '250px') {
    
  // }
  // console.log(this.$node.position().left);
  // this.$node.animate({left: '250px'});  
};

ButterfreeDancer.prototype.lineUp = function(leftValue, topValue) {
  Dancer.prototype.lineUp.call(this, leftValue, topValue);
  this.left = 100;
  this.shouldMove = false;
  // ButterfreeDancer.prototype.step = ButterfreeDancer.prototype.lineupStep;
};

// ButterfreeDancer.prototype.lineupStep = function() {
//   Dancer.prototype.step.call(this); 
//   // this.$node.animate({left: '+=10px'});
// };