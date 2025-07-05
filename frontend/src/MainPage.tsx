import "./index.css"
import { NavBar } from "./partials/NavBar"
import { IndexCard } from "./IndexCard"

function MainPage() {

  return (
    <>
      <NavBar />
      <IndexCard />

    <div className="seasonal-box card" style={{"height": "400px"}}>
      <div className="card-body d-flex align-items-center justify-content-center">
        <h1 className="fw-bold fs-100 font-style-fjallaone">Seasonal</h1>
      </div>
    </div>
    </>
  )
}

export default MainPage
