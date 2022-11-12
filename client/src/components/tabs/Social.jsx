import { Link } from "react-router-dom";

const Social= () => {
    return (
        <div>
            <h1>Social Tab</h1>
            <li>
                <Link to="/Social/SendTip">Send Tip To This Educator</Link>
            </li>
        </div>
    );
}

export default Social;