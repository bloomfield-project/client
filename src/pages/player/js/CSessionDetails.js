import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css"
import Button from "react-bootstrap/Button";

function CSessionDetails() {
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
                <h1>Counceling Session Details</h1>
            </div>
            
            <div className="SessionDetails-content">
            
                <div className="SessionDetails-inn-box">
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Full name</div>
                      <div className="SessionDetails-row-down">Gihan Weerasinghe</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Full name</div>
                      <div className="SessionDetails-row-down">Gihan Weerasinghe</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Full name</div>
                      <div className="SessionDetails-row-down">Gihan Weerasinghe</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Full name</div>
                      <div className="SessionDetails-row-down">Gihan Weerasinghe</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Full name</div>
                      <div className="SessionDetails-row-down">Gihan Weerasinghe</div>
                    </div>
                    <div className="match-box-down"><Button variant="secondary"> Back </Button></div>
                </div>

            </div>
         </div>
      </div>
      
      
    </div>
);
}

export default CSessionDetails;