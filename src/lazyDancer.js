var LazyDancer = function(top, left, timeBetweenSteps) {
  this.pokemonImage = './images/snorlax.gif';
  this.id = 'snorlax';
  Dancer.call(this, top, left, timeBetweenSteps, this.pokemonImage, this.id);
  // this.$node.css('height', '25px');
  // this.
  this.degrees = 0;
};

LazyDancer.prototype = Object.create(Dancer.prototype);
LazyDancer.prototype.constructor = LazyDancer;

LazyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this); 
  // this.$node.animate({top: '+=20px'});
  // if (this.$node.position().left > '250px') {
    
  // }
  this.$node.rotate({
    duration: 6000,
    angle: 0,
    animateTo: 100
  });
  // this.$node.rotate = function() {
  //   $(this).css({"transform" : "rotate(" + this.degrees + "deg)"});
  //   return $(this);
  // };
  // this.$node.rotate();
  // this.degrees += 50;

  // console.log(this.$node.position().left);
  // this.$node.animate({left: '250px'});  
};