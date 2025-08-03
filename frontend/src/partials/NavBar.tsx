import "./partials-styles/additional-styling.css"
import derssIcom from "../assets/dress-svg.svg"
import { Link } from "react-router"
import { useRef, useState, useEffect, type JSX } from "react"
import ReactDOMServer from "react-dom/server";

//images imports 
import male_model_nav_menu from "../assets/male_model_nav_menu.jpg"
import female_model_nav_menu from "../assets/female_model_nav_menu.jpg"


import {ManClothingTypes, ManShoeTypes, ManAccessoriesTypes, WomanClothingTypes, WomanShoeTypes, WomanAccessoriesTypes, Brands} from "../additional/navExpandMenuTypes"

export const NavBar = () => {

    const navExpandMenu = useRef<HTMLDivElement>(null);

    const[clothesList, setClothesList] = useState<string>("");
    const[shoesList, setShoesList] = useState<string>("");
    const[accessoriesList, setAccessoriesList] = useState<string>("");
    const[brandsList, setBrandsList] = useState<string>("");


    const ExpandMenuActive = () => {
        if(navExpandMenu.current){
            navExpandMenu.current.classList.remove("nav-expand-menu-inactive")
            navExpandMenu.current.classList.add("nav-expand-menu-active")
        }
    }
    const ExpandMenuInactive = () => {
        if(navExpandMenu.current){

            navExpandMenu.current.innerHTML = `
            <ul class="clothes-list list-unstyled">
                <li><h4 class="fw-bold">Clothes</h4></li>
                ${clothesList}
            </ul>
            <ul class="shoes-list list-unstyled">
                <li><h4 class="fw-bold">Shoes</h4></li>
                ${shoesList}
            </ul>
            <ul class="accessories-list list-unstyled">
                <li><h4 class="fw-bold">Accessories</h4></li>
                ${accessoriesList}
            </ul>
            <ul class="brands-list list-unstyled">
                <li><h4 class="fw-bold">Brands</h4></li>
                ${brandsList}
            </ul>
            `
            navExpandMenu.current.classList.remove("nav-expand-menu-active")
            navExpandMenu.current.classList.add("nav-expand-menu-inactive")
        }
    }
    const ExpandMenuActiveHot = () => {
        if(navExpandMenu.current){
            navExpandMenu.current.innerHTML = `
            <div class="card border-0 nav-card-item d-flex align-items-center" >
                <img class="card-img-top" src=${male_model_nav_menu} alt="Male Model Image Navbar">
                <h3 class="card-body fw-bold">For Him</h3>
            </div>
            <div class="card border-0 nav-card-item d-flex align-items-center">
                <img class="card-img-top" src=${female_model_nav_menu} alt="Female Model Image Navbar">
                <h3 class="card-body fw-bold">For Her</h3>
            </div>
        `
        }
    }

    useEffect(() => {
        setBrandsList(Brands)
    }, [])

    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark gradient-custom" style={{"height": "110px"}}>
    <div className="container">
        <Link className="navbar-brand text-dark d-flex flex-column justify-content-center" to="/">Home</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fa-solid fa-bars" style={{"color": "#280028"}}></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1" onMouseEnter={() => {
                
                setClothesList(ManClothingTypes);
                setShoesList(ManShoeTypes);
                setAccessoriesList(ManAccessoriesTypes);
                ExpandMenuActive();
            }} onMouseLeave={ExpandMenuInactive}>
            <a className="nav-link active text-dark d-flex flex-column justify-content-center" aria-current="page" href="#!">
                <div>
                    <i className="fa-solid fa-shirt fa-lg" style={{"color": "#280028"}}></i>
                </div>
                Him
            </a>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1" onMouseEnter={() => {
                setClothesList(WomanClothingTypes);
                setShoesList(WomanShoeTypes);
                setAccessoriesList(WomanAccessoriesTypes);
                ExpandMenuActive();
            }} onMouseLeave={ExpandMenuInactive}>
            <a className="nav-link active text-dark d-flex flex-column justify-content-center" href="#!">
                <div>
                    <img src={derssIcom} alt="dress-icon" className="dress-icon" />
                </div>
                Her
            </a>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1" onMouseEnter={() => {ExpandMenuActiveHot(); ExpandMenuActive()}} onMouseLeave={ExpandMenuInactive}>
            <a className="nav-link active text-dark d-flex flex-column justify-content-center" href="#!">
                <div>
                    <i className="fa-solid fa-fire fa-2xl" style={{"color": "#280028"}}></i>
                </div>
                Hot
            </a>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
            <Link to="/customize" className="nav-link active text-dark d-flex flex-column justify-content-center">
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
            <a className="nav-link text-dark d-flex flex-column justify-content-center" href="#!">
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
    <div ref={navExpandMenu} onMouseEnter={ExpandMenuActive} onMouseLeave={ExpandMenuInactive} className="nav-expand-menu-inactive d-flex 
    flex-row position-absolute justify-content-around" style={{"zIndex": "1"}}>
        <ul className="clothes-list list-unstyled">
            <li><h4 className="fw-bold">Clothes</h4></li>
            {/* {clothesList} */}
        </ul>
        <ul className="shoes-list list-unstyled">
            <li><h4 className="fw-bold">Shoes</h4></li>
            {shoesList}
        </ul>
        <ul className="accessories-list list-unstyled">
            <li><h4 className="fw-bold">Accessories</h4></li>
            {accessoriesList}
        </ul>
        <ul className="brands-list list-unstyled">
            <li><h4 className="fw-bold">Brands</h4></li>
            {brandsList}
        </ul>
    </div>

    </>
    )
}