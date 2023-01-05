// should receive BingoList.list, not the whole BingoList document
export const listRandomizer = function (parentList) {

        //make a new copy of the array from which to delete items so they don't repeat
        const listCopy = parentList;

        for (let i = 0; i < 24; i++) {
  
          //pick a random index from the parentList
          let randomIndex = Math.floor(Math.random() * parentList.length);
          listCopy.push(parentList[randomIndex]);
          parentList.splice(randomIndex, 1);
        };

        console.log("New array: ", listCopy);

        return listCopy;

      }