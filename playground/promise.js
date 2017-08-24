var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};
// will still call second thne because error is resolved in the second then 
// but will return undefined
// asyncAdd(5, "7")
//   .then((res) => {
//     console.log('Results: ', res);
//     return asyncAdd(res, 33);
//   }, (errorMessage) => {
//     console.log(errorMessage);
//   })
//   .then((res) => {
//     console.log('Should be 45', res);
//   }, (errorMessage) =>{
//     console.log(errorMessage);
//   });


// .catch handle the promise if all goes well for both if not 
// the errorMessage will be returned 
  asyncAdd(5, 7)
    .then((res) => {
      console.log('Results: ', res);
      return asyncAdd(res, 33);
    })
    .then((res) => {
      console.log('Should be 45', res);
    })
    .catch((errorMessage) => {
      console.log(errorMessage);
    });

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey. It Worked');
//     reject('Unable to fulfill promise');
//   }, 2500);
// });

// somePromise
//   .then((message) => {
//     console.log('Success:', message);
//   }, (errorMessage) => {
//     console.log('Error:', errorMessage);
//   });