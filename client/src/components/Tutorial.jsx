import { Link } from "react-router-dom";

const Tutorial = () => {
    return (
        <div>
            <h1 className='text-white text-5xl text-center font-bold'>Tutorial Page</h1>
            <Link to='/Registration'><button>Sign up now</button></Link>
        </div>
    );
}

export default Tutorial;