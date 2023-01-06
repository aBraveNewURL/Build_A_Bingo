import { gql } from "@apollo/client";

export const GET_CARD = gql`
query card($cardId: ID!) {
    card(cardId: $cardId) {  
        _id   
        status       
        owner {
            username
            email
        }
        parentList {
            name
        }
        squares {
            location
            text
            col
            row
            status
        }
    }
}`;

export const GET_LIST = gql`
query list($listId: ID!) {
    list(listId: $listId) {  
        _id   
        owner {
            username
            email
        }
        name
        list       
    }
}`;

export const GET_LISTS = gql`
query lists {
    lists {
        _id
        owner {
            username
            email
        }
        name
        list
    }
}`;

export const GET_LISTS_BY_USER = gql`
query listsByUser($ownerId: ID!) {
    listsByUser(ownerId: $ownerId) {  
        _id
        owner {
            username
            email
        }
        name
        list
    }
}`;

export const GET_CARDS_BY_USER = gql`
query cardsByUser($ownerId: ID!) {
    cardsByUser(ownerId: $ownerId) {  
        _id
        status
        owner {
            username
            email
        }
        parentList {
            name
            owner {
                username
                email
            }
        }
        squares {
            location
            text
            col
            row
            status
        }
    }
}`;