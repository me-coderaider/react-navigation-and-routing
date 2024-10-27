import classNames from "classnames";
import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
    const { navigate } = useContext(NavigationContext);

    const classes = classNames("text-blue-500");

    const handleClick = (event) => {
        // console.log(event);
        // for 'ctrl' button + click has done or not.
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        // STOPPING THE PAGE REFRESH
        event.preventDefault();

        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    );
}

export default Link;
