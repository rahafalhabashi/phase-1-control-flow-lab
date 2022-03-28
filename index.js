function scuberGreetingForFeet(){
const ride = 199
if(ride <= 400){
  return 'This one is on me!'
}
 else if (ride > 2000 && ride < 2500) {
  return `I will gladly take your thirty bucks.`
}
else if (ride >= 2500) {
  return 'No can do.'
}
}
scuberGreetingForFeet()

let city = 'Greenbelt'
function ternaryCheckCity(){
  if (city = 'New York') {
    return 'Ok, sounds good.'
  }
  else {
    return 'No go'
  }
}

function switchOnCharmFromTip(){
if(tip = 'generous') {
  return 'Thank you so much.'
}
else if(tip = 'not as generous') {
  return "Thank you."
}
else {
  return 'Bye.'
}

}