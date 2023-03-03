// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let stringMap1 = convertToStringMap(stringA);
  let stringMap2 = convertToStringMap(stringB);
  let flag = true;

  if (Object.keys(stringA).length !== Object.keys(stringB).length) {
    return false;
  }

  for (let key in stringMap1) {
    if (stringMap1[key] !== stringMap2[key]) {
      flag = false;
      break;
    }
  }

  return flag;
}

function convertToStringMap(string) {
  // 1. remove speical character or space
  let tempString = string.replace(/[^\w]/g, '').toLowerCase();
  let stringMap = {};

  for (let char of tempString) {
    stringMap[char] = stringMap[char] ? stringMap[char] + 1 : 1;
  }
  console.log(stringMap);
  return stringMap;
}

module.exports = anagrams;

// 다른 방식

// 밑의 함수를 이융해서 정리한 배열을 비교하게 되면 만약 둘이 똑같다면 true아니면 false를 던지게됨.
// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }

// array를 sort하게 되면 chracter 나 숫자는 순서에따라 정리가 됨
// function cleanString(str) {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }
