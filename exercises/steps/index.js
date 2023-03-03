// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  debugger;
  // find prime value -- 2n - 1
  //find middle value -- m.
  // interate based on paramter (n)
  // set min and max based on middle (+-index - 1)
  // interate based on prime value
  // if(min <= index <= max)  += #
  // else += ' ';

  const prime = 2 * n - 1;
  const medium = Math.ceil(prime / 2);
  let pyramid = '';

  for (let i = 0; i < n; i++) {
    let min = medium - i;
    let max = medium + i;

    for (let j = 0; j < prime; j++) {
      if (min <= j && j <= max) {
        pyramid += '#';
      } else {
        pyramid += ' ';
      }
    }

    console.log(pyramid);
  }
}

// 1 #
// 2. add space
steps(2);

module.exports = steps;
