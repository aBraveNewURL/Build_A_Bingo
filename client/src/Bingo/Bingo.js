import React, {useState} from 'react'
import Button from './Button.jsx';

// TODO: change cursor styling upon card hover

let Game = () => {
    // game rules and mechanics go here 
    return (
        <div className='container'>
            <table>
                <tbody>
                    <tr>
                        <Button num={0} />
                        <Button num={1} />
                        <Button num={2} />
                        <Button num={3} />
                        <Button num={4} />
                    </tr>
                    <tr>
                        <Button num={5} />
                        <Button num={6} />
                        <Button num={7} />
                        <Button num={8} />
                        <Button num={9} />
                    </tr>
                    <tr>
                        <Button num={10} />
                        <Button num={11} />
                        <Button num={12} />
                        <Button num={13} />
                        <Button num={14} />
                    </tr>
                    <tr>
                        <Button num={15} />
                        <Button num={16} />
                        <Button num={17} />
                        <Button num={18} />
                        <Button num={19} />
                    </tr>
                    <tr>
                        <Button num={20} />
                        <Button num={21} />
                        <Button num={22} />
                        <Button num={23} />
                        <Button num={24} />
                    </tr>
                </tbody>
            </table>
        </div>
    )
    
}

export default Game