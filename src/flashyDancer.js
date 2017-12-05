var FlashyDancer = function(top, left, timeBetweenSteps) {
  // this.arrayOfColors = ['blue', 'green', 'red', 'orange', 'yellow'];
  this.pokemonImage = './images/pikachu.gif';
  this.left = left;
  this.stepCount = 0;
  Dancer.call(this, top, left, timeBetweenSteps, this.pokemonImage);
};

FlashyDancer.prototype = Object.create(Dancer.prototype);
FlashyDancer.prototype.constructor = FlashyDancer;

FlashyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this); 
  // var newPosition = this.$node.position().left + 3;
  // this.$node.animate({left: newPosition + 'px'});
  // newPosition -= 3;
  // this.$node.animate({left: newPosition + 'px'});
  if (this.stepCount !== 0) {
    this.$node.animate({left: this.left + 3 + 'px'});
    this.$node.animate({left: this.left - 6 + 'px'});
  }

  this.stepCount++;
// debugger;
  // var arrayOfColors = ['blue', 'green', 'red', 'orange', 'yellow'];
  // this.$node.css('border-color', this.arrayOfColors[Math.floor(Math.random() * this.arrayOfColors.length)]);  
};

FlashyDancer.prototype.lineUp = function() {
  Dancer.prototype.lineUp.call(this);
  this.left = 100;
};
