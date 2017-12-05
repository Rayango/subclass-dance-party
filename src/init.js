$(document).ready(function() {
  window.dancers = [];

  window.lineUpDancers = function(leftValue, topValue, dancers) {
    for (var i = 0; i < dancers.length; i++) {
      if (i === 0) {
        dancers[i].$node.css('margin-left', '40px');
      } else {
        var marginOfPreviousDancer = parseInt(dancers[i - 1].$node.css('margin-left'), 10);
        dancers[i].$node.css('margin-left', marginOfPreviousDancer + 90 + 'px');
      }
      dancers[i].timeBetweenSteps = 500;
      dancers[i].lineUp(leftValue, topValue);
    }
  };

  window.danceOff = function() {

    var pokemonGroups = {};
    pokemonGroups.pikachu = {};
    pokemonGroups.snorlaxes = {};
    pokemonGroups.gastlys = {};
    pokemonGroups.butterfrees = {};
    debugger;
    pokemonGroups.pikachu.dancers = window.dancers.filter(function(dancer) {
      return dancer.id === 'pikachu';
    });
    pokemonGroups.pikachu.position = {left : '250px', top : '200px'};

    pokemonGroups.snorlaxes.dancers = window.dancers.filter(function(dancer) {
      return dancer.id === 'snorlax';
    });
    pokemonGroups.snorlaxes.position = {left : '250px', top: '140px'};

    pokemonGroups.gastlys.dancers = window.dancers.filter(function(dancer) {
      return dancer.id === 'gastly';
    });
    pokemonGroups.gastlys.position = {left : '250px', top: '80px'};

    pokemonGroups.butterfrees.dancers = window.dancers.filter(function(dancer) {
      return dancer.id === 'butterfree';
    });
    pokemonGroups.butterfrees.position = {left : '250px', top: '20px'};

    window.lineUpDancers(pokemonGroups.pikachu.position.left, pokemonGroups.pikachu.position.top, pokemonGroups.pikachu.dancers);
    window.lineUpDancers(pokemonGroups.snorlaxes.position.left, pokemonGroups.snorlaxes.position.top, pokemonGroups.snorlaxes.dancers);
    window.lineUpDancers(pokemonGroups.gastlys.position.left, pokemonGroups.gastlys.position.top, pokemonGroups.gastlys.dancers);
    window.lineUpDancers(pokemonGroups.butterfrees.position.left, pokemonGroups.butterfrees.position.top, pokemonGroups.butterfrees.dancers);  
  };

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    console.log($("body").height(), $("body").width());
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpDancers').on('click', function(event) {
    window.lineUpDancers('100px','135px', window.dancers);
  });

  $('body').on('click', '.pokemon', function(event) {
    console.log('I am clicking pokemon');
    console.log($(this));
    if($(this).attr('id') === 'pikachu') {
      $(this).attr('src', './images/raichu.png');
      $(this).attr('id', 'raichu');
    }
  });

  $('.danceOff').on('click', function(event) {
    window.danceOff();
  });
 
});







