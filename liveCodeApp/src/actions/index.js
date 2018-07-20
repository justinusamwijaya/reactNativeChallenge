import { switch_turn, mark, new_game, game_ends, game_lost, game_won } from './types'

export const Mark = ( guess, turn ) => {
    return dispatch => {
        dispatch(marking(guess,turn))
        dispatch(switchTurn())
    }
}

export const marking = ( guess, turn ) => {
    return {
        type: mark,
        payload: {
            turn,
            guess
        }
    }
}

export const switchTurn = () => {
    return {
        type: switch_turn
    }
}

export const newGame = () => {
    return {
        type: new_game
    }
}

export const endGame = () => {
    return {
        type: game_ends
    }
}

export const winGame = () => {
    return {
        type: game_won
    }
}

export const gameLost = () => {
    return {
        type: game_lost
    }
}

export const losing = () => {
    return dispatch => {
        dispatch (endGame())
        dispatch (gameLost())
    }
}

export const winning = () => {
    return dispatch => {
        dispatch (endGame())
        dispatch (winGame())
    }
}