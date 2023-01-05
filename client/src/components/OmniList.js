// OmniList is used to display all the BingoList documents currently in the database
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import OmniListButton from './OmniListButton';
import Game from "../Bingo/Bingo";
import { listRandomizer } from "../utils/listRandomizer";
import { cardGenerator } from "../utils/cardGenerator";
import { SAVE_CARD } from "../utils/mutations";

const styles = {
  heading: { fontWeight: "bold" },
};

const OmniList = ({ lists }) => {
  const [gridContents, setGridContents] = useState([]);
  const [display, setDisplay] = useState(false);

  const [saveCard] = useMutation(SAVE_CARD);

  if (!lists.length) {
    return <h3>No bingo lists yet. Create one to get started!</h3>;
  }

  // const [gameHidden, setGameHidden] = useState(true);

  const clickFunction = async function (e) {

    e.preventDefault();

    const buttonKey = e.target.getAttribute("dataindex");
    const subList = lists[buttonKey].list;

    console.log(subList);

    setGridContents(subList);
    setDisplay(!display);
  }


    // transform the subList into a format that may be entered into a new BingoCard document
    // const cardSquareInputArray = cardGenerator(subList);

    //now to use the saveCard mutation, which will create a randomized card for us
    // const newCard = await saveCard({
    //   variables: {
    //     owner: null,
    //     parentList: lists[buttonKey]._id,
    //     squares: cardSquareInputArray,
    //     status: false,
    //   },
    // });

    // console.log("New Bingo Card created: ", newCard);

    // const randomizedList = listRandomizer(subList);
    // setGridContents([]);
  

  // return (
  //   <div className="container flex flex-wrap">
  //     {lists &&
  //       lists.map((list, index) => (
  //         <div className="m-2">
  //           <button
  //             style={styles.heading}
  //             dataindex={index}
  //             onClick={clickFunction}
  //           >
  //             {list.name}
  //           </button>
  //           <h4 style={styles.heading}></h4>
  //           {/* <SubList list={list.list} /> */}
  //         </div>
  //       ))}
  //     <div className="container">
  //       <Game gridContents={gridContents} />
  //     </div>
  //   </div>
  // );

  return (
  <div className="container flex flex-wrap">
    {lists && lists.map((list, index) => (
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md bg-opacity-0">
          <button type="button" onClick={clickFunction} dataindex={index} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{list.name}</button>
              {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{list.name}</h5> */}
          {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A bingo list</p> */}
          {/* <a dataIndex={index} href="#" onClick={clickFunction} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Play
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a> */}
      </div>
    ))}
  <div className={display ? "container" : "hidden"}>
      <Game gridContents={gridContents} />
    </div>
  </div>

  );
};

export default OmniList;
