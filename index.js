const core = require('@actions/core');
const github = require('@actions/github');

try { 
    const changesInput = core.getInput('github-output');
    console.log(`Changes : ${changesInput}`); 
    let changes = changesInput.split(" ");
    let filenames;

    for(let i = 0; i < changes.length; i++){
        filenames = changes[i].replace(/^.*[\\\/]/, '');
        console.log(`File Names : ${filenames}`); 
    }

    const auditFiles = core.getInput('files-to-check');
    console.log(`Hello ${auditFiles}!`); 

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}