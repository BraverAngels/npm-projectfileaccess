// ProjectFileAccess.mjs -- Node.js implementation of a project file management API

// Assumes project files that can be read are stored in a "datafiles" subdirectory.

import * as fs from 'fs/promises';

export {getFileContent}

async function getFileContent (logicalFileName) {
  const relativeFilePath =
    `./datafiles/${logicalFileName}`;
  // console.log (`getFileContent -- logicalFileName=${logicalFileName}`);
  try {
    const fileContent =
      await fs.readFile(relativeFilePath,"utf8"); 
    // console.log (`getFileContent -- fileContent=
    // ${fileContent}`);
    return fileContent;
  } catch (err) {
    console.error(`getFileContent -- ${err.stack}`);
    throw Error (`getFileContent -- failed to read file with logicalFileName=${logicalFileName}`);
  }
}
