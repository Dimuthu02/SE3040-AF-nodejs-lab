const myPromise = new Promise((resolve, reject) => {
  let condition = true; // Try changing to false
  if (condition) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
