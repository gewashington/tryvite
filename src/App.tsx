/*
TODO:
- Update UI
  - Change eight ball image 
  - Change / fix image 
  - Add fonts to text
- Add tests:
  * Empty Field
  * Adding new answer to 8ball responses 
  * Answer displaying 
  * Field clearing after button tap
  * Answer updating after button tap 
*/

import { ChangeEventHandler, FC, useState } from "react";
import { getAnswer } from "./Responses/answer";
import { Header } from "./Header/Header";
import { EightBallCard } from "./EightBall/EightBallCard";
import EightBallAnimation from "./EightBall/EightBallAnimation";
import { Container } from "@chakra-ui/react";
import magicBall from "./assets/8ball1.png";
import "./App.css";
import EightBallButton from "./EightBall/EightBallButton";
import UserInput from "./UserInput";


const App: FC = () => {
  const [userQuestion, setUserInput] = useState<string | null>("");
  // const [errors, setError] = useState<string | null>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInput(e.target.value);
    console.log("HANDLE CHANGE ON:", userQuestion)
  };

  const clearInput = () => {
      setUserInput("");
  };

  return (
    <div className="App">
      <Container maxW="container.xl" centerContent>
        <Header />
        <EightBallCard>
          <EightBallAnimation>
            <div
              style={{
                backgroundImage: `url(${magicBall})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
                width: "50vh",
              }}
            >
              <EightBallButton question={userQuestion} getNewAnswer={getAnswer} handleClick={clearInput} />
            </div>
          </EightBallAnimation>
          <UserInput userInput={userQuestion} handleChange={handleChange} />
        </EightBallCard>
      </Container>
    </div>
  );
};

export default App;
