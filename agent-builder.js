const { createAppModularizationPrompt } = require("./appPromptGenerator");
const { prompt } = require("./prompt");

(async () => {
  const message = createAppModularizationPrompt(`
      A simple canvas game in html that places pixels when clicked.
  `);
  const encodedPlan = await prompt(message);
  console.log(encodedPlan);
})();
