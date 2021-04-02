function ramen(gramsOfChiliPowder) {
  var answer = "";
  // Only change code below this line

switch(gramsOfChiliPowder) {
  case 10:
  case 20:
  case 30:
    answer = "Mild";
    break;
  case 40:
  case 50:
  case 60:
  case 70:
  case 80:
  case 90:
    answer = "Spicy";
    break;
  case 100:
  case 110:
  case 120:
    answer = "Needs more, but now it's tasty!";
    break;
}

  // Only change code above this line
  return answer;
}

ramen(100);
