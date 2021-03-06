const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
let managerList = [];
let engineerList = [];
let internList = [];


const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function userPrompt() {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the employees name?"
    },
    {
        type: "list",
        name: "jobDescription",
        message: "What role is your new employee joining?",
        choices: ['Manager', 'Engineer', 'Intern']
    }
    ]
    )
        .then((results) => {
            // console.log(results.jobDescription)
            // console.log(results.name)
            switch (results.jobDescription) {
                case 'Manager':
                    inquirer.prompt([{
                        type: "input",
                        name: "id",
                        message: "What is the Managers ID number?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the Managers email?"
                    },
                    {
                        type: "input",
                        name: "managerNumber",
                        message: "What is the Managers office number?"
                    },
                    {
                        type: "list",
                        name: "add",
                        message: "Do you want to add another employee?",
                        choices: ['yes', 'no']
                    }
                    ])

                        .then((resultsManager) => {
                            // console.log(resultsManager.id)
                            // console.log(resultsManager.add)
                            const newMan = new Manager(results.name, resultsManager.id, resultsManager.email, resultsManager.managerNumber)

                            managerList.push(newMan)

                            if (resultsManager.add === 'yes') {      

                                userPrompt();    

                            } else {
                                
                                // let manL = render(managerList)
                                // //manL goes in listofPeople() spot
                                // fs.writeFile(outputPath, manL, (err) => {
                                //     if (err) throw (err)
                                // })

                                writeArea();

                            }


                        })
                    break;
                case 'Engineer':
                    inquirer.prompt([{
                        type: "input",
                        name: "id",
                        message: "What is the Engineers ID number?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the Engineers email?"
                    },
                    {
                        type: "input",
                        name: "engineerGitHub",
                        message: "What is the Engineers github account?"
                    },
                    {
                        type: "list",
                        name: "add",
                        message: "Do you want to add another employee?",
                        choices: ['yes', 'no']
                    }
                    ])
                        .then((resultsEngineer) => {
                            const newEng = new Engineer(results.name, resultsEngineer.id, resultsEngineer.email, resultsEngineer.engineerGitHub)

                            engineerList.push(newEng)

                            if (resultsEngineer.add === 'yes') {
                                
                                userPrompt();
                                
                            } else {

                                // let engL = render(engineerList)

                                // fs.writeFile(outputPath, engL, (err) => {
                                //     if (err) throw (err)
                                // })

                                writeArea();

                            }


                        })

                    break;
                case 'Intern':
                    inquirer.prompt([{
                        type: "input",
                        name: "id",
                        message: "What is the Intern's ID number?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the Intern's email?"
                    },
                    {
                        type: "input",
                        name: "internSchool",
                        message: "What school did the intern go to?"
                    },
                    {
                        type: "list",
                        name: "add",
                        message: "Do you want to add another employee?",
                        choices: ['yes', 'no']
                    }
                    ])
                        .then((resultsIntern) => {
                            const newInt = new Intern(results.name, resultsIntern.id, resultsIntern.email, resultsIntern.internSchool)

                            internList.push(newInt)

                            if (resultsIntern.add === 'yes') {
                              
                                userPrompt();
                                                                
                            } else {

                                // let intL = render(internList)

                                // fs.writeFile(outputPath, intL, (err) => {
                                //     if (err) throw (err);
                                // })

                                writeArea();

                            }
                        })
            }
        })
}
userPrompt()

function writeArea(){
    // let manL = render(managerList)
    // let engL = render(engineerList)
    // let intL = render(internList)
    // const list = [manL, engL, intL]
    // or push all employees to one list
    const list = managerList.concat(engineerList, internList)
    let html = render(list)

    fs.writeFile(outputPath, html, (err)=>{
        if (err) throw (err)
    })
    
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
