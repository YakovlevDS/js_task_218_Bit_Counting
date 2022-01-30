// solution 1
const countBits = n=>n.toString(2).split('0').join('').length
// solution 2
const countBits = function(n) {
      return n.toString(2).replace(/0/g,'').length;
    };

// solution 3
const countBits = n => n.toString(2)
                        .split('')
                        .filter(ele => ele == 1)
                        .length
// solution 4

var countBits = function(n) {
      return (n.toString(2).match(/1/g) || []).length;
    };

console.log(countBits(12345));
