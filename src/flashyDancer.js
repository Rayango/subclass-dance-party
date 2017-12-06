var FlashyDancer = function(top, left, timeBetweenSteps) {
  // this.arrayOfColors = ['blue', 'green', 'red', 'orange', 'yellow'];
  this.pokemonImage = './images/pikachu.gif';
  this.id = 'pikachu';
  this.left = left;
  this.stepCount = 0;
  Dancer.call(this, top, left, timeBetweenSteps, this.pokemonImage, this.id);
};

FlashyDancer.prototype = Object.create(Dancer.prototype);
FlashyDancer.prototype.constructor = FlashyDancer;

FlashyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this); 
  if (this.stepCount !== 0) {
    this.$node.animate({left: this.left + 1 + 'px'});
    this.$node.animate({left: this.left - 1 + 'px'});
  }

  this.stepCount++; 
};

FlashyDancer.prototype.lineUp = function(leftValue, topValue) {
  Dancer.prototype.lineUp.call(this, leftValue, topValue);
  this.left = $('body').width() * 0.10;
};
