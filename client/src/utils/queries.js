import { gql } from "@apollo/client";

export const GET_LIST = gql`
query getList($listId: ID!) {
    list {  
        _id   
        owner
        name
        list       
    }
}`;

export const GET_LISTS = gql`
query getLists {
    lists {
        _id
        owner
        name
        list
    }
}`;