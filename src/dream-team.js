const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let name = '';
  let sortArr = members.sort();
  for (let i of sortArr) {
    if (typeof i == 'string') {
      i=i.trim();
      name += i[0].toUpperCase();
    }
  }
  let nameLetters = name.replace(/[0-9]/g, '');
  return nameLetters.split('').sort().join('');;

};