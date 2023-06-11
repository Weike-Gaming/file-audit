const core = require('@actions/core');
const github = require('@actions/github');

function findSimilarValues(array1, array2) {
    // Create a set from array1
    const set = new Set(array1);
  
    // Find all common values in array2
    const similarValues = array2.filter(value => set.has(value));
  
    return similarValues;
}

try { 
    const changesInput = core.getInput('github-output');
    console.log(`Changes : ${changesInput}`); 
    let changes = changesInput.split(" ");
    let filenames;

    for(let i = 0; i < changes.length; i++){
        filenames = changes[i].replace(/^.*[\\\/]/, '');
        console.log(`File Names : ${filenames}`); 
    }

    const auditFilesInput = core.getInput('files-to-check');
    const auditFiles = auditFilesInput.split(" ");

    for (let i = 0; i < auditFiles.length; i++) {
        const element = auditFiles[i];
        console.log(`element : ${element}`);   
    }

    const similar = findSimilarValues(filenames, auditFiles);
    const combined = similar.join(' ');

    if(similar.length > 0) {
        core.setFailed(combined);
    }
} catch (error) {
    core.setFailed(error.message);
}