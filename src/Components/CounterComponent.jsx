import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increase(){
        setCount(count+1);
        console.log(count);
    }

    return (
        <div className="mt-3">
            <p>{count}</p>
            <button onClick={increase} className="btn btn-primary">
                Click to Increase
            </button>
        </div>
    )
}
export default Counter;