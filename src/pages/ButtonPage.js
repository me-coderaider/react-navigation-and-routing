import { GoBellFill, GoCheckbox } from "react-icons/go";
import Button from "../components/Button";
function ButtonPage() {
    const handleClick = () => {};

    return (
        <div>
            <div>
                <Button
                    secondary
                    rounded
                    className="mb-5"
                    onClick={handleClick}
                >
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

export default ButtonPage;
