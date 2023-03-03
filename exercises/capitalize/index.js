// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  if (!str) {
    return '';
  }

  const strArray = str.split(' ').map((word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  });

  return strArray.join(' ');
}

module.exports = capitalize;

// alternative
// function capitalize(str) {
//     return str.replace(/\b\w/g, function(char) {
//       return char.toUpperCase();
//     });
//   }

//that call back function paramter is the matched character
