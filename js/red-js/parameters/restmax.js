const max = function (...values) {
  // console.log(values instanceof Array);
  // let large = values[0];
  // for (let i = 0; i < values.length; i++) {
  //   if (values[i] > large) {
  //     large = values[i];
  //   }
  // }
  // return large;
  return values.reduce((large, e) => large > e ? large : e, values[0]);
};
console.log(max(2, 1, 7, 4));