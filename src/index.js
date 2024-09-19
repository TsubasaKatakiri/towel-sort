
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const output = []
  if(matrix){
    for(let i = 0; i < matrix.length; i++){
      if(i % 2 === 1) output.push(matrix[i].reverse());
      else output.push(matrix[i]);
    }
  }
  return output.flat();
}
