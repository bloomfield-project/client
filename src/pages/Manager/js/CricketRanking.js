import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../css/CricketRanking.css"
import "../css/table.css"
import profpic from "../../../component/header/profpic.jfif"

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
                <h5 className="tab-active">Batting<hr></hr></h5>
                <h5 className="tab">Balling</h5>
                <h5 className="tab">All-rounders</h5>
              </div>
              <hr></hr>
              <div className="table-box-1">
                <div className="table-tabs">
                    <div className="table-tab">ODI</div>
                    <div className="table-tab-active">T20</div>
                    <div className="table-tab">TEST</div>
                </div>
                <div className="tablee">
                    <div className="table-head">
                        <div className="col-3-1">Position</div>
                        <div className="col-3-2">Player</div>
                        <div className="col-3-3">Rating</div>
                    </div>
                    <div className="table-row">
                        <div className="col-3-1">1</div>
                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="#">Sameera Madushan</a></div>
                        <div className="col-3-3">932</div>
                        
                    </div>
                    <hr></hr>
                    <div className="table-row">
                        <div className="col-3-1">1</div>
                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="#">Sameera Madushan</a></div>
                        <div className="col-3-3">932</div>
                        
                    </div>
                    <hr></hr>
                    <div className="table-row">
                        <div className="col-3-1">1</div>
                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="#">Sameera Madushan</a></div>
                        <div className="col-3-3">932</div>
                        
                    </div>
                    <hr></hr>
                    <div className="table-row">
                        <div className="col-3-1">1</div>
                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="#">Sameera Madushan</a></div>
                        <div className="col-3-3">932</div>
                        
                    </div>
                    
                </div>

              </div>
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default CricketRanking;