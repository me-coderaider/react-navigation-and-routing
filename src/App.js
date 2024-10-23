import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: "adsf",
            label: "Can I use React on a Project?",
            content:
                "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
        },
        {
            id: "adsfasdfa",
            label: "Can I use Javascript on a Project?",
            content:
                "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
        },
        {
            id: "adsffa8sdf",
            label: "Can I use CSS on a Project?",
            content:
                "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
        },
    ];

    return <Accordion items={items} />;
}

export default App;
