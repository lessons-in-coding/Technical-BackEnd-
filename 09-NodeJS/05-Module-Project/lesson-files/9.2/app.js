const fs = require('fs');

const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});

/*
//review from 9.1
  - command line arguments - (message of it)

//About
  - CLI က နာမည် နဲ့ github အကောင့်ကို ယူ
  - အသင့်ရှိပြီး ဖိုင်ထဲထည့်, index.html ဖိုင်ကို ထုတ်လုပ်ပေးသည်

//SetUp the structure
  - create app.js
    ```
    const fs = require('fs');

    const generatePage = require('./src/page-template');

    const profileDataArgs = process.argv.slice(2);

    console.log(profileDataArgs);

    const [name, github] = profileDataArgs;

    console.log(name, github);

    const pageHTML = generatePage(name, github);

    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw err;

      console.log('Portfolio complete! Check out index.html to see the output!');
    });
    ```

  // Code Explanation
    - fs setup (message of it)
    - create generator using from the ./src/page-template

    - to use CLI arguments from the CLI
      - process.argv.slice(2) //see details in 9.1
      - create destructure for the args with name and github account
        - const [name, github] = profileDataArgs;
      - generate the file using the args from the destructure
        - const pageHTML = generatePage(name, github);
      - write file of index.html using fs.writeFile
        - ('fileName', generatePage, cb for err)
        ```
        fs.writeFile('./index.html', pageHTML, err => {
          if (err) throw err;

          console.log('Portfolio complete! Check out index.html to see the output!');
        });
        ```

  // Run the app
    - node app.js yourName yourGitHubName

  // Output
    - see the index.html

  // Q&A
    - file not being issued
      - uiuiu
    - name and github name not included
      - oioioioi
*/
