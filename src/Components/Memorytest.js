import React, {useState, useEffect} from 'react'
import './Memorytest.css'

function Memorytest() {
    const [start, setStart] = useState(false)
    const [reset, setReset] = useState(true)
    const [resetx, setResetx] = useState(false)
    const [level, setLevel] = useState(4)
    const [limitlist, setLimitlist] = useState([1,2,3])
    const [strike, setStrike] = useState(0)

    useEffect(() => {
        const container = document.getElementById("chimp__test")
        for (var i = 0; i < 25; i++) {
            var newP = document.createElement("p");
            container.appendChild(newP);
        }
    }, [])

    const selector = (e) => {

        if (start && e.target.classList.contains(`numstart`)) {
            if (e.target.classList.contains(`num${limitlist[0]}`)) {
                document.querySelector(`.num${limitlist[0]}`).classList.remove(...document.querySelector(`.num${limitlist[0]}`).classList)
                limitlist.shift()
                if (limitlist.length === 0) {
                    let newlist = [...Array(level + 1).keys()]
                    setStart(false)
                    setLevel(level => level + 1)
                    setLimitlist(newlist.splice(1, newlist.length))
                    setResetx(true)
                }
            }
            else {
                setStrike(strike => strike + 1)
                let newlist = [...Array(level).keys()]
                setLimitlist(newlist.splice(1, newlist.length))
                setStart(false)
                setResetx(true)
            }
        }

        if (!start && e.target.classList.contains("num0")) {
            setStart(true)
            document.querySelector(".num0").classList.remove(...document.querySelector(".num0").classList)
            document.querySelectorAll(".numb").forEach(item => {
                item.classList.add("numstart")
                item.classList.remove("numb")
            })
        }
          
    }


    const createPlacement = () => {
        let numberlist = [...Array(25).keys()]
        let elementlist = [...Array(25).keys()]
        numberlist = numberlist.splice(0, level);
        document.querySelectorAll(".numstart").forEach(x => x.classList.remove(...x.classList))

        for (let i = numberlist.length - 1; i >= 0; i--) {
            const random = Math.floor(Math.random() *(i+1));
            [numberlist[i], numberlist[random]] = [numberlist[random], numberlist[i]];
        }
        for (let l = elementlist.length - 1; l >= 0; l--) {
            const random = Math.floor(Math.random() * (l+1));
            [elementlist[l], elementlist[random]] = [elementlist[random], elementlist[l]];
        }
        numberlist.forEach((x, i) => document.getElementById("chimp__test").getElementsByTagName("p")[elementlist[x]].classList.add(`numb`, `num${numberlist[i]}`))
    }

    const testloaded = (e) => {
        e.preventDefault()
        setReset(false)
        createPlacement()
    }

    const continueloaded = (e) => {
        e.preventDefault()
        
        if (strike === 3) {
            setLevel(4)
            setLimitlist([1,2,3])
            setStrike(0)
        }
        else{

            setResetx(false)
            createPlacement()
        }
    }

    return (
        <div onClick={selector} id="memory__container">
            {reset ?
                <div className="starter__page">
                    <h4>Are You Smarter Than a Chimpanzee?</h4>
                    <h4>Click the squares in order according to their numbers.</h4>
                    <h4>The test will get progressively harder.</h4>
                    <button onMouseUp={testloaded}>Start Test</button>
                </div> : ""
            }
            {resetx ?
                <div className="continue__page">
                    <h4>Numbers</h4>
                    <h4>{level-1}</h4>
                    <h4>Strike</h4>
                    <h4>{strike} of 3</h4>
                    { strike < 3 ?
                        <button onMouseUp={continueloaded}>Continue</button> :
                        <button onMouseUp={continueloaded} >Try Again</button>
                    }
                </div> : ""
            }
            <div id="chimp__test" style={{ opacity: reset || resetx ? 0 : 1, pointerEvents: reset || resetx ? 'none' : 'visible' }}></div>
        </div>
    )
}

export default Memorytest
