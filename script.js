// Date
(
  function date() {
    const date = new Date();
    document.getElementById("date").innerHTML = date.toLocaleDateString(
      'en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    );
  }
)
();


// Time 
function time() {

  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');


  const getHours = new Date().getHours();
  const getMinutes = new Date().getMinutes();
  const getSeconds = new Date().getSeconds();


  hours.innerHTML = getHours;
  minutes.innerHTML = getMinutes;
  seconds.innerHTML = getSeconds;

}

const interval = setInterval(time, 1000);




