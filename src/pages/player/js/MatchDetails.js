import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css"
import "../css/MatchDetails.css"
import Team from "../Team.png"
import opTeam from "../opTeam.jpg"

function MatchDetails() {
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
                <h1>Matches</h1>
            </div> 
              
          <div className="matchesD-container-outer-box">
                {/* match card */}
                <div className="matche-container-outer-box">
                    <div className="match-box-up"><div className="go-out"><h4 style={{color:"#009270", fontSize:"2rem", fontWeight:"bolder"}}>Hero Cup</h4></div></div>
                    <div className="match-box-mid">
                        <div className="match-box-mid-left">
                            <div className="box-mid-left-up"><h4 style={{color:"#a5a5a5"}}>BLOOMFIELD</h4></div>
                            <div className="box-mid-left-mid"><img src={Team}></img></div>
                            <div className="box-mid-left-down"><h5 >176-6 (18.3)</h5></div>
                        </div>
                        <div className="match-box-mid-mid">
                            <div className="box-mid-mid-up"><h5 style={{color:"#a5a5a5"}}>T 20</h5></div>
                            <div className="box-mid-mid-mid">VS</div>
                            <div className="box-mid-mid-down"><h5 style={{color:"#a5a5a5"}}>R.Premadasa Stadium</h5></div>
                        </div>
                        <div className="match-box-mid-right">
                            <div className="box-mid-right-up"><h4 style={{color:"#a5a5a5"}}>N.C.C</h4></div>
                            <div className="box-mid-right-mid"><img src={opTeam}></img></div>
                            <div className="box-mid-right-down"><h5 >175-7 (20)</h5></div>
                        </div>
                    </div>
                    <div className="match-box-down-1">
                        <div className="match-box-down-1-left"><h5 style={{color:"#009270"}}>BLOOMFIELD won by 4 wkts</h5></div>
                        <div className="match-box-down-1-right"><h5 style={{color:"#a5a5a5"}}>2022 JUL 16</h5></div>
                    </div>
                    
                </div>
                {/* match card */}
                <div className="gap-3"></div>

                {/*begin*/}
                <div className="tablee-14">
                    <div className="table-headMD">
                        <div className="col-MD1"><h5>BLOOMFIELD</h5></div>
                        <div className="col-MD2"><h5>176-6 (18.3)</h5></div>
                        
                    </div>
                    <div className="table-head-MD">
                        <div className="col-MD-1"><h5>Batter</h5></div>
                        <div className="col-MD-2"><h5></h5></div>
                        <div className="col-MD-3"><h5>Runs</h5></div>
                        <div className="col-MD-4"><h5>Balls</h5></div>
                        <div className="col-MD-5"><h5>6s</h5></div>
                        <div className="col-MD-6"><h5>4s</h5></div>
                        <div className="col-MD-7"><h5>SR</h5></div>
                        
                    </div>
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Pathum Nissanka</a></div>
                        <div className="col-MD-2">Not-Out</div>
                        <div className="col-MD-3">57</div>
                        <div className="col-MD-4">42</div>
                        <div className="col-MD-5">3</div>
                        <div className="col-MD-6">5</div>
                        <div className="col-MD-7">107.2</div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Danushka Gunathilaka</a></div>
                        <div className="col-MD-2">Out</div>
                        <div className="col-MD-3">17</div>
                        <div className="col-MD-4">13</div>
                        <div className="col-MD-5">0</div>
                        <div className="col-MD-6">2</div>
                        <div className="col-MD-7">103.12</div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Kusal Mendis</a></div>
                        <div className="col-MD-2">Out</div>
                        <div className="col-MD-3">87</div>
                        <div className="col-MD-4">72</div>
                        <div className="col-MD-5">3</div>
                        <div className="col-MD-6">5</div>
                        <div className="col-MD-7">107.2</div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Bhanuka rajapaksha</a></div>
                        <div className="col-MD-2">Out</div>
                        <div className="col-MD-3">87</div>
                        <div className="col-MD-4">72</div>
                        <div className="col-MD-5">3</div>
                        <div className="col-MD-6">5</div>
                        <div className="col-MD-7">107.2</div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Dasun Shanaka</a></div>
                        <div className="col-MD-2">Out</div>
                        <div className="col-MD-3">87</div>
                        <div className="col-MD-4">72</div>
                        <div className="col-MD-5">3</div>
                        <div className="col-MD-6">5</div>
                        <div className="col-MD-7">107.2</div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Wanidu Hasaranga de silva</a></div>
                        <div className="col-MD-2">Out</div>
                        <div className="col-MD-3">87</div>
                        <div className="col-MD-4">72</div>
                        <div className="col-MD-5">3</div>
                        <div className="col-MD-6">5</div>
                        <div className="col-MD-7">107.2</div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Chamika karunarathne</a></div>
                        <div className="col-MD-2">Out</div>
                        <div className="col-MD-3">87</div>
                        <div className="col-MD-4">72</div>
                        <div className="col-MD-5">3</div>
                        <div className="col-MD-6">5</div>
                        <div className="col-MD-7">107.2</div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Dushmantha Chameera</a></div>
                        <div className="col-MD-2">Not-Out</div>
                        <div className="col-MD-3">87</div>
                        <div className="col-MD-4">72</div>
                        <div className="col-MD-5">3</div>
                        <div className="col-MD-6">5</div>
                        <div className="col-MD-7">107.2</div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1">Extras</div>
                        <div className="col-MD-2"></div>
                        <div className="col-MD-3">12</div>
                        <div className="col-MD-4"></div>
                        <div className="col-MD-5"></div>
                        <div className="col-MD-6"></div>
                        <div className="col-MD-7"></div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1">Total</div>
                        <div className="col-MD-2"></div>
                        <div className="col-MD-3">176</div>
                        <div className="col-MD-4"></div>
                        <div className="col-MD-5"></div>
                        <div className="col-MD-6"></div>
                        <div className="col-MD-7"></div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1">Did Not Bat</div>
                        <div className="col-MD-list"><a href="#">Maheesh Theekshana</a> <b>,</b> <a href="#">Jefry Vandesay</a> </div>
                    </div>
                    
                    
                </div>
                {/*end*/}


                <div className="gap-3"></div>

                {/*begin*/}
                <div className="tablee-14">
                    
                    <div className="table-head-MD">
                        <div className="col-MD-1"><h5>Bowler</h5></div>
                        <div className="col-MD-3"><h5>Overs</h5></div>
                        <div className="col-MD-3"><h5>Wkts</h5></div>
                        <div className="col-MD-4"><h5>Runs</h5></div>
                        <div className="col-MD-5"><h5>Wide Balls</h5></div>
                        <div className="col-MD-6"><h5>No Balls</h5></div>
                        <div className="col-MD-7"><h5>MO</h5></div>
                        <div className="col-MD-6"><h5>Econ</h5></div>
                        
                    </div>
                    
                    
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Dasun Shanaka</a></div>
                        <div className="col-MD-3">2</div>
                        <div className="col-MD-3">1</div>
                        <div className="col-MD-4">13</div>
                        <div className="col-MD-5">0</div>
                        <div className="col-MD-6">0</div>
                        <div className="col-MD-7">1</div>
                        <div className="col-MD-6">6.02</div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Wanidu Hasaranga de silva</a></div>
                        <div className="col-MD-3">5</div>
                        <div className="col-MD-3">3</div>
                        <div className="col-MD-4">24</div>
                        <div className="col-MD-5">0</div>
                        <div className="col-MD-6">0</div>
                        <div className="col-MD-7">1</div>
                        <div className="col-MD-6">4.98</div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Chamika karunarathne</a></div>
                        <div className="col-MD-3">3</div>
                        <div className="col-MD-3">2</div>
                        <div className="col-MD-4">17</div>
                        <div className="col-MD-5">0</div>
                        <div className="col-MD-6">3</div>
                        <div className="col-MD-7">0</div>
                        <div className="col-MD-6">5.78</div>
                    </div>
                    <hr></hr>
                    <div className="table-row-MD">
                        <div className="col-MD-1"><a href="#">Dushmantha Chameera</a></div>
                        <div className="col-MD-3">5</div>
                        <div className="col-MD-3">2</div>
                        <div className="col-MD-4">43</div>
                        <div className="col-MD-5">03</div>
                        <div className="col-MD-6">0</div>
                        <div className="col-MD-7">0</div>
                        <div className="col-MD-6">8.02</div>
                    </div>
                    <hr></hr>
                    
                    
                </div>
                {/*end*/}

            </div>
            
            


          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default MatchDetails;