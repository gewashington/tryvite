/*
TODO:
- Update UI
  - Display full eight ball
  - Add spacing between input and eightball
  - Change eight ball image 
  - Add answer to eightball  
  - Fix image text 
  - Change / fix image 
- Add tests:
  * Empty Field
  * Adding new answer to 8ball responses 
  * Answer displaying 
  * Field clearing after button tap
  * Answer updating after button tap 
*/

import { ChangeEventHandler, FC, useState } from "react";
import { getAnswer } from "./Answers/answer";
import { Header } from "./Header/Header";
import { EightBallCard } from "./EightBall/EightBallCard";
import EightBallAnimation from "./EightBall/EightBall";
import { Container, Input } from "@chakra-ui/react";
import magicBall from "./assets/8ball1.png";
import "./App.css";

const App: FC = () => {
  const [userQuestion, setUserInput] = useState<string | null>("");
  const [answer, setAnswer] = useState<string | null>("Click here");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    if (userQuestion) {
      setUserInput("");
      setAnswer(getAnswer());
    }
  };

  return (
    <div className="App">
      <Container maxW="container.xl" centerContent>
        <Header />
        <EightBallCard>
          <EightBallAnimation>
            <div style={{ backgroundImage: `url(${magicBall})`, backgroundRepeat: 'no-repeat', height: '50vh', width: '50vh', alignItems: 'center' }}>
              <div onClick={handleClick}>
                <p className="answer">{answer}</p>
              </div>
            </div>
          </EightBallAnimation>
          <Input
            type="text"
            placeholder="Ask your question here then tap the eight ball"
            className="question"
            value={userQuestion ?? ""}
            onChange={handleChange}
            width={'md'}
          />
        </EightBallCard>
      </Container>
    </div>
  );
};

export default App;
