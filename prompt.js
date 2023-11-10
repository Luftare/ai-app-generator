require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

async function prompt(message) {
  const configuration = new Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });
  return completion.data.choices[0].message.content;
}

module.exports = { prompt };
