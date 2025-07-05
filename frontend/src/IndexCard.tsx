import "./styles/index-card.css"
import modelsImage from "./assets/Model_Colorized.jpeg"

export const IndexCard = () => {
    return (
        <>
        <div className="card text-white rounded-0 border-0" style={{"maxWidth": "1600px"}}>
            <img src={modelsImage} className="" alt="Models Image"/>
            <div className="card-img-overlay rounded-0" style={{"backgroundColor": "rgba(0, 0, 0, 0.3)"}}>
                <p className="card-text font-size-large fs-60 fw-bolder mt-4 font-style-fjallaone">
                    A way for you to dress like <span className="fs-70 text-decoration-underline">you</span>.
                </p>
            </div>
        </div>
        </>
    )
}