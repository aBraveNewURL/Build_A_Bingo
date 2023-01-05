// OmniList is used to display all the BingoList documents currently in the database
import React, { useState } from "react";
import SubList from "./SubList";
import Card from "./Card";
import Game from '../Bingo/Bingo';

const styles = {
    heading: {fontWeight: "bold"}
}

const OmniList = ({ lists }) => {
  const [gridContents, setGridContents] = useState([]);

  if (!lists.length) {
    return <h3>No bingo lists yet. Create one to get started!</h3>;
  }

  // const [gameHidden, setGameHidden] = (true);

  const clickFunction = function (e) {
    e.preventDefault();
    const buttonKey = e.target.getAttribute("dataindex");
    const subList = lists[buttonKey].list;
    // console.log(subList);
    setGridContents(subList);
    //get list.list
  }

  return (
    <div className="container flex flex-wrap">
      {lists &&
        lists.map((list, index) => (
          <div>
            <button style={styles.heading} dataindex={index} onClick={clickFunction}>{list.name}</button>
            <h4 style={styles.heading}></h4>
            {/* <SubList list={list.list} /> */}
          </div>
        ))}
        <div className="container"><Game gridContents={gridContents}/></div>
        
    </div>
    
  );
};

export default OmniList;
