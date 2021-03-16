import{
    GET_USERS
} from './types';

export function fetchUsers(){
    return({
        type: GET_USERS,
        payload:[
            {
                "id": 1,
                "name": "Bill",
                "email": "bill@gmail.com"
            },
            {
                "id": 2,
                "name": "Rowan Hahn",
                "email": "annabel.parisian@example.org"
            },
            {
                "id": 3,
                "name": "Emmie O'Reilly",
                "email": "rmonahan@example.net"
            },
            {
                "id": 4,
                "name": "Mr. Cielo Effertz",
                "email": "christa56@example.com"
            },
            {
                "id": 5,
                "name": "Raul Koch",
                "email": "damaris75@example.com"
            },
            {
                "id": 6,
                "name": "Norval Gerlach",
                "email": "adolfo.jast@example.org"
            },
            {
                "id": 7,
                "name": "Gerald Cummerata PhD",
                "email": "tlang@example.com"
            },
            {
                "id": 8,
                "name": "Leonel Kuhn IV",
                "email": "mandy.schowalter@example.com"
            },
            {
                "id": 9,
                "name": "Norene Bahringer",
                "email": "heathcote.kenneth@example.org"
            },
            {
                "id": 10,
                "name": "Delilah McGlynn",
                "email": "greyson.wunsch@example.net"
            }
        ]
    })
}