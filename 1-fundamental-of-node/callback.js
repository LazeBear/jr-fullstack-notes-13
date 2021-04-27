function callback(time) {
  console.log(time);
}

function foo(cb) {
  setTimeout(() => {
    cb(new Date());
  }, 1000);
}
throw new Error();
callback(new Date());
foo(callback);

// callback hell
