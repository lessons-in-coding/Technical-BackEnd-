/*
// 1.	The generateAbout Function:
•	This function generates an HTML snippet for the “About” section.
•	It takes aboutText as an argument, which holds a user-provided description.
•	If aboutText is empty (falsy), the function returns an empty string (''). Otherwise, it returns an HTML <section> block with a heading and the text provided in aboutText.
*/

/*
// 	2.	The generateProjects Function:
•	This function generates the “Projects” section of the page.
•	It takes an array of project objects (projectsArr) and creates two groups of project cards based on whether they are “featured” or not.

•	Filtering and Mapping:
==========================
•	It uses filter and map methods to separate the projects into two groups, featured and non-featured:
•	Featured Projects: projectsArr.filter(({ feature }) => feature): Filters projects where the feature property is true.
•	Non-Featured Projects: projectsArr.filter(({ feature }) => !feature): Filters projects where feature is false.
•	HTML Structure for Each Project:
•	Each project is represented by an HTML <div> containing its title, technologies, description, and a link to GitHub.
•	Featured Projects are given a full-width column (col-12), while Non-Featured Projects use a half-width column (col-12 col-md-6).
•	Final Join Operation: Each mapped array (for featured and non-featured projects) ends with .join(''), which joins all HTML strings in the array into a single string without commas, making it a continuous HTML block.
*/

/*
// 	3.	Exported Template Function:
	•	This is the main function that generates the complete HTML page.

	•	Destructuring Data:
    ======================
	•	templateData (provided from an external source) is destructured into projects, about, and header. This allows each data section to be accessed directly.

	•	HTML Template Structure:
    ===========================
	•	The function constructs the HTML structure, including a header, main content (with the About and Projects sections), and a footer.
	•	The ${generateAbout(about)} call generates and inserts the “About” section.
	•	The ${generateProjects(projects)} call generates and inserts the “Projects” section.
	•	The footer includes the current year and user’s name dynamically with ${new Date().getFullYear()} and ${header.name}.
*/

/*
// 	•	Purpose:
================
	•	generateAbout is a simple function that only creates an “About Me” section if content exists. Its logic is straightforward since there’s no complex structure or filtering required.
	•	generateProjects is more complex, handling multiple projects, filtering by the feature property, and formatting each project’s HTML differently depending on whether it’s featured.

	•	Data Handling:
    =================
	•	generateAbout deals with a single string (aboutText) and has an if check to handle missing content.
	•	generateProjects works with an array of objects (projectsArr), using filter and map to selectively format and display projects.
*/

// This approach separates the HTML generation into modular functions, making the code organized and allowing individual components to be tested or modified independently.

// ***** ===== *****

/*
// 1. .filter(({ feature }) => feature)

	•	Purpose: This filter method is used to keep only the projects where feature is true.
	•	Syntax Explanation:
    ======================
	•	projectsArr.filter(({ feature }) => feature) is a shorthand for projectsArr.filter(project => project.feature).
	•	The { feature } in the parameter is destructuring. It pulls the feature property directly from each project object in the array.
	•	The filter checks if feature is true and only includes those projects in the result.

// Example:
const projectsArr = [
    { name: 'Project 1', feature: true },
    { name: 'Project 2', feature: false },
  ];
  
   const featuredProjects = projectsArr.filter(({ feature }) => feature);
  // Result: [{ name: 'Project 1', feature: true }]
*/

/*
//   2. .map(({ name, description, languages, link }) => { ... })

  •	Purpose: This map method transforms each project into an HTML snippet.
  •	Syntax Explanation:
  ====================
  •	map(({ name, description, languages, link }) => { ... }) uses destructuring in the parameter to directly extract name, description, languages, and link properties from each project object.
  •	The arrow function then builds and returns a string of HTML using these values for each project.

// Example:
const projectsArr = [
    { name: 'Project 1', description: 'Desc 1', languages: ['JavaScript'], link: 'link1' },
    { name: 'Project 2', description: 'Desc 2', languages: ['HTML', 'CSS'], link: 'link2' },
  ];
  
    const projectHTML = projectsArr.map(({ name, description, languages, link }) => {
    return `<div>${name} - ${description} - ${languages.join(', ')}</div>`;
  });
  // Result: [
  //   "<div>Project 1 - Desc 1 - JavaScript</div>",
  //   "<div>Project 2 - Desc 2 - HTML, CSS</div>"
  // ]
  */

/*
//   3. The .join('') After the map Chains for Featured and Non-Featured Projects

  •	Purpose: .join('') combines all the HTML strings in the array produced by map into a single string without adding any separator.
  •	Why .join('') Instead of .join(' '):
  •	Using .join('') ensures there’s no extra whitespace or commas between the HTML snippets.
  •	If you used .join(' '), it would add a single space between each HTML block. Here, it’s unnecessary because each block already has its own spacing within the HTML layout.

// Example:
const projectHTMLArr = [
    '<div>Project 1</div>',
    '<div>Project 2</div>'
  ];
  
  const combinedHTML = projectHTMLArr.join('');
  // Result: "<div>Project 1</div><div>Project 2</div>"
  
  const spacedHTML = projectHTMLArr.join(' ');
  // Result: "<div>Project 1</div> <div>Project 2</div>"
*/

/*
//   4. const { projects, about, ...header } = templateData;

  •	Purpose: This line uses destructuring assignment to extract projects and about properties from templateData, while capturing any remaining properties in an object called header.
  •	Explanation:
  =============
  •	The { projects, about, ...header } syntax means:
  •	projects will contain templateData.projects.
  •	about will contain templateData.about.
  •	header will contain all other properties that are not projects or about.
  •	The ...header syntax (known as the “rest operator”) gathers any extra properties from templateData and assigns them to header.

// Example:
const templateData = {
    projects: ['Project 1', 'Project 2'],
    about: 'About me text',
    name: 'John Doe',
    github: 'johndoe'
  };
  
  const { projects, about, ...header } = templateData;
  
  // Result:
  // projects = ['Project 1', 'Project 2']
  // about = 'About me text'
  // header = { name: 'John Doe', github: 'johndoe' }
*/

//   In this template generator:

//   •	projects and about are specifically assigned because they are needed individually.
//   •	header captures any extra properties (e.g., name, github) for use in the template’s header section.

// ========================


// Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables. Instead of accessing each value or property individually, destructuring allows us to unpack the values into variables in a single, more readable line of code.

// Why Use Destructuring?

// 	1.	Readability: Makes your code cleaner and easier to understand.
// 	2.	Convenience: Lets you assign values to multiple variables at once, avoiding repetitive code.
// 	3.	Flexibility: Allows you to quickly extract only the properties or elements you need.

/*
// Destructuring with Arrays

// With arrays, destructuring assigns each element to a corresponding variable by position.

// Example
const colors = ['red', 'green', 'blue'];

// Without destructuring:
const firstColor = colors[0];
const secondColor = colors[1];

// With destructuring:
const [firstColor, secondColor] = colors;

// console.log(firstColor); // 'red'
// console.log(secondColor); // 'green'

// Here, firstColor gets colors[0] and secondColor gets colors[1]. This is simpler and cleaner than assigning each individually.



// Destructuring with Objects

// With objects, destructuring allows you to pull out specific properties by name.

// Example
const user = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
  };
  
  // Without destructuring:
  const name = user.name;
  const age = user.age;
  
  // With destructuring:
  const { name, age } = user;
  
//   console.log(name); // 'Alice'
//   console.log(age);  // 25
*/

//   Here, { name, age } tells JavaScript to create variables name and age with the values from user.name and user.age. The variable names must match the object’s property names.

/*
// Advanced Destructuring: Rest and Default Values

// 	1.	Rest Operator (...): Used in destructuring to gather the remaining items.
    const user = {
        name: 'Alice',
        age: 25,
        email: 'alice@example.com'
      };
      
      const { name, ...details } = user;
      console.log(details); // { age: 25, email: 'alice@example.com' }

//       2.	Default Values: Provide a default if a value is undefined.
      const user = { name: 'Alice' };

const { name, age = 30 } = user;
console.log(age); // 30 (default, since user.age is undefined)

// Practical Use Cases

// Destructuring is often used when:

	•	Function Arguments: Simplifies parameter extraction in functions.
	•	API Responses: Allows you to pull only the needed data from large objects.
	•	Template Generation: Makes it easy to unpack specific properties for dynamic templates, as in your example.

// Overall, destructuring improves the clarity and efficiency of your code by making it easier to unpack values.
*/

// ============================

/*
// In JavaScript, a default value is provided as a fallback. This value is used only if the variable is undefined. So, it’s more like a backup value than something “fixed.”

// How Default Values Work

// When you set a default value in destructuring or function parameters, JavaScript will use that value if no value is provided or if the value is explicitly undefined. However, if another value is given, that value takes precedence over the default.

// Example with Destructuring
const user = { name: 'Alice' };

const { name, age = 30 } = user;
console.log(age); // 30, because user.age is undefined


// Here, age = 30 means that age will be 30 if user doesn’t have an age property.

// Example with Functions

// Default values are also common in function parameters.

function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }
  
  greet('Alice'); // Hello, Alice!
  greet();        // Hello, Guest!

//   If you call greet() without passing an argument, name will use the default value, “Guest.”

//   Key Points
  
//       •	Default values are not “fixed” but rather fallbacks used only if the variable is undefined.
//       •	If a value is provided, it overrides the default.
//       •	null does not trigger the default because it’s considered a valid value. Only undefined does.
  
//   Why Use Default Values?
  
//   Defaults are useful for ensuring a function or variable has a meaningful value, especially if you’re not sure what values might come in, like in API responses or user input.
*/