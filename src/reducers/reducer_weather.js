import {FETCHWEAHTER} from '../actions/index';

export default function(state = [], action){

    switch(action.type){
    case FETCHWEAHTER: 
        // return state.concat([action.payload.date]);
        return [action.payload.date, ...state];
    }

    return state;
}