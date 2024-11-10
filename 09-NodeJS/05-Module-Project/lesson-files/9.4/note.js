// 1.	promptUser():
// •	When promptUser() is called, it triggers a series of prompts that ask the user for their name, GitHub username, and optional “About” info.
// •	promptUser() returns a Promise containing this data as an object.
// •	Since promptUser() is the first function in the chain, this object (with user information) becomes the portfolioData passed into promptProject.


// 2.	.then(promptProject):
// •	In the .then(promptProject) part, promptProject is called with the portfolioData object containing the user’s information.
// •	Inside promptProject, another set of prompts is shown, this time for gathering details about the user’s projects.
// •	If portfolioData.projects doesn’t already exist, promptProject initializes it as an empty array. Then, it collects each project’s data and pushes it into this projects array.
// Here’s how it’s stored:
// •	When the user enters information for a project, each project’s data is added to portfolioData.projects as a separate object in the array.
// •	If the user chooses to add another project, promptProject recursively calls itself with the updated portfolioData. This cycle continues until the user decides not to add more projects.


// 3.	Storing and Passing Data Between Functions:
// // promptUser initially returns an object like this:
// // {
// //   name: "User Name",
// //   github: "UserGitHub",
// //   about: "About the user",
// //   projects: [] // This will be filled in by promptProject
// // }

// // Each time a project is added in promptProject, the portfolioData.projects array grows. By the time the user has finished adding all projects, portfolioData looks something like this:
// // {
// //   name: "User Name",
// //   github: "UserGitHub",
// //   about: "About the user",
// //   projects: [
// //     {
// //       name: "Project 1",
// //       description: "Description of project 1",
// //       languages: ["JavaScript", "HTML"],
// //       link: "GitHub link for project 1",
// //       feature: true
// //     },
// //     {
// //       name: "Project 2",
// //       description: "Description of project 2",
// //       languages: ["CSS", "Node"],
// //       link: "GitHub link for project 2",
// //       feature: false
// //     }
// //   ]
// // }

// 4.	Final .then():
// •	After all prompts are completed, portfolioData is passed to the last .then() function, which calls generatePage(portfolioData).
// •	generatePage uses this complete portfolioData to generate an HTML string based on all collected information, and this HTML is then saved to index.html by fs.writeFile.

// In summary:

// •	Each time promptProject completes, the project data is saved directly into portfolioData.projects.
// •	portfolioData is passed down through the .then() chain, holding all the user and project data by the end, which generatePage then uses to create the HTML file.


