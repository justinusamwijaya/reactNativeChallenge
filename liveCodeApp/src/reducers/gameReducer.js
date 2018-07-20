import { mark, new_game, switch_turn, game_ends, game_lost, game_won } from '../actions/types'

const initialState = {
    enemyPositions: [],
    myPositions: [],
    turn: '',
    result:'',
    gameOver: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case new_game:
        return {
            ...state,
            enemyPositions: [],
            myPositions: [],
            turn:'myPositions',
            gameOver:false,
        }
        case game_ends:
        return {
            ...state,
            gameOver:true
        }
        case game_lost:
        return {
            ...state,
            result: 'you lost the game!'
        }
        case game_won:
        return {
            ...state,
            result: 'congrats! you won!'
        }
        case mark:
        console.log({
            ...state,
            [action.payload.turn] : [...state[action.payload.turn], action.payload.guess]
        })
        return {
            ...state,
            [action.payload.turn] : [...state[action.payload.turn], action.payload.guess]
        }
        case switch_turn:
        return {
            ...state,
            turn: state.turn === 'myPositions' ? 'enemyPositions' : 'myPositions'
        }
        default:
        return state
    }
}