import swimwear_model_v2_1 from "../assets/swimwear_v2_model1.jpg"
import swimwear_model_v2_2 from "../assets/swimwear_v2_model2.jpg"
import swimwear_model_v2_3 from "../assets/swimwear_v2_model3.jpg"
import swimwear_model_v2_4 from "../assets/swimwear_v2_model4.jpg"

import "../styles/four-cards.css"

export const FourCards = () => {
    return (
        <>
        <div className="four-cards-component-container d-flex flex-column gap-4 align-items-center">
            <div className="male-female-option d-flex flex-row gap-4 w-75">
                <div className="woman-option border-bottom border-dark border-4">
                    <h1 className="fw-bold">Woman</h1>
                </div>
                <div className="man-option">
                   <h1 className=" text-secondary">Man</h1>
                </div>
            </div>
            <div className="cards-container d-flex flex-row gap-2">
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
            </div>
        </div>
        </>
    )
}