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
    
    let changes = changesInput.split(" ");
    let filenames;

    for(let i = 0; i < changes.length; i++){
        filenames[i] = changes[i].replace(/^.*[\\\/]/, ''); 
    }

    const auditFilesInput = core.getInput('files-to-check');
    const auditFiles = auditFilesInput.split(" ");
 
    const similar = findSimilarValues(filenames, auditFiles);

    if(similar.length > 0) {
        const combined = similar.join(' '); 
        core.setFailed(combined);
    }
} catch (error) {
    core.setFailed(error.message);
}