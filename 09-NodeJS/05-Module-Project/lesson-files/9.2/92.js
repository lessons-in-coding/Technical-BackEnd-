// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());
// =========================

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));
// =========================

// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
//   };
//   console.log(generatePage('Jane', 'janehub')); 
// =========================

//   const profileDataArgs = process.argv.slice(2, process.argv.length);

// //   const name = profileDataArgs[0];
// //   const github = profileDataArgs[1];
//   const [name, github] = profileDataArgs;

//   const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
//   };
//   console.log(name, github);
//   console.log(generatePage(name, github));
  // =========================

//   const profileDataArgs = process.argv.slice(2, process.argv.length);

//     const [name, github] = profileDataArgs;
  
//     const generatePage = (userName, githubName) => {
//   return `
//   <!DOCTYPE html> 
//   <html lang="en"> 
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//   </head>

//   <body>
//     <h1>${name}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
//   </body>
//   </html>
//   `;
// };

//     console.log(name, github);
//     console.log(generatePage(name, github));
    // =========================

//     const fs = require('fs');

//     const profileDataArgs = process.argv.slice(2, process.argv.length);

//       const [name, github] = profileDataArgs;
    
//       const generatePage = (userName, githubName) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//     </head>
  
//     <body>
//       <h1>${name}</h1>
//       <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
//   };
  
    // fs.writeFile('index.html', generatePage(name, github), err => {
    //     if (err) throw err;
    //     console.log('Portpolio complete! Check out index.html to see the output!')
    // })


// ========================

// const fs = require('fs');
// const math = require('./math')
// console.log(math.add (2,3));

// With 'utf8', returns a string:
// fs.readFile('./message.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     };
//     console.log(data); // Logs the content of the file as a string
// });

// Without 'utf8', returns a Buffer:
// fs.readFile('./message.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data); // Logs a Buffer
// });


// const fs = require('fs').promises;


// fs.readFile('./message.txt', 'utf8')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// ========================


const fs = require('fs');

const generatePage = require('./src/page-template'); //နေရာချင်းလဲထားလိုက်လို့

const profileDataArgs = process.argv.slice(2);

// console.log(profileDataArgs);

const [name, github] = profileDataArgs;

// console.log(name, github);

const pageHTML = generatePage(name, github);

// // const generatePage = (name, github) => {
// //     return `
// //     <!DOCTYPE html> 
// //     <html lang="en"> 
// //     <head>
// //       <meta charset="UTF-8">
// //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //       <meta http-equiv="X-UA-Compatible" content="ie=edge">
// //       <title>Portfolio Demo</title>
// //     </head>
  
// //     <body>
// //       <h1>${name}</h1>
// //       <h2><a href="https://github.com/${github}">Github</a></h2>
// //     </body>
// //     </html>
// //     `;
// //   };

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});