import React, {useState} from 'react'
import Button from './Button.jsx';

// TODO: change cursor styling upon card hover

// old code in case using a table is preferrable
// let Game = () => {
//     // game rules and mechanics go here 
//     return (
//         <div className='container'>
//             <table>
//                 <tbody>
//                     <tr>
//                         <Button num={0} />
//                         <Button num={1} />
//                         <Button num={2} />
//                         <Button num={3} />
//                         <Button num={4} />
//                     </tr>
//                     <tr>
//                         <Button num={5} />
//                         <Button num={6} />
//                         <Button num={7} />
//                         <Button num={8} />
//                         <Button num={9} />
//                     </tr>
//                     <tr>
//                         <Button num={10} />
//                         <Button num={11} />
//                         <Button num={12} />
//                         <Button num={13} />
//                         <Button num={14} />
//                     </tr>
//                     <tr>
//                         <Button num={15} />
//                         <Button num={16} />
//                         <Button num={17} />
//                         <Button num={18} />
//                         <Button num={19} />
//                     </tr>
//                     <tr>
//                         <Button num={20} />
//                         <Button num={21} />
//                         <Button num={22} />
//                         <Button num={23} />
//                         <Button num={24} />
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
    
// }

const squareSize = "w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"

let Game = () => {
    return (
        <div className='container'>
            <div className='grid grid-rows-5 gap-1'>
            
                    <div className='grid grid-cols-5 gap-1'>
                        <div className={squareSize}><Button num={0} /></div>
                        <div className={squareSize}><Button num={1} /></div>
                        <div className={squareSize}><Button num={2} /></div>
                        <div className={squareSize}><Button num={3} /></div>
                        <div className={squareSize}><Button num={4} /></div>
                    </div>
                    <div className='grid grid-cols-5 gap-1'>
                        <div className={squareSize}><Button num={5} /></div>
                        <div className={squareSize}><Button num={6} /></div>
                        <div className={squareSize}><Button num={7} /></div>
                        <div className={squareSize}><Button num={8} /></div>
                        <div className={squareSize}><Button num={9} /></div>
                    </div>
                    <div className='grid grid-cols-5 gap-1'>
                        <div className={squareSize}><Button num={10} /></div>
                        <div className={squareSize}><Button num={11} /></div>
                        <div className={squareSize}><Button num={12} /></div>
                        <div className={squareSize}><Button num={13} /></div>
                        <div className={squareSize}><Button num={14} /></div>
                    </div>
                    <div className='grid grid-cols-5 gap-1'>
                        <div className={squareSize}><Button num={15} /></div>
                        <div className={squareSize}><Button num={16} /></div>
                        <div className={squareSize}><Button num={17} /></div>
                        <div className={squareSize}><Button num={18} /></div>
                        <div className={squareSize}><Button num={19} /></div>
                    </div>
                    <div className='grid grid-cols-5 gap-1'>
                        <div className={squareSize}><Button num={20} /></div>
                        <div className={squareSize}><Button num={21} /></div>
                        <div className={squareSize}><Button num={22} /></div>
                        <div className={squareSize}><Button num={23} /></div>
                        <div className={squareSize}><Button num={24} /></div>
                    </div>
                
            </div>
        </div>
    )
    
}

export default Game