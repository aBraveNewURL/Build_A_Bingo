import React from 'react'

let Game = () => {
    const CardSquare = ({num}) => {
        return <td onClick={() => {
            click(num)
            alert(`You chose ${num}`)
        }}>Placeholder</td>
        
    };
    const click = () => {

    }
    return (
        <div className='container'>
            <table>
                <tbody>
                    <tr>
                        <CardSquare num={0} />
                        <CardSquare num={1} />
                        <CardSquare num={2} />
                        <CardSquare num={3} />
                        <CardSquare num={4} />
                    </tr>
                    <tr>
                        <CardSquare num={5} />
                        <CardSquare num={6} />
                        <CardSquare num={7} />
                        <CardSquare num={8} />
                        <CardSquare num={9} />
                    </tr>
                    <tr>
                        <CardSquare num={10} />
                        <CardSquare num={11} />
                        <CardSquare num={12} />
                        <CardSquare num={13} />
                        <CardSquare num={14} />
                    </tr>
                    <tr>
                        <CardSquare num={15} />
                        <CardSquare num={16} />
                        <CardSquare num={17} />
                        <CardSquare num={18} />
                        <CardSquare num={19} />
                    </tr>
                    <tr>
                        <CardSquare num={20} />
                        <CardSquare num={21} />
                        <CardSquare num={22} />
                        <CardSquare num={23} />
                        <CardSquare num={24} />
                    </tr>
                </tbody>
            </table>
        </div>
    )
    
}

export default Game