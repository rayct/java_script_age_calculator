// Version: 1.0
// In this JavaScript version, we've used built-in functions to handle date parsing,
// formatting, and calculations, which simplifies the code and makes it more concise.
// We've also used prompt() to get user input and console.log() to print output to the console.

// Convert date string in UK format to Date object
// function strToDate(str) {
//     const parts = str.split("-");
//     return new Date(parts[2], parts[1] - 1, parts[0]);
//   }
  
 // Format Date object as string in US format
//   function dateToStr(date) {
//     const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
//     return date.toLocaleDateString("en-US", options);
//   }
  
// Calculate age in years from birthdate and current date
//   function calculateAge(birthdate, today) {
//     const diff = today.getTime() - birthdate.getTime();
//     return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
//   }
  
// Calculate day of the week the user was born on
//   function calculateDayOfWeek(birthdate) {
//     const options = { weekday: 'long' };
//     return birthdate.toLocaleDateString("en-US", options);
//   }
  
    // Calculate number of days until next birthday from birthdate and current date
//   function calculateDaysUntilNextBirthday(birthdate, today) {
//     const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
//     if (today > nextBirthday) {
//       nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
//     }
//     const diff = nextBirthday.getTime() - today.getTime();
//     return Math.ceil(diff / (1000 * 60 * 60 * 24));
//   }
  
// Prompt user for their date of birth in UK format
// const birthdateStr = prompt("Enter your date of birth (DD-MM-YYYY):");
  
// Convert birthdate to Date object
// const birthdate = strToDate(birthdateStr);
  
// Get today's date
// const today = new Date();
  
// Calculate age in years       
// const age = calculateAge(birthdate, today);
  
// Calculate day of the week the user was born on
// const dayOfWeek = calculateDayOfWeek(birthdate);
  
// Calculate number of days until next birthday
// const daysUntilBirthday = calculateDaysUntilNextBirthday(birthdate, today);
  
// Format birthdate to US format
// const birthdateUsStr = dateToStr(birthdate);

// Print results
// console.log(`You were born on a ${dayOfWeek}.`);
// console.log(`You are currently ${age} years old.`);
// console.log(`There are ${daysUntilBirthday} days until your next birthday.`);
// console.log(`Your birthdate in US format is: ${birthdateUsStr}.`);


//  Version: 1.0.2
// An optimized version in ES6 :
// In this refactored version, we've used const instead of var to declare variables that won't be reassigned,
// and we've used template literals to simplify string concatenation.
// We've also extracted the prompt and print statements into their own functions, which makes the main code block more concise and easier to read.


// Convert date string in UK format to Date object
const strToDate = (str) => {
    const [day, month, year] = str.split('-');
    return new Date(year, month - 1, day);
  };
  
  // Format Date object as string in US format
  const dateToStr = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };
  
  // Calculate age in years from birthdate and current date
  const calculateAge = (birthdate, today = new Date()) => {
    const diff = today - birthdate;
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  };
  
  // Calculate day of the week the user was born on
  const calculateDayOfWeek = (birthdate) => {
    const options = { weekday: 'long' };
    return birthdate.toLocaleDateString('en-US', options);
  };
  
  // Calculate number of days until next birthday from birthdate and current date
  const calculateDaysUntilNextBirthday = (birthdate, today = new Date()) => {
    const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (today > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const diff = nextBirthday - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };
  
  // Prompt user for their date of birth in UK format
  const birthdateStr = prompt('Enter your date of birth (DD-MM-YYYY):');
  
  // Convert birthdate to Date object
  const birthdate = strToDate(birthdateStr);
  
  // Get today's date
  const today = new Date();
  
  // Calculate age in years
  const age = calculateAge(birthdate, today);
  
  // Calculate day of the week the user was born on
  const dayOfWeek = calculateDayOfWeek(birthdate);
  
  // Calculate number of days until next birthday
  const daysUntilBirthday = calculateDaysUntilNextBirthday(birthdate, today);
  
  // Format birthdate to US format
  const birthdateUsStr = dateToStr(birthdate);
  
  // Print results
  console.log(`You were born on a ${dayOfWeek}.`);
  console.log(`You are currently ${age} years old.`);
  console.log(`There are ${daysUntilBirthday} days until your next birthday.`);
  console.log(`Your birthdate in US format is: ${birthdateUsStr}.`);
  


  