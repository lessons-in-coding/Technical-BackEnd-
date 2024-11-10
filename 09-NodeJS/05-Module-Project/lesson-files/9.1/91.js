// const students = ["A", "B", "C", "D"];
// students.push('Zaw');
// console.log(students.slice(2, -1))

// const student = {
//     name: 'Zaw',
//     age: 21
// }
// student.occupation = 'Developer';
// student.age = 22;
// console.log(student);
// ==================================

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs)
// ==================================

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
//   };
  
//   printProfileData(profileDataArgs);
//   printProfileData("Min", "Dev");
// ==================================

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//       console.log(profileDataArr[i]);
//     }
//   };

//   printProfileData(profileDataArgs);
// ==================================

// no problem
  // let message = 'Hello Node!';
  // message = 'Hello ES6!';
  
  // let sum = 5 + 3;
  // sum += 1;

// problem
// const message = 'Hello Node!';
// message = 'Hello ES6!';

// const sum = 5 + 3;
// sum += 1;
// ==================================

// const message = 'Hello Node!';

// if (true === true) {
//   const message = 'Hello ES6!';
//   let sum = 5;
//   sum += 10;
//   console.log(message);
//   console.log(sum);
// }

// console.log(message);
// console.log(sum); //problem
// ==================================

// Var သည် function-scopped-ပါ။ redeclare လုပ်သည်ဖြစ်စေ မလုပ်သည်ဖြစ်စေ block ရဲ့ အပြင်မှာရှိတဲ့အရာကို block ထဲက အရာက update-လုပ်လိုက်မှာပါ။
// ဒါပေမယ့် Let-က block-scopped-ပါ။ redeclare လုပ်မှသာ update-လုပ်မှာပါ။
// ==================================

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)
//     });
//   };
//   printProfileData(profileDataArgs);