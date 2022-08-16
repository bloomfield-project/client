import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css"
import "../../player/css/PSessionDetails.css"

function PSessionDetails() {
  return (
    <div className="page-container-1">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="body-container-1">
        <div className="navbar-container">
          <Navbar></Navbar>
        </div>
        <div className="body-container-2">
           
            <div className="title">
                <h1>Practice Session Details</h1>
            </div>
            
            <div className="SessionDetails-content">
            
                <div className="SessionDetails-inn-box">
                    rtyh
                </div>

            </div>


        </div>
      </div>
      
      
    </div>
);
}

export default PSessionDetails;