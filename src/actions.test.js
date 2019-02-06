import { GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess } from './actions';

describe('Aural Update', () => {
    it('generate Aural Update', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
})
describe('Restart Game', () => {
    it('Restart Game', () => {
        const myAnswer = 65;
        const action = restartGame(myAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(myAnswer);
    });
})
describe('Make Guess Suite', () => {
    it('Makes Guess', () => {
        const guess = 5;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(5);
    })
})