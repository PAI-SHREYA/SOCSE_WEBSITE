import { NavLink } from "react-router-dom";
import './Error.css';

export const Error = () =>{
    return <>
    <section className="content">
        <h1>404</h1>
        <h2 className="header">
            <h4>Sorry! Page not found.</h4>
            <p>
                Oops! It seems like the page you're trying to access doesnt exist.
                If you believe there's an issue, feel free to report it.And we will look into it.
            </p>
            <div className="btns">
                <NavLink to="/">return Home</NavLink>
                <NavLink to="/contact">Report Problem</NavLink>
            </div>
        </h2>
    </section>
    </>
};