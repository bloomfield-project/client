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
                      <div className="SessionDetails-row-up">Title</div>
                      <div className="SessionDetails-row-down">Skillbuilders Therapy</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Date</div>
                      <div className="SessionDetails-row-down">2022 Oct 11</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Time</div>
                      <div className="SessionDetails-row-down">09.00 AM</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Mentor</div>
                      <div className="SessionDetails-row-down">Dr.Nayanahari Gunawardane</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Place</div>
                      <div className="SessionDetails-row-down">Bloomfield auditorium</div>
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