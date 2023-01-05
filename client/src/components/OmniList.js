// OmniList is used to display all the BingoList documents currently in the database
import React from "react";
import SubList from "./SubList";
import Card from "./Card";

const styles = {
    heading: {fontWeight: "bold"}
}

const OmniList = ({ lists }) => {
  if (!lists.length) {
    return <h3>No bingo lists yet. Create one to get started!</h3>;
  }

  return (
    <div className="container">
      {lists &&
        lists.map((list) => (
          <div key={list._id}>
            <h3 style={styles.heading}>{list.name}</h3>
            <SubList list={list.list} />
          </div>
        ))}
    </div>
  );
};

export default OmniList;
