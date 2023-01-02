import { gql } from "@apollo/client";

export const GET_LIST = gql`
query getList($listId: ID!) {
    list {     
        owner
        name
        list       
    }
}`;

export const GET_LISTS = gql`
query getLists {
    lists {
        owner
        name
        list
    }
}`;