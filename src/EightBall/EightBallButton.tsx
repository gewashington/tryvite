import { useState, useCallback, FC } from "react";
// import { giveResponse } from "../Responses/Response";
import "./EightBallButton.css";

type EightBallButtonProps = {
  question: string | null;
  getNewAnswer: () => string;
  handleClick: () => void;
};

const EightBallButton: FC<EightBallButtonProps> = ({
  question,
  getNewAnswer,
  handleClick,
}) => {
  console.log("QUESTIONS", question);
  const [opacity, setOpacity] = useState(true);
  const [answer, setAnswer] = useState<string | null>("Click here");
  // const [userQuestion, setQuestion] = useState<string | null>("");

  const clearUserInput = () => {
    handleClick();
    // setQuestion(question)
    // console.log(userQuestion)
  };

  const onQuestionEntered = useCallback(async () => {
    setOpacity(false);
    setTimeout(() => {
      setAnswer(getNewAnswer);
      setOpacity(true);
    }, 500);
  }, []);

  const returnAnswer = () => {
    onQuestionEntered();
    clearUserInput();
    // console.log("USER QUESTION", userQuestion)
  };

  return (
    <div className={opacity ? "show" : "hide"} onClick={() => returnAnswer()}>
      <p>{answer}</p>
    </div>
  );
};

export default EightBallButton;
