var FlashyDancer = function(top, left, timeBetweenSteps) {
  // this.arrayOfColors = ['blue', 'green', 'red', 'orange', 'yellow'];
  this.pokemonImage = './images/pikachu.gif';
  Dancer.call(this, top, left, timeBetweenSteps, this.pokemonImage);
};

FlashyDancer.prototype = Object.create(Dancer.prototype);
FlashyDancer.prototype.constructor = FlashyDancer;

FlashyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this); 
// debugger;
  // var arrayOfColors = ['blue', 'green', 'red', 'orange', 'yellow'];
  // this.$node.css('border-color', this.arrayOfColors[Math.floor(Math.random() * this.arrayOfColors.length)]);  
};