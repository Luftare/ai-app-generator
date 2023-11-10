const crypto = require("crypto");
const fs = require("fs");

const specs = require("./specs.json");

const { createAppGeneratorPrompt } = require("./appPromptGenerator");
const { parseAppFiles } = require("./parseAppFiles");
const { writeAppFilesTo } = require("./writeAppFilesTo");
const { prompt } = require("./prompt");

(async () => {
  console.log("Parsing prompt...");
  const message = createAppGeneratorPrompt(
    specs.description,
    specs.features,
    specs.technologies
  );
  console.log("Waiting for the response...");
  const encodedAppFiles = await prompt(message);
  console.log("Processing the response...");
  const appFiles = parseAppFiles(encodedAppFiles);
  const uuid = crypto.randomUUID();
  const outputRootDirectory = "./output";
  const outputDirectory = `${outputRootDirectory}/${uuid}`;

  if (!fs.existsSync(outputRootDirectory)) {
    fs.mkdirSync(outputRootDirectory);
  }

  console.log("Copying specs file...");
  writeAppFilesTo(
    [{ fileName: "specs.json", source: JSON.stringify(specs, null, 2) }],
    outputDirectory
  );

  if (appFiles) {
    console.log("Creating app files...");
    writeAppFilesTo(appFiles, outputDirectory);
  } else {
    console.log("Unknown response: creating a text file...");
    writeAppFilesTo(
      [{ fileName: "unknown-response.txt", source: encodedAppFiles }],
      outputDirectory
    );
  }

  console.log(`
Your app files are in output folder with uuid:

${uuid}

`);
})();
