function asyncSum(a, b, cb) {
  setTimeout(() => {
    // console.log(a + b);
    cb(a + b);
  }, Math.random() * 1000);
}

// asyncSum(1, 1, () => {
//   asyncSum(1, 2, () => {
//     asyncSum(1, 3);
//   });
// });

// three states
// pending, full-filled, rejected
function promiseSum(a, b) {
  // resolve, reject
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(a + b);
      // rej('error here');
    }, Math.random() * 1000);
  });
}

// promiseSum(1, 1)
//   .then(
//     (result) => {
//       console.log('result', result);
//       console.log('error', reject);
//       return 1;
//     },
//     (error) => {
//       return 'error';
//     }
//   )
//   .catch((error) => {
//     return 'error';
//   })
//   .then((number) => {
//     // number === 1;
//     console.log(number);
//     return 2;
//   })
//   .catch((error) => {
//     console.log('error', error);
//   });

// syntax sugar
async function asyncCall() {
  try {
    // let result = await promiseSum(1, 2);
    // result = await promiseSum(result, 2);
    // result = await promiseSum(result, 3);
    // console.log(result);
    // const a = await foo();
    // const b = await bar();
    // a + b;
  } catch (e) {
    console.log(e);
  }
}

asyncCall();
