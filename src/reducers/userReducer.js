import{
    GET_USERS
}from '../actions/types';

const INITIAL_STATE = {
    id: 1,
    name: "",
    email: ""
}

export default function(state= INITIAL_STATE, action){
    switch (action.type) {
        case GET_USERS: 
            const { users } = action.payload;
            return {
                ...state,
                users
            }
        default: return state;    
    }
}