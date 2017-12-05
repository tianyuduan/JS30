function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  // secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + ((seconds/60)*6) + 90;
  // minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 60) * 360 + ((mins/60)*30) + 90;
  // hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
  setInterval(setDate, 1000); //every second calls function



const now = new Date();
console.log(now);
const secondDegrees = (seconds / 60) * 360 + 90; //gets degree, seconds out of 60, 90 is offset
const minsDegrees = (mins / 60) * 360 + ((seconds/60)*6) + 90;
  // seconds / 60 * 6 reflects how much seconds affects the minute hand.

console.log(now.getSeconds());
console.log(now.getMinutes());
console.log(now.getHours());

// Each 60 second prepares minute hand for its next position, and each 60 minutes tick does same for the hour hand.
// Assume that time is 17:17:41
// Calculate how much degrees minute hand make right now
// minsDegrees = (17/60) * 360 = 102
// Plus;
// Calculate how much degrees the elapsed seconds made our minute hand made;
// theDegreeFromSeconds = (41/60) *6= 4.1
// minDegree = 102 + 4.1 = 106.1
// We multiply by 6 beacuse each elapsed second made 6° on clock btw. It is same for the hour degree calculation.
