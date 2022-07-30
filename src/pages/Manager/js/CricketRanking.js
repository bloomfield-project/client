import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../css/CricketRanking.css"

function CricketRanking() {
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
                <h1>BLOOMFIELD Cricket Rankings</h1>
              </div>
              <div className="tabs">
                <h5 className="tab">Batting<hr></hr></h5>
                <h5 className="tab">Balling</h5>
                <h5 className="tab">All-rounders</h5>
                
              </div>
              <hr></hr>
              <div className="table-box-1">
                <div className="table-tabs">

                </div>
                <div className="table">
                    <div className="table-head">

                    </div>
                    <div className="table-row">

                    </div>
                </div>

              </div>
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default CricketRanking;