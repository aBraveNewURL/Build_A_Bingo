import React, { useState } from 'react'
import Button from './Button.jsx';

const squareSize = "w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"

let Game = ({gridContents}) => {

    return (

        <div className='container'>
            <div className='grid mt-3 grid-rows-5 gap-1'>
                <div className='grid grid-cols-5 gap-1'>
                    <div className={squareSize}><Button className="bingo-button" id="0" />{gridContents[0]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="1" />{gridContents[1]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="2" />{gridContents[2]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="3" />{gridContents[3]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="4" />{gridContents[4]}</div>
                </div>
                <div className='grid grid-cols-5 gap-1'>
                    <div className={squareSize}><Button className="bingo-button" id="5" />{gridContents[5]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="6" />{gridContents[6]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="7" />{gridContents[7]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="8" />{gridContents[8]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="9" />{gridContents[9]}</div>
                </div>
                <div className='grid grid-cols-5 gap-1'>
                    <div className={squareSize}><Button className="bingo-button" id="10" />{gridContents[10]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="11" />{gridContents[11]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="12" />{gridContents[12]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="13" />{gridContents[13]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="14" />{gridContents[14]}</div>
                </div>
                <div className='grid grid-cols-5 gap-1'>
                    <div className={squareSize}><Button className="bingo-button" id="15" />{gridContents[15]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="16" />{gridContents[16]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="17" />{gridContents[17]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="18" />{gridContents[18]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="19" />{gridContents[19]}</div>
                </div>
                <div className='grid grid-cols-5 gap-1'>
                    <div className={squareSize}><Button className="bingo-button" id="20" />{gridContents[20]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="21" />{gridContents[21]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="22" />{gridContents[22]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="23" />{gridContents[23]}</div>
                    <div className={squareSize}><Button className="bingo-button" id="24" />{gridContents[24]}</div>
                </div>

            </div>
        </div>
    )

}

export default Game


