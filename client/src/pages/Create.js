import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_CARD } from "../utils/mutations";

function Create() {
  const [cardName, setCardName] = useState("");
  const [squareText, setSquareText] = useState("");
  const [squareNumber, setSquareNumber] = useState(1);
  const [squareList, setSquareList] = useState([]);
  const [listDiv, setListDiv] = useState([<li>{squareText}</li>]);

  const [saveCard, { error }] = useMutation(SAVE_CARD);

  //function to take in all the individual squares a user has entered and generate a BingoCard document
  function generateList(squareArray) {
    const locations = [
      "a1",
      "a2",
      "a3",
      "a4",
      "a5",
      "b1",
      "b2",
      "b3",
      "b4",
      "b5",
      "c1",
      "c2",
      "c4",
      "c5",
      "d1",
      "d2",
      "d3",
      "d4",
      "d5",
      "e1",
      "e2",
      "e3",
      "e4",
      "e5",
    ];

    const cardSquareInputArray = [];

    if (squareArray.length <= 24) {
      for (let i = 0; i < squareArray.length; i++) {
        //insert a new object conforming to the typeDef {CardSquareInput} into the cardSquareInputArray
        cardSquareInputArray[i] = {
          text: squareArray[i],
          location: locations[i],
          status: false,
        };
      }
      console.log(cardSquareInputArray);
    } else {
      for (let i = 0; i < 24; i++) {
        //make a new copy of the array from which to delete items so they don't repeat
        let arrayCopy = squareArray;

        //pick a random index from the squareArray
        let randomIndex = Math.floor(Math.random() * arrayCopy.length);
        let randomText = arrayCopy[randomIndex];

        //then assign its value to the next location in sequence and remove it from arrayCopy
        cardSquareInputArray[i] = {
          text: randomText,
          location: locations[i],
          status: false,
        };

        arrayCopy.splice(randomIndex, 1);

        console.log(arrayCopy);
        //do the same thing for all locations
        //values can't repeat
      }
      console.log(cardSquareInputArray);
    }
    return cardSquareInputArray;
  }

  //   async function serverCall (list) {

  //       await saveCard({
  //         variables: { squares: list },
  //       });
  //   }

  return (
    <div className="my-10 border">
      <div>Instructions go here</div>
      <input
        className="mx-5"
        onChange={(e) => setCardName(e.target.value)}
        placeholder="Name your bingo card"
        type="text"
        value={cardName}
        maxLength={34}
      ></input>
      <button
        className="mx-5"
        type="button"
        onClick={function () {
          setCardName("");
        }}
      >
        Name Card
      </button>
      <input
        className="mx-5"
        onChange={(e) => setSquareText(e.target.value)}
        // onSubmit={function (e) {e.preventDefault(); setSquareNumber(squareNumber + 1); setSquareText("")}}
        placeholder={`Your text for square ${squareNumber}`}
        type="text"
        value={squareText}
        id="square-text"
        maxLength={34}
      ></input>
      <button
        className="mx-5"
        type="button"
        onClick={function () {
          setSquareList([...squareList, squareText]);
          setSquareNumber(squareNumber + 1);
          setSquareText("");
          setListDiv([...listDiv, <li>{squareText}</li>]);
        }}
      >
        Save Square
      </button>
      <button
        className="mx-5"
        type="button"
        onClick={function () {
          setSquareList([]);
          setSquareNumber(1);
          setSquareText("");
          setListDiv([]);
        }}
      >
        Reset
      </button>
      <button
        className="mx-5"
        type="button"
        onClick={function () {
          //   if (squareList.length < 24) {
          //     window.alert(
          //       "You must have at least 24 squares on your bingo card!"
          //     );
          //   }
          generateList(squareList);
        }}
      >
        Export Card
      </button>
      <div className="grid grid-rows-5">
        {/* trying to get the columns to have only five items before wrapping to a new column */}
        <ol className="grid grid-cols-5">{listDiv}</ol>
      </div>
    </div>
  );
}

export default Create;
