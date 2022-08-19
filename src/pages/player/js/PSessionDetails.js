import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css"
import "../../player/css/PSessionDetails.css"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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

                    <span className="gap"></span>

                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Caoches</div>
                      <hr style={{width: "95%" , marginTop: "0px"}}></hr>
                      <div className="SessionDetails-row-down">Kamal Weerasinghe</div>
                      <div className="SessionDetails-row-down">Gihan De silva</div>
                      <div className="SessionDetails-row-down">Udesh Perera</div>
                    </div>

                    <span className="gap"></span>

                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Players</div>
                      <hr style={{width: "95%" , marginTop: "0px"}}></hr>
                      <div className="SessionDetails-row-down"><div className="s-r-d-left">BF-001</div><div className="s-r-d-right">Sahan Rishitha</div></div>
                      <div className="SessionDetails-row-down"><div className="s-r-d-left">BF-002</div><div className="s-r-d-right">Gihan Weerasinghe</div></div>
                      <div className="SessionDetails-row-down"><div className="s-r-d-left">BF-003</div><div className="s-r-d-right">Amal perera</div></div>
                    </div>
                    <div className="match-box-down">
                      <Link to={"/player/PSession"}>
                        <Button variant="secondary"> Back </Button>
                      </Link>
                
                  </div>
                </div>

            </div>


        </div>
      </div>
      
      
    </div>
);
}

export default PSessionDetails;