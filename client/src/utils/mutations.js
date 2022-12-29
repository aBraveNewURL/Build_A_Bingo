import { gql } from "apollo-server-express";

const testSquares = [{ "text": "Ice cream", "location": "a1", "status": false },
{ "text": "Donuts", "location": "a2", "status": false },
{ "text": "Milkshakes", "location": "a3", "status": false },
{ "text": "Cake", "location": "a4", "status": false },
{ "text": "Pie", "location": "a5", "status": false},
{ "text": "Flan", "location": "b1", "status": false },
{ "text": "Mousse", "location": "b2", "status": false },
{ "text": "Creme brulee", "location": "b3", "status": false },
{ "text": "Pot de creme", "location": "b4", "status": false },
{ "text": "Pudding", "location": "b5", "status": false },
{ "text": "Cookies", "location": "c1", "status": false },
{ "text": "Brownies", "location": "c2", "status": false },
{ "text": "Brookies", "location": "c4", "status": false },
{ "text": "Pazookies", "location": "c5", "status": false },
{ "text": "Creme fraiche", "location": "d1", "status": false },
{ "text": "Bananas foster", "location": "d2", "status": false },
{ "text": "Strawberries and cream", "location": "d3", "status": false },
{ "text": "Fruit compote", "location": "d4", "status": false },
{ "text": "Baked apples", "location": "d5", "status": false },
{ "text": "Ganache", "location": "e1", "status": false },
{ "text": "Chocolate fondue", "location": "e2", "status": false },
{ "text": "Chocolate drizzle", "location": "e3", "status": false },
{ "text": "Chocolate nuts", "location": "e4", "status": false },
{ "text": "Chocolate chips", "location": "e5", "status": false }];

const SAVE_CARD = gql`
    mutation saveCard($owner: ID, $parentList: ID, $squares: [CardSquareInput]!, status: Boolean): {
        saveCard(owner: $owner, parentList: $parentList, squares: $squares, status: $status) {
            id
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
        }
    }
`;

module.exports = { SAVE_CARD }
