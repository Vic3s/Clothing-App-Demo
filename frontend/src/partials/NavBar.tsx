import "./partials-styles/additional-styling.css"
import derssIcom from "../assets/dress-svg.svg"
import { Link } from "react-router"

export const NavBar = () => {

    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark gradient-custom" style={{"height": "110px"}}>
    <div className="container">
        <Link className="navbar-brand text-dark" to="/">Home</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fa-solid fa-bars" style={{"color": "#280028"}}></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
            <a className="nav-link active text-dark" aria-current="page" href="#!">
                <div>
                    <i className="fa-solid fa-shirt fa-lg" style={{"color": "#280028"}}></i>
                </div>
                Him
            </a>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
            <a className="nav-link active text-dark" href="#!">
                <div>
                    <img src={derssIcom} alt="dress-icon" className="dress-icon" />
                </div>
                Her
            </a>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
            <a className="nav-link active text-dark" href="#!">
                <div>
                    <i className="fa-solid fa-fire fa-2xl" style={{"color": "#280028"}}></i>
                </div>
                Hot
            </a>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
            <Link to="/customize" className="nav-link active text-dark">
                <div>
                    <i className="fa-solid fa-person fa-2xl" style={{"color": "#280028"}}></i>
                </div>
                Custome
            </Link>
            </li>

        </ul>

        <div className="brand-container">
            <h1 className="fw-bold">Brand</h1>
        </div>


        <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
            <a className="nav-link text-dark" href="#!">
                <div>
                <i className="fa-solid fa-circle-user fa-2xl" style={{"color": "#280028"}}></i>
                </div>
            </a>
            </li>
        </ul>

        <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
            <input type="search" className="form-control" placeholder="Explore" aria-label="Explore" />
            <button type="button" className="btn btn-outline-dark" data-mdb-ripple-init data-mdb-ripple-color="dark">
            Find
            </button>
        </form>
        </div>
    </div>

    
    </nav>
        
    </>
    )

}