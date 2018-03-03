$(document).ready(function(btn) {
  var lastWasEqual = false;
  function operation() {
    var clicked = this.innerHTML;
    var screen = document.getElementById('screen').innerHTML;
    if (clicked == '=') {
      screen = screen.replace(/x/g, '*');
      var result = eval(screen);
      $('#screen').html(result);
      lastWasEqual = true;
    } else if (clicked == 'AC' || (screen.length == 1 && clicked == 'DEL')) {
      $('#screen').html('0');
    } else if (screen != '0' && screen.length != 1 && clicked == 'DEL') {
      $('#screen').html(screen.slice(0, -1));
    } else if (screen.length < 19) {
      var operationButtons = ['x', '/', '+', '-'];
      if ((screen == '0' || lastWasEqual == true) && operationButtons.indexOf(clicked) == -1) {
        $('#screen').html(clicked);
      } else {
        $('#screen').append(clicked);
      }
      lastWasEqual = false;
    }
  }
  $('button').click(operation);
})