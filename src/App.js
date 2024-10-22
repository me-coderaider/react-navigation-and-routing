import Button from "./Button";
function App() {
    return (
        <div>
            <div>
                <Button secondary rounded outline>
                    Click Here!
                </Button>
            </div>
            <div>
                <Button success rounded>
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>See Deals!</Button>
            </div>
            <div>
                <Button danger>Hide Ads!</Button>
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
