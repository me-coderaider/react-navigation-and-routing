import { GoBellFill, GoCheckbox } from "react-icons/go";
import Button from "./Button";
function App() {
    const handleClick = () => {
        console.log("Click !!");
    };

    return (
        <div>
            <div>
                <Button secondary rounded onClick={handleClick}>
                    <GoBellFill />
                    Click Here!
                </Button>
            </div>
            <div>
                <Button success outline>
                    <GoCheckbox />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning rounded>
                    See Deals!
                </Button>
            </div>
            <div>
                <Button danger rounded outline>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary>Sale!</Button>
            </div>
            <div>
                <Button>Neutral!</Button>
            </div>
        </div>
    );
}

export default App;
