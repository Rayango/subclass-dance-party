var LazyDancer = function(top, left, timeBetweenSteps) {
  this.pokemonImage = './images/snorlax.gif';
  Dancer.call(this, top, left, timeBetweenSteps, this.pokemonImage);
  // this.$node.css('height', '25px');
  // this.
};

LazyDancer.prototype = Object.create(Dancer.prototype);
LazyDancer.prototype.constructor = LazyDancer;

LazyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this); 
  // this.$node.animate({top: '+=20px'});
  // if (this.$node.position().left > '250px') {
    
  // }
  // console.log(this.$node.position().left);
  // this.$node.animate({left: '250px'});  
};