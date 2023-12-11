/*
- Create list of errors
  - Field is empty 
- Create validation function 
*/

import { FC, ChangeEventHandler } from "react";
import { Input } from "@chakra-ui/react";

type UserInputProps = {
  userInput: string | null;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

const UserInput: FC<UserInputProps> = ({ userInput, handleChange }) => {
  return (
    <Input
      type="text"
      placeholder="Ask your question here then tap the eight ball"
      className="question"
      value={userInput ?? ""}
      onChange={handleChange}
      width={"md"}
    />
  );
};

export default UserInput;
