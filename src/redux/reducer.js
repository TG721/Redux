import * as actions from './actionTypes'
import { produce } from 'immer'

let lastId = 0

export default function reducer(state = { rows: [] }, action){
    switch(action.type){
        case actions.ROW_ADDED: {
            return produce(state, newState => {
                let nextId = newState.rows.length + 1;
                newState.rows.push({
                    id: ++nextId,
                    text: action.payload.text
                });
            
            })
        }
        case actions.ROW_REMOVED: {
            return produce(state, newState => {
                newState.rows = newState.rows.filter(
                    row => row.id !== action.payload.id
                )
            })
        }
        default: return state;
    }

}

