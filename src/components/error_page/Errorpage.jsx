import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="w-fit mx-auto mt-96 text-center">
            <h2 className="text-7xl">404</h2>
            <p className="text-3xl mt-4">Page not found</p>
            <button className="btn mt-6 text-lg"><Link to="/">Back to safety</Link></button>
        </div>
    );
};

export default Errorpage;