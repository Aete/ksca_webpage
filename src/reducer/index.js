import { CHANGE_TOOL } from '../actions';

export default function reducer(state, action){
    switch(action.type){
        case CHANGE_TOOL:
            return {
              ...state,
              tool: action.tool,
            };
        default:
            return state;
    }
}