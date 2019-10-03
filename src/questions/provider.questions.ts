import inquirer from "inquirer";

import { Answer, Choice, ProviderValue } from "../models/answer-choice";
import { async } from "rxjs/internal/scheduler/async";

export async function providerQuestions(): Promise<Answer> {
  const listOfFiles: Choice[] = [
    { name: "Github", value: ProviderValue.GITHUB },
    { name: "Gitlab", value: ProviderValue.GITLAB }
  ];

  return inquirer.prompt([
    {
      name: "provider",
      type: "list",
      message: "Select a Git hosting provider",
      choices: listOfFiles
    }
  ]);
}
