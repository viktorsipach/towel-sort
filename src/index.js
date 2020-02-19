
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  const result = [];
  matrix.forEach((item,index) => {
    if (index % 2 !== 0) {
      result.push(item.reverse());
    } else {
      result.push(item);
    }
  });
  return result.flat();
}
