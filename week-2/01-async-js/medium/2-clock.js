const printInplace = (string) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(string);
};

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  return strTime;
}

setInterval(() => {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const meridian = hour >= 0 && hour < 12 ? "AM" : "PM";

  const time24String = currentTime.toTimeString().split(" ")[0];

  const time12String = formatAMPM(currentTime);

  const timeStringWithMeridian = `${time24String}\t|\t${time12String}`;

  printInplace(timeStringWithMeridian);
}, 1000);
