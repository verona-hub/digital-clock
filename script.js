// Variables declarations
const dateText = document.getElementById("date");
const hourText = document.getElementById('hours');
const minutesText = document.getElementById('minutes');
const secondsText = document.getElementById('seconds');

// Self executing date function
(function date() {
  // Create a new date variable
  const date = new Date();
  // Set the date variable output to the displayed text
  dateText.innerHTML = date.toLocaleDateString(
    'en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );
})();

// Time function
const time = () => {
  // Get current hour, minutes, and seconds and put the value in each variable
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  // Set the text to be the variables value
  hourText.innerHTML = hour;
  minutesText.innerHTML = minutes;
  secondsText.innerHTML = seconds;
}

// The time functions runs at interval of 1s
const interval = setInterval(time, 1000);