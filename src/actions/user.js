import{
    GET_USERS
} from './types';
import axios from 'axios';
export function fetchUsers() {
    return function(dispatch) {
        axios.get('http://localhost:10005/api/users')
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: GET_USERS,
                    payload: response.data
                })
            })
    }
}