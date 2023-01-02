import React from "react";
// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";

import OmniList from "../components/OmniList";

import { GET_LISTS } from "../utils/queries";

const Explore = () => {
  const { loading, data } = useQuery(GET_LISTS);

  const lists = data?.lists || [];
  console.log(lists);

  return (
    <main>
      <div>
        {loading ? <div>Loading...</div> : <OmniList lists={lists}></OmniList>}
      </div>
    </main>
  );
};

export default Explore;


