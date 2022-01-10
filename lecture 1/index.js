const { readJson, writeJson } = require("./utils");

const [, , command, arg1] = process.argv;

const people = readJson("data.json");

switch (command) {
    case "read":
        console.log(people);
        break;
    case "write":
        people.push({ name: arg1 })
        writeJson("data.json", people)
        break;
    case "delete":
        // index // name 
        console.log(command);
        console.log(typeof +arg1);

        break;
    case "edit":

    default:
        break;
}
