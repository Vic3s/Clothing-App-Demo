import swimwear_model_v2_1 from "../assets/swimwear_v2_model1.jpg"
import swimwear_model_v2_2 from "../assets/swimwear_v2_model2.jpg"
import swimwear_model_v2_3 from "../assets/swimwear_v2_model3.jpg"
import swimwear_model_v2_4 from "../assets/swimwear_v2_model4.jpg"
import swimwear_model_v3_1 from "../assets/swimwear_v3_model1.jpg"
import swimwear_model_v3_2 from "../assets/swimwear_v3_model2.jpg"
import swimwear_model_v3_3 from "../assets/swimwear_v3_model3.jpg"
import swimwear_model_v4_1 from "../assets/swimwear_v4_model1.jpg"
import swimwear_model_v4_2 from "../assets/swimwear_v4_model2.jpg"
import summer_clothes_v2_model1 from "../assets/summer_clothes_v2_model1.jpg"
import summer_clothes_v2_model2 from "../assets/summer_clothes_v2_model2.jpg"
import summer_clothes_v2_model3 from "../assets/summer_clothes_v2_model3.jpg"



import arrow_left from "../assets/arrow-left.svg"
import arrow_right from "../assets/arrow-right.svg"

import { useRef } from "react"

import "../styles/four-cards.css"

export const FourCardsTest = () => {

    //reference choice gender
    const womanChoice = useRef(null);
    const manChoice = useRef(null);

    //reference carousel functionalities
    const arrowLeftRef = useRef<HTMLDivElement>(null);
    const arrowRightRef = useRef<HTMLDivElement>(null);
    const carouselImagesRef = useRef<HTMLDivElement>(null);
    let carouselValue = 1450;
    let carouselIncrement = 0;

    const ChoiceStyling = (choice1: any, choice2: any) => {
        if(choice1 != null && choice2 != null){
            choice1.current.classList.add("fw-bold");
            choice1.current.classList.add("border-bottom");
            choice1.current.classList.add("border-dark");
            choice1.current.classList.add("border-4");

            choice2.current.classList.remove("fw-bold");
            choice2.current.classList.remove("border-bottom");
            choice2.current.classList.remove("border-dark");
            choice2.current.classList.remove("border-4");
        }
    } 

    const ClickArrowLeft = () => {
        if(arrowLeftRef.current){
            if(carouselIncrement > 0){
                if(carouselImagesRef.current){
                    carouselIncrement -= carouselValue
                    carouselImagesRef.current.style.right = `${carouselIncrement}px`
                }
            }
        }
    }

    const CliclArrowRight = () => {
        if(arrowRightRef.current){
            if(carouselIncrement < 2900){
                if(carouselImagesRef.current){
                    carouselIncrement += carouselValue;
                    carouselImagesRef.current.style.right = `${carouselIncrement}px`
                }
            }
        }
    }

    return (
        <>
        <div className="four-cards-component-container d-flex flex-column gap-4 align-items-center">
            <div className="male-female-option d-flex flex-row gap-4 w-75">
                <h1 ref={womanChoice} onClick={() => ChoiceStyling(womanChoice, manChoice)} 
                className="woman-choice-four-cards fw-bold border-bottom border-dark border-4">Woman</h1>

                <h1 ref={manChoice} onClick={() => ChoiceStyling(manChoice, womanChoice)}
                className="man-choice-four-cards">Man</h1>
            </div>
            <div className="cards-arrows-container d-flex position-relative">
                <div onClick={ClickArrowLeft}
                className="left-arrow-button-container position-absolute z-2 h-50 d-flex justify-content-end align-items-end">
                    <div className="left-arrow-button bg-black" ref={arrowLeftRef}>
                        <img src={arrow_left} alt="arrow left icon" />
                    </div>
                </div>

                <div className="cards-container d-flex flex-row gap-2" ref={carouselImagesRef}>
                    <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={swimwear_model_v2_1} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={swimwear_model_v2_2} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={swimwear_model_v2_3} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={swimwear_model_v2_4} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={swimwear_model_v3_1} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={swimwear_model_v3_2} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={swimwear_model_v3_3} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={swimwear_model_v4_1} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                     <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={swimwear_model_v4_2} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                     <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={summer_clothes_v2_model1} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={summer_clothes_v2_model2} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className="card rounded-0 border-0" style={{"width": "22rem"}}>
                        <img className="card-img-top rounded-0" src={summer_clothes_v2_model3} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-20">Bikini</p>
                            <p>Price</p>
                        </div>
                    </div>
                </div>

                <div onClick={CliclArrowRight}
                className="right-arrow-button-container position-absolute z-1 w-100 h-50 d-flex justify-content-end align-items-end">
                    <div className="right-arrow-button bg-black" ref={arrowRightRef}>
                        <img src={arrow_right} alt="arrow right icon" />
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}