function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

checkAge(20) // возвращает "You are an adult"
checkAge(8) // возвращает "You are a minor"
checkAge(14) // возвращает "You are a minor"
checkAge(38)  //возвращает "You are an adult"

// ==============================================================================

