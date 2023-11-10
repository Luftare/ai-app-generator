function parseAppFiles(input) {
  if (input.indexOf("#FILE#") === -1) {
    return null;
  }
  const fileSections = input.split("#FILE#").splice(1); // split input string on #FILE# and remove first empty string
  const parsedData = fileSections.map((section) => {
    const [fileName, ...source] = section.split("\n"); // separate file name and source code
    return { fileName, source: source.join("\n") }; // create object and join source code array
  });
  return parsedData;
}

module.exports = { parseAppFiles };
