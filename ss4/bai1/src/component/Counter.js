import {useState} from "react";

function Counter() {
    const [numberValue1, setNumberValue1] = useState(0);
    const [numberValue2, setNumberValue2] = useState(0);
    const incrementCount1 = () => {
        setNumberValue1(numberValue1 => numberValue1 + 1)
    }
    const incrementCount2 = () => {
        setNumberValue2(numberValue2 => numberValue2 + 2)
    }
    return (
        <>
            <p>Count : {numberValue1}</p>
            <button onClick={incrementCount1}> ADD1</button>
            <p>Count : {numberValue2}</p>
            <button onClick={   incrementCount2}> ADD2</button>


        </>
    )
}

export default Counter;