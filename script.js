import { config } from "dotenv";
import OpenAI from "openai";
import readline from "readline";
config();

const openai = new OpenAI();

const userPromp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  try {
    userPromp.prompt();
    userPromp.on("line", async (input) => {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: input }],
        model: "gpt-3.5-turbo",
      });

      console.log(completion.choices[0].message.content);
      userPromp.prompt();
    });
  } catch (error) {
    console.error("Someting went wrong", error.message);
  }
}

main();
