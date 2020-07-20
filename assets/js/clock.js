var formatTime = (input) => (input < 10 ? `0${input}` : input);

setInterval(function () {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  document.querySelector("#clock").innerHTML = `${formatTime(hours)} : 
                                                ${formatTime(minutes)} : 
                                                ${formatTime(seconds)}`;
}, 1000);

