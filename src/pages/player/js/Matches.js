import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css"
import "../css/Matches.css"
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Team from "../Team.png"
import opTeam from "../opTeam.jpg"
import Button from "react-bootstrap/Button";


const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};

function Matches() {
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

            <div className="tabs-contain-box">
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    
                    <TabPane tab="Career" key="1">
                        
                    <div className="matches-container-outer-box">
                        {/* match card */}
                        <div className="matche-container-outer-box">
                            <div className="match-box-up"><div className="go-out"><h4 style={{color:"#009270", fontSize:"2rem", fontWeight:"bolder"}}>Hero Cup</h4></div></div>
                            <div className="match-box-mid">
                                <div className="match-box-mid-left">
                                    <div className="box-mid-left-up"><h4 style={{color:"#a5a5a5"}}>BLOOMFIELD</h4></div>
                                    <div className="box-mid-left-mid"><img src={Team}></img></div>
                                    <div className="box-mid-left-down"><h5 style={{color:"#a5a5a5"}}>Starts at 09.30</h5></div>
                                </div>
                                <div className="match-box-mid-mid">
                                    <div className="box-mid-mid-up"><h5 style={{color:"#a5a5a5"}}>T 20</h5></div>
                                    <div className="box-mid-mid-mid">VS</div>
                                    <div className="box-mid-mid-down"><h5 style={{color:"#a5a5a5"}}>R.Premadasa Stadium</h5></div>
                                </div>
                                <div className="match-box-mid-right">
                                    <div className="box-mid-right-up"><h4 style={{color:"#a5a5a5"}}>N.C.C</h4></div>
                                    <div className="box-mid-right-mid"><img src={opTeam}></img></div>
                                    <div className="box-mid-right-down"><h5 style={{color:"#a5a5a5"}}>2022 Oct 16</h5></div>
                                </div>
                            </div>
                            <div className="match-box-down"><Button variant="secondary">View</Button></div>
                        </div>
                        {/* match card */}
                        <div className="gap-3"></div>

                        {/* match card */}
                        <div className="matche-container-outer-box">
                            <div className="match-box-up"><div className="go-out"><h4 style={{color:"#009270", fontSize:"2rem", fontWeight:"bolder"}}>Hero Cup</h4></div></div>
                            <div className="match-box-mid">
                                <div className="match-box-mid-left">
                                    <div className="box-mid-left-up"><h4 style={{color:"#a5a5a5"}}>BLOOMFIELD</h4></div>
                                    <div className="box-mid-left-mid"><img src={Team}></img></div>
                                    <div className="box-mid-left-down"><h5 style={{color:"#a5a5a5"}}>Starts at 09.30</h5></div>
                                </div>
                                <div className="match-box-mid-mid">
                                    <div className="box-mid-mid-up"><h5 style={{color:"#a5a5a5"}}>T 20</h5></div>
                                    <div className="box-mid-mid-mid">VS</div>
                                    <div className="box-mid-mid-down"><h5 style={{color:"#a5a5a5"}}>R.Premadasa Stadium</h5></div>
                                </div>
                                <div className="match-box-mid-right">
                                    <div className="box-mid-right-up"><h4 style={{color:"#a5a5a5"}}>N.C.C</h4></div>
                                    <div className="box-mid-right-mid"><img src={opTeam}></img></div>
                                    <div className="box-mid-right-down"><h5 style={{color:"#a5a5a5"}}>2022 Oct 16</h5></div>
                                </div>
                            </div>
                            <div className="match-box-down"><Button variant="secondary">View</Button></div>
                        </div>
                        {/* match card */}
                        <div className="gap-3"></div>


                        {/* match card */}
                        <div className="matche-container-outer-box">
                            <div className="match-box-up"><div className="go-out"><h4 style={{color:"#009270", fontSize:"2rem", fontWeight:"bolder"}}>Hero Cup</h4></div></div>
                            <div className="match-box-mid">
                                <div className="match-box-mid-left">
                                    <div className="box-mid-left-up"><h4 style={{color:"#a5a5a5"}}>BLOOMFIELD</h4></div>
                                    <div className="box-mid-left-mid"><img src={Team}></img></div>
                                    <div className="box-mid-left-down"><h5 style={{color:"#a5a5a5"}}>Starts at 09.30</h5></div>
                                </div>
                                <div className="match-box-mid-mid">
                                    <div className="box-mid-mid-up"><h5 style={{color:"#a5a5a5"}}>T 20</h5></div>
                                    <div className="box-mid-mid-mid">VS</div>
                                    <div className="box-mid-mid-down"><h5 style={{color:"#a5a5a5"}}>R.Premadasa Stadium</h5></div>
                                </div>
                                <div className="match-box-mid-right">
                                    <div className="box-mid-right-up"><h4 style={{color:"#a5a5a5"}}>N.C.C</h4></div>
                                    <div className="box-mid-right-mid"><img src={opTeam}></img></div>
                                    <div className="box-mid-right-down"><h5 style={{color:"#a5a5a5"}}>2022 Oct 16</h5></div>
                                </div>
                            </div>
                            <div className="match-box-down"><Button variant="secondary">View</Button></div>
                        </div>
                        {/* match card */}
                        <div className="gap-3"></div>


                        {/* match card */}
                        <div className="matche-container-outer-box">
                            <div className="match-box-up"><div className="go-out"><h4 style={{color:"#009270", fontSize:"2rem", fontWeight:"bolder"}}>Hero Cup</h4></div></div>
                            <div className="match-box-mid">
                                <div className="match-box-mid-left">
                                    <div className="box-mid-left-up"><h4 style={{color:"#a5a5a5"}}>BLOOMFIELD</h4></div>
                                    <div className="box-mid-left-mid"><img src={Team}></img></div>
                                    <div className="box-mid-left-down"><h5 style={{color:"#a5a5a5"}}>Starts at 09.30</h5></div>
                                </div>
                                <div className="match-box-mid-mid">
                                    <div className="box-mid-mid-up"><h5 style={{color:"#a5a5a5"}}>T 20</h5></div>
                                    <div className="box-mid-mid-mid">VS</div>
                                    <div className="box-mid-mid-down"><h5 style={{color:"#a5a5a5"}}>R.Premadasa Stadium</h5></div>
                                </div>
                                <div className="match-box-mid-right">
                                    <div className="box-mid-right-up"><h4 style={{color:"#a5a5a5"}}>N.C.C</h4></div>
                                    <div className="box-mid-right-mid"><img src={opTeam}></img></div>
                                    <div className="box-mid-right-down"><h5 style={{color:"#a5a5a5"}}>2022 Oct 16</h5></div>
                                </div>
                            </div>
                            <div className="match-box-down"><Button variant="secondary">View</Button></div>
                        </div>
                        {/* match card */}

                    </div>           

                        
                        
                    </TabPane>
                    <TabPane tab="Practice" key="2">

                        <div className="matches-container-outer-box">
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
                                <div className="match-box-down"><Button variant="secondary">View</Button></div>
                            </div>
                            {/* match card */}
                            <div className="gap-3"></div>

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
                                <div className="match-box-down"><Button variant="secondary">View</Button></div>
                            </div>
                            {/* match card */}
                            <div className="gap-3"></div>

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
                                <div className="match-box-down"><Button variant="secondary">View</Button></div>
                            </div>
                            {/* match card */}
                            <div className="gap-3"></div>


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
                                <div className="match-box-down"><Button variant="secondary">View</Button></div>
                            </div>
                            {/* match card */}

                        </div>  
                        
                    </TabPane>
                
                </Tabs>
            </div>
            
            
            


          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default Matches;