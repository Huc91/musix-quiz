import Page from "../Page";

// Components
import { Game } from '../../components/Game';


const QuizPage = () => {

    const numberOfQuestions = 6;

    const artists = [
        'Kendrick Lamar', 'Wu-Tang Clan', 'Lil Uzi Vert',
        'Tyler, The creator', 'Nas', 'Mos Def',
        'Action Bronson', 'Travis Scott', 'Chance the Rapper',
        'Frank Ocean', 'Childish Gambino', 'Pete Rock', '2Pac',
        'A Tribe Called Quest', 'The Notorious B.I.G.', 'De La Soul',
        'Outkast', 'Gang Starr', 'Drake', 'Earl Sweatshirt', 'Mac Miller',
        'Lil Peep', 'XXXTENTACION', 'Kanye West', 'Joey Purp', 'Kill The Vultures',
        'Pusha T', 'Vince Staples'
    ]

    const getRandomIntInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // this have more perfomances with the "double pointers", I'm avoiding a nested for loop
    const pickArtists = (numberOfQuestions, numberOfArtists) => {
        console.log('hello');
        if (numberOfArtists > artists.length || !artists.length) {
            return null;
        }
        let i = 0;
        let q = 0;
        let pickedIndexes = {};
        let selectedArtists = [];
        const questionArtists = {};
        //continue picking until n are taken, avoid multiple picks
        while (q < numberOfQuestions) {
            const randomIndex = getRandomIntInRange(0, artists.length);
            if (!pickedIndexes.hasOwnProperty(randomIndex)) {
                pickedIndexes[randomIndex] = true;
                selectedArtists.push(artists[randomIndex]);
                i++
                if (i === numberOfArtists) {
                    questionArtists[q] = {
                        selectedArtists,
                        correctAnswer: getRandomIntInRange(0, numberOfArtists)
                    }
                    //reset
                    i = 0;
                    pickedIndexes = {};
                    selectedArtists = [];
                    //go to the next question generation
                    q++
                }
            } 
        }
        return questionArtists;
    }

    const questions = pickArtists(numberOfQuestions, 3);

    return (
        <Page>
            <Game
                numberOfQuestions={numberOfQuestions}
                questions={questions}
                delay={1000}
                timeToAnswer={4}
            />
        </Page>
    );
};

export default QuizPage;