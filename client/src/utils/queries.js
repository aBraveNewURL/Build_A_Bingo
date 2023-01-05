import { gql } from "@apollo/client";

export const GET_LIST = gql`
query list($listId: ID!) {
    list(listId: $listId) {  
        _id   
        owner
        name
        list       
    }
}`;

export const GET_LISTS = gql`
query lists {
    lists {
        _id
        owner
        name
        list
    }
}`;

export const GET_LISTS_BY_USER = gql`
query listsByUser($ownerId: ID!) {
    listsByUser(ownerId: $ownerId) {  
        _id
        owner
        name
        list
    }
}`;

export const GET_CARDS_BY_USER = gql`
query cardsByUser($ownerId: ID!) {
    cardsByUser(ownerId: $ownerId) {  
        _id
        owner
        parentList
        status
        squares {
            text
            location
            col
            row
            status
        }
    }
}`;