let count = 0;
console.log('count module loaded');

function increaseCount() {
  count++;
}

function getCount() {
  return count;
}

module.exports = { increaseCount, getCount };
