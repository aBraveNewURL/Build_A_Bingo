module.exports = {
    checkWin: (card) => {
        let winStatus = false;
        let blackoutWin = false;
        let anyWin = [];
        const colA = [];
        const colB = [];
        const colC = [];
        const colD = [];
        const colE = [];
        const row1 = [];
        const row2 = [];
        const row3 = [];
        const row4 = [];
        const row5 = [];
        const diaTLBR = [];
        const diaBLTR = [];
        for (const { location: loc, col: col, row: row, status: status } of card.squares) {
            switch (col) {
                case 'a':
                    colA.push(status)
                    break;
                case 'b':
                    colB.push(status)
                    break;
                case 'c':
                    colC.push(status)
                    break;
                case 'd':
                    colD.push(status)
                    break;
                case 'e':
                    colE.push(status)
                    break;
            
                default:
                    break;
            }
            switch (row) {
                case '1':
                    row1.push(status)
                    break;
                case '2':
                    row2.push(status)
                    break;
                case '3':
                    row3.push(status)
                    break;
                case '4':
                    row4.push(status)
                    break;
                case '5':
                    row5.push(status)
                    break;
            
                default:
                    break;
            }
            switch (loc) {
                case 'c3':
                    diaTLBR.push(status);
                    diaBLTR.push(status);
                    break;
                case 'a1':
                case 'b2':
                case 'd4':
                case 'e5':
                    diaTLBR.push(status);
                    break;
                case 'a5':
                case 'b4':
                case 'd2':
                case 'e1':
                    diaBLTR.push(status);
                    break;
                default:
                    break;
            }
        }
        anyWin.push(colA.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.push(colB.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.push(colC.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.push(colD.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.push(colE.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.push(row1.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.push(row2.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.push(row3.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.push(row4.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.push(row5.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.push(diaTLBR.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.push(diaBLTR.every((i) => {
            const win = (i === true);
            return win;
        }));
        anyWin.some((i) => {
            const win = (i === true);
            if(win) {
                winStatus = true;
                return win;
            }
            return win;
        });
        blackoutWin = anyWin.every((i) => {
            const win = (i === true);
            if (win) {
                blackoutWin = true;
            }
        });
        return winStatus;
    },
} 