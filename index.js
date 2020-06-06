const list = [1, 2, 3, 4, 5];

function getSubList(givenList, lowerBound, upperBound) {
  return givenList.slice(
    lowerBound,
    lowerBound === upperBound ? upperBound + 1 : upperBound,
  );
}

// function sum(lowerBound, upperBound) {
//   const sublist = getSubList(list, lowerBound, upperBound);
//   return sublist.reduce((accumulator, number) => accumulator + number, 0);
// }
function sum(lowerBound, upperBound) {
  return list.slice(
    lowerBound,
    lowerBound === upperBound ? upperBound + 1 : upperBound,
  ).reduce((accumulator, number) => accumulator + number, 0);
}

module.exports = {
  sum,
  getSubList,
};
