import {fetchData} from '../../AuthServer'


// const axios = require('axios').default;
function Players() {
  const [responseData,setResponseData]=useState([]);
   

  
  // let resoposeData=[];

async function getData(){
  
  const reqData ={
    // "userid":'1'
  };
  const authRequest = {
  "method":"get",
  "url":"user/players",
  "data":reqData
}
fetchData(authRequest).then((response)=>{
  // resoposeData=response.data.data;
  // console.log(resoposeData);
  setResponseData(response.data.data)
}).catch(function(error){
  console.log(error);
})
}

  useEffect(() => {
    getData()
  }, [])
  
  console.log(responseData);

}



{dataUpcomming.map((session, index) => {
  return (
    <>
      <div className="table-row">
          <div className="col-51">PS-{session.session_id}</div>
          <div className="col-51">{session.type}</div>
          <div className="col-51">{session.date}</div>
          <div className="col-51">{session.time}</div>
          <div className="col-51"><Link to={"/player/PSessionDetails"}><Button variant="secondary">View</Button></Link></div>
          
      </div>
      <hr></hr>
    </>
  );
})}