import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
// import useCounter from "../hooks/use-counter";

const reducer = (state, action) => {
    // return {
    //     ...state,
    //     count: state.count + 1,
    // };

    // handling STATES with 'action' object received from 'dispatcher'
    if (action.type === "increment") {
        return {
            ...state,
            count: state.count + 1,
        };
    }

    if (action.type === "change-value-to-add") {
        return {
            ...state,
            valueToAdd: action.payload,
        };
    }
};

function CounterPage({ initialCount }) {
    // const { count, increment } = useCounter(initialCount);

    // ⬇️ Refactor to make use of 'useReducer'
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatcher] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    });
    const increment = () => {
        // setCount(count + 1);
        // dispatcher();
        // dispatching an 'action' oject-using dispatcher()
        dispatcher({
            type: "increment",
        });
    };

    const decrement = () => {
        // setCount(count - 1);
    };

    const handleChange = (event) => {
        // '|| 0' to return 0, if user delete all data from input element and as parseInt('') of empty string is 'NaN'
        const value = parseInt(event.target.value) || 0;

        // setValueToAdd(value);
        // dispatching an 'action' oject-using dispatcher()
        dispatcher({
            type: "change-value-to-add",
            payload: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    };

    return (
        <Panel className="m-3">
            {/* <h1 className="text-lg">Count is {count}</h1> */}
            <h1 className="text-lg">Count is {state.count}</h1>

            {/* <Button onClick={increment}>Increment</Button> */}
            <div className="flex flex-row">
                <Button onClick={increment} primary rounded>
                    Increment
                </Button>
                <Button onClick={decrement} secondary rounded>
                    Decrement
                </Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    // value={valueToAdd || ""}
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button success rounded>
                    Add it
                </Button>
            </form>
        </Panel>
    );
}

export default CounterPage;
