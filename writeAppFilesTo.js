const fs = require('fs');

function writeAppFilesTo(filesArray, directoryName) {
  // Create directory if it doesn't exist
  if (!fs.existsSync(directoryName)) {
    fs.mkdirSync(directoryName);
  }

  // Write files to the directory
  filesArray.forEach((file) => {
    const path = `${directoryName}/${file.fileName}`;
    fs.writeFileSync(path, file.source, 'utf-8');
  });
}

module.exports = { writeAppFilesTo };
