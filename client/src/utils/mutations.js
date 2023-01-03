import { gql } from "@apollo/client";

export const SAVE_CARD = gql`
    mutation saveCard($owner: ID, $parentList: ID, $squares: [CardSquareInput]!, $status: Boolean) {
        saveCard(owner: $owner, parentList: $parentList, squares: $squares, status: $status) {
            _id
            owner
            parentList
            squares {
            location
            status
            text
            }
            status
        }
    }
`;

export const SAVE_LIST = gql`
mutation saveList($owner: ID, $name: String!, $list: [String]!) {
    saveList(owner: $owner, name: $name, list: $list) {
        _id
        owner
        name
        list
    }
}`

