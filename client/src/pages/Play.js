import React, { useState } from "react";
import MegaMenu from "../components/MegaMenuNav";
import { useQuery, useMutation } from "@apollo/client";
import { SAVE_CARD, SAVE_LIST } from "../utils/mutations";
import { GET_LIST } from "../utils/queries";
import { cardGenerator } from "../utils/cardGenerator";

function Play({ parentListId }) {
  // insert bingo grid, same as Home page

  // create a useQuery to fetch the right list
  const { data } = useQuery(GET_LIST, {
    variables: { parentListId },
  });

  console.log(data);

  const [saveCard, { loading }] = useMutation(SAVE_CARD);

  const parentList = data?.list;
  console.log(parentList);

  const cardSquareInputArray = cardGenerator(parentList);

  const newCard = saveCard({
    variables: {
      owner: null,
      parentList: data?.name,
      squares: cardSquareInputArray,
    },
  });

  console.log(newCard);

  // use some kind of loop to map each object in newCard onto the grid

  return <MegaMenu />;
}

export default Play;
