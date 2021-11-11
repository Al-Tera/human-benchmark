import React, {useState, useEffect} from 'react'
import './Visualtest.css'

function Visualtest() {
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
    // const [third, setThird] = useState(false)

    useEffect(() => {

        const quest = document.getElementById("question__page")
        if(quest){
        console.log(quest)
        for (let i = 0; i < 9; i++){
            let span = document.createElement("span")
            quest.appendChild(span)
        }}
    },[])



    const firstRemove = (e) => {
        e.preventDefault()
        setFirst(false)
        setSecond(true)
    }

    return (
        <div>
            {first ?
                <div className="starter__page">
                    <h4>Visual Memory Test</h4>
                    <h4>Memorize the squares.</h4>
                    <button onMouseUp={firstRemove}>Start</button>
                </div> : ""
            }
            <div id="question__page">

            </div>
        </div>
        
    )
}

export default Visualtest
