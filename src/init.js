$(document).ready(function() {
  window.dancers = [];

  window.lineUpDancers = function(dancers) {
    for (var i = 0; i < window.dancers.length; i++) {
      if (i === 0) {
        window.dancers[i].$node.css('margin-left', '80px');
      } else {
        var paddingOfPreviousDancer = parseInt(window.dancers[i - 1].$node.css('margin-left'), 10);
        window.dancers[i].$node.css('margin-left', paddingOfPreviousDancer + 80 + 'px');
      }
      window.dancers[i].lineUp();
    }
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
    window.lineUpDancers();
  }); 
});

