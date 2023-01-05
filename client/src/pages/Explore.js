import React, { useState } from "react";
import Play from './Play'
// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";

import OmniList from "../components/OmniList";
import ListPreviewCard from '../components/BingoList/ListPreviewCard';

import { GET_LISTS } from "../utils/queries";

const Explore = () => {
  // useState determines whether or not to show the game grid. Should be attached to a button somewhere
  const [display, setDisplay] = useState("hidden");
  const [parentListId, setParentListId] = useState("")

  const { loading, data } = useQuery(GET_LISTS);

  const lists = data?.lists || [];

  lists.map((list, i) => {

  })

  return (
    <main>
        {loading ? <div>Loading...</div> : <ListPreviewCard lists={lists}></ListPreviewCard>}
      {/* <Play display={display}/> */}
      
    </main>
    
  );
};

export default Explore;