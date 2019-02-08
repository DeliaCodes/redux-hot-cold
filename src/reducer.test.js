import gameReducer from './reducer';
import * as Actions from './actions';

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
        const action = Actions.RESTART_GAME;
        const state = gameReducer(middleGameState, { type: 'RESTART_GAME' })
        delete state.correctAnswer;
        expect(state).toEqual(initialState);

    })
})
