import Page from "./Page";

// Components
import { QuizCard } from '../components/QuizCard';
import { Game } from '../components/Game';


const QuizPage = () => {

    return (
        <Page>
            <Game />
            <QuizCard/>
        </Page>
    );
};

export default QuizPage;