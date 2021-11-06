import Page from '../Page';

// Components
import { Game } from '../../components/Game';

// Utils
import { getRandomIntInRange } from '../../utils/utils';

// Data
import { artistsByGenre } from '../../data/artists';

const QuizPage = () => {

	//In the future could be selected
	const genre = 'rap';
	const artists = artistsByGenre[genre];
	const numberOfQuestions = 6;

	// I know that it's a little verbose but this solution have more performances by using the "double pointers" method,
	// I'm avoiding a nested for loop.
	// So it's O(n) instead of being O(n^2)
	const pickArtists = (numberOfQuestions, numberOfArtists) => {
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
				i++;
				if (i === numberOfArtists) {
					questionArtists[q] = {
						selectedArtists,
						correctAnswer: getRandomIntInRange(0, numberOfArtists),
					};
					//reset
					i = 0;
					pickedIndexes = {};
					selectedArtists = [];
					//go to the next question generation
					q++;
				}
			}
		}
		return questionArtists;
	};

	const questions = pickArtists(numberOfQuestions, 3);

	return (
		<Page>
			<Game
				numberOfQuestions={numberOfQuestions}
				questions={questions}
				delay={1000}
				timeToAnswer={60}
			/>
		</Page>
	);
};

export default QuizPage;
