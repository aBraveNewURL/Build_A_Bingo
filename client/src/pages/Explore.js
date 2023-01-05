import React, { useState } from "react";
import Play from './Play'
// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";

import OmniList from "../components/OmniList";

import { GET_LISTS } from "../utils/queries";

const Explore = () => {
  // useState determines whether or not to show the game grid. Should be attached to a button somewhere
  const [display, setDisplay] = useState("hidden");
  const [parentListId, setParentListId] = useState("")

  const { loading, data } = useQuery(GET_LISTS);

  const lists = data?.lists || [];
  console.log("Here are the lists from GET_LISTS: ", lists);

  lists.map((list, i) => {

  })

  return (
    <main>
      <div className="container flex flex-wrap">

        {loading ? <div>Loading...</div> : <OmniList lists={lists}></OmniList>}
      </div>
      {/* <Play display={display}/> */}
      
    </main>
    
  );
};

export default Explore;