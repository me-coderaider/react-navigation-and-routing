import { useState, useEffect } from "react";
import Button from "../components/Button";

// function useSomething(initialCount) {
function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    return {
        count: count,
        increment,
    };
}

function CounterPage({ initialCount }) {
    const { count, increment } = useCounter(initialCount);
    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={increment}>Increment</Button>
        </div>
    );
}

export default CounterPage;
