import gameReducer from './reducer';

describe('First Reducer tests', () => {
    const initialState = {
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
    };
    const middleGameState = {
        guesses: [5, 6, 8]
    }
    it('Restart Game sets to initial state', () => {
        const state = gameReducer(middleGameState, { type: 'RESET_GAME' })
        expect(state).toEqual(initialState);

    })
})