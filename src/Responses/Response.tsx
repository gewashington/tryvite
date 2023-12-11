import { getAnswer } from './answer';

const giveResponse = (userInput: string | null) => {
    if (userInput === "") {
        return("Question please?")
    }
    else {
        return(getAnswer)
    }

}

export { giveResponse }