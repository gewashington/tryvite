import { possibleAnswers } from "./PossibleAnswersList";

const getAnswer = (): string => {
  const answers = Object.keys(possibleAnswers).filter((item) => {
    return isNaN(Number(item));
  });
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
};

export { getAnswer };
