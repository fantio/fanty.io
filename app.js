(function(){
  var backgroundColors = ["#938bde", "#5c4fcd", "#F64747", "#6C7A89", "#674172", "#F7CA18", "#D2527F"];
  var body = document.getElementsByTagName("body")[0];
  var lastColor;

  function getRandomIndex () {
    return Math.round(Math.random() * backgroundColors.length);
  }

  function changeBackgroundColor () {
    var randomIndex;

    do {
      randomIndex = getRandomIndex();
    } while (randomIndex === lastColor);

    lastColor = randomIndex;

    body.style.backgroundColor = backgroundColors[randomIndex];
  };

  console.log("%c Welcome to %cFanty.io :) ", "background: #282828;color: #FFF0F5", "background: #282828;color: #D2527F");
  changeBackgroundColor();
  setInterval(changeBackgroundColor, 15000);
})();
