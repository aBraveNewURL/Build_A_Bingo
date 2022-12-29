import React from 'react'

let Game = () => {
    const Card = ({num}) => {
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
                        <Card num={0} />
                        <Card num={1} />
                        <Card num={2} />
                        <Card num={3} />
                        <Card num={4} />
                    </tr>
                    <tr>
                        <Card num={5} />
                        <Card num={6} />
                        <Card num={7} />
                        <Card num={8} />
                        <Card num={9} />
                    </tr>
                    <tr>
                        <Card num={10} />
                        <Card num={11} />
                        <Card num={12} />
                        <Card num={13} />
                        <Card num={14} />
                    </tr>
                    <tr>
                        <Card num={15} />
                        <Card num={16} />
                        <Card num={17} />
                        <Card num={18} />
                        <Card num={19} />
                    </tr>
                    <tr>
                        <Card num={20} />
                        <Card num={21} />
                        <Card num={22} />
                        <Card num={23} />
                        <Card num={24} />
                    </tr>
                </tbody>
            </table>
        </div>
    )
    
}

export default Game