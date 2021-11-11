import React, {useState} from 'react'
import './Numbertest.css'

function Numbertest() {
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [number, setNumber] = useState(Math.floor(Math.random() * (9 - 0 + 1) + 0))
    const [answer, setAnswer] = useState("")
    const [lose, setLose] = useState(false)
    const [level, setLevel] = useState(1)
    const [numberinc, setNumberinc] = useState(1)

    const firstRemove = (e) => {
        setFirst(false)
        setSecond(true)
    }
    const secondRemove = (e) => {
        setSecond(false)
        setThird(true)
    }
    const thirdRemove = (e) => {
        setThird(false)
        setFourth(true)
        if (answer === number.toString()) {
            setLose(false)
            setLevel(level => level + 1)
            setNumberinc(numberinc => numberinc * 10)
        }
        else {
            setLose(true)
            let listed = []
            let answerlist = answer.toString().split('')
            let tocompare = number.toString().split('')
            for (var i = 0; i < answerlist.length; i++){
                if (answerlist[i] === tocompare[i]) listed.push(answerlist[i])
                else listed.push(<s>{answerlist[i]}</s>)
            }
            setAnswer(<h3>{listed}</h3>)
        }

    }
    const fourthRemove = (e) => {
        setFourth(false)
        setAnswer("")
        if (lose) {
            setFirst(true)
            setNumber(Math.floor(Math.random() * (9 - 0 + 1) + 0))
            setLevel(1)
            setNumberinc(1)
        }
        else {
            setSecond(true)
            setNumber(Math.floor(Math.random() * (((numberinc*10)-1) - numberinc + 1) + numberinc))
        }
    }
    const inputHandlre = (e) => {
        if(answer)
        if (e.keyCode === 13) {
            thirdRemove()
        }
    }


    return (
        <div className="number__container">

            { first ?
            <div className="starter__page">
                <h4>Number Memory</h4>
                <h4>The average person can remember 7 numbers at once. Can you do more?</h4>
                <button onMouseUp={firstRemove}>Start</button>
            </div> : "" }
            { second ?
                <div className="remember__page">
                    <h4>{number}</h4>
                    <div><span style={{animationDuration: `${0.9*level}s`}} onAnimationEnd={secondRemove}></span></div>
                </div> : "" }
            { third ?
                <div className="question__page">
                    <h4>What was the number?</h4>
                    <h4>press enter to submit</h4>
                    <input type="number" value={answer} onChange={(e)=>setAnswer(e.target.value)} onKeyUp={inputHandlre} autoFocus></input>
                    <button onMouseUp={thirdRemove} disabled={answer ? false : true}>Submit</button>
                </div> : "" }
            {fourth ?
                <div className="result__page">
                    <h4 className="steelblue">Number</h4>
                    <h3>{number}</h3>
                    <h4 className="steelblue">Your answer</h4>
                    {   lose ? 
                        (answer !== "" ? answer : 0) : <h3>{answer}</h3> }
                    <h3 className="level">Level {level}</h3>
                    {lose ?
                        <button onMouseUp={fourthRemove}>Try again</button> :
                        <button onMouseUp={fourthRemove}>Next</button>
                    }
                </div> : "" }
        </div>
    )
}

export default Numbertest
