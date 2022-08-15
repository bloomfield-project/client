import React from "react";
function IntroTable({
    Name,
    Age,
    Role,
    Batting,
    Balling,
  }) {
    
  
    return (
      <div style={{display:"flex", flexDirection:"column",justifyContent:"space-between", height:"200px", width:"fit-content", borderRadius:"10px" , marginLeft:"50px"}}>
        <div style={{width: "351px", height: "52px" , backgroundColor: "#006950" , display: "flex", justifyContent:"center", alignItems:"center" , paddingTop: "5px", borderTopRightRadius: "10px" ,borderTopLeftRadius: "10px"}}>
            <h3 style={{color:"white"}}>Gihan Weerasinghe</h3>
        </div>
        <div style={{width: "351px", height:"fit-content" ,display:"flex", justifyContent: "space-between"}}>
            <div style={{width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
              <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>Age</h5>
            </div>
            <div style={{ width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
              <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>35</h5>
            </div>
        </div>
        <div style={{width: "351px", height:"fit-content" ,display:"flex", justifyContent: "space-between"}}>
            <div style={{width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
              <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>Role</h5>
            </div>
            <div style={{ width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
              <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>Batsman</h5>
            </div>
        </div>
        <div style={{width: "351px", height:"fit-content" ,display:"flex", justifyContent: "space-between"}}>
            <div style={{width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
              <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>Batting Style</h5>
            </div>
            <div style={{ width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
              <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>Right Hand</h5>
            </div>
        </div>
        <div style={{width: "351px", height:"fit-content" ,display:"flex", justifyContent: "space-between"}}>
            <div style={{width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px" , borderBottomLeftRadius:"10px"}}>
              <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>Bowling Style</h5>
            </div>
            <div style={{ width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px" , borderBottomRightRadius:"10px"}}>
              <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>Right-arm fast</h5>
            </div>
        </div>
      </div>
    );
  }
  
  export default IntroTable;