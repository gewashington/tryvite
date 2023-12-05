/*
TODO:
- Update UI
  - Wrap header and card in container
  - Align everything to center 
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
import EightBall from "./EightBall/EightBall";
import { EightBallCard } from "./EightBall/EightBallCard";
import magicBall from "./assets/8ball1.png";
import { Container, Input } from "@chakra-ui/react";
import "./App.css";

const App: FC = () => {
  const [userQuestion, setUserInput] = useState<string | null>("");
  const [answer, setAnswer] = useState<string | null>("");

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
      <Container maxW='container.xl' centerContent>
        <Header />
        <EightBallCard>
          <h1>Welcome to "Ask the Magic 8-ball"</h1>
          <EightBall>
            <div style={{ backgroundImage: `url(${magicBall})` }}>
              <div onClick={handleClick}>
                answer ? <p className="answer">{answer}</p> :{" "}
              </div>
            </div>
          </EightBall>
          <Input
            type="text"
            placeholder="Ask your question here then tap the eight ball"
            className="question"
            value={userQuestion ?? ""}
            onChange={handleChange}
          />
        </EightBallCard>
      </Container>
    </div>
  );
};

export default App;
