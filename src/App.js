import "./App.css";
import React ,{useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./component/header/Header";
// import Login from "./component/Login/Login";
import FogotPassForm from "./component/Login/Login Forms/FogotPassForm";
import ResetPassForm from "./component/Login/Login Forms/ResetPassForm";
import LoginForm from "./component/Login/Login Forms/LoginForm";
import Navbar from "./component/NavigationBar/Navbar";
import Tables from "./component/Table/Table";
import Home from "./pages/Home";
import Button from 'react-bootstrap/Button';
import Players from "./pages/Manager/js/Players";
import CricketRanking from "./pages/Manager/js/CricketRanking";
import Session from "./pages/Manager/js/Session";
import Membership from "./pages/Manager/js/Membership";
import SampleForm from "./component/Form/SampleForm";
import FormData from "./component/Form/ResetSubmit";
import PlayerRanking from "./pages/player/js/playerRanking"/* */
import Progress from "./pages/player/js/Progress"
import PrivateProgress from "./pages/player/js/PrivateProgress"
import Matches from "./pages/player/js/Matches";
import MatchDetails from "./pages/player/js/MatchDetails";
import MMatchDetails from "./pages/Manager/js/MMatchDetails";
import PlayerRankingM from "./pages/Manager/js/PlayerRanking"
import PSessionDetails from "./pages/player/js/PSessionDetails";
import CSessionDetails from "./pages/player/js/CSessionDetails";
import EventDetails from "./pages/player/js/EventDetails";
import IntroTable from "./component/IntroTable/IntroTable";
import Calander from "./component/Calander/Calander";
import PracticeSessions from "./pages/Coach/js/PracticeSessions";
import Appoinments from "./pages/Coach/js/Appoinments";
import ViewAppoinments from "./pages/Coach/js/ViewAppoinments";
import Test from "./component/Table/test";
import PlayerRegistration from "./pages/Manager/js/PlayerRegistration";
import EditPlayerDetails from "./pages/Manager/js/EditPlayerDetails";
import AddCouncellingSession from "./pages/Manager/js/AddCouncellingSession";
import EditCouncellingSession from "./pages/Manager/js/EditCouncellingSession";
import AddEvent from "./pages/Manager/js/AddEvent";
import EditEvent from "./pages/Manager/js/EditEvent";
import Achivement from "./pages/Manager/js/Achivement";
import SampleCard from "./component/Card/SampleCard";
import AddTeamAchivement from "./pages/Manager/js/AddTeamAchivement";
import AddTeamAchivements from "./pages/naya_admin/js/AddTeamAchivement";

import MatchDetail from "./pages/Manager/js/MatchDetail";
import Protected_route from "./Protected_route"


import Players1 from "./pages/Coach/js/Players";
import PlayerDetails from "./pages/Coach/js/PlayerDetails";
import AddMatch from "./pages/Manager/js/AddMatch";
import Matches_1 from "./pages/Coach/js/Matches_1";
import Matches_2 from "./pages/Coach/js/Matches_2";
import Macthes_3 from "./pages/Coach/js/Matches_3";
import EditPlayerPerformance from "./pages/Coach/js/EditPlayerPerformance"

import Psession from "./pages/player/js/Psessions";
import PEvents from "./pages/player/js/PEvents";
import PlayerRankingList from "./pages/player/js/PlayerRankingList";
import Payments from "./pages/player/js/Payments";

import PlayerPerformance from "./pages/Coach/js/PlayerPerformance";
import Matches_4 from "./pages/Coach/js/Matches_4";
import MatchesTeams from "./component/MatchesTeams/MatchesTeams";
import SearchTable from "./component/Search/SearchTable";
import CalanderDetails from "./pages/Coach/js/CalanderDetails";
import AddPracticeSession from "./pages/Coach/js/AddPracticeSession";
import CheckBox from "./component/CheckBox/CheckBox";
import MarkPlayerProgress from "./pages/Coach/js/MarkPlayerProgress";
import AddMultipleSelections from "./component/AddMultipleSelections/AddMultipleSelections";

import AddTournamentMatch from "./pages/Manager/js/AddTournamentMatch";

import AddTournamentDetail from "./pages/Manager/js/AddTournamentDetail";
import Membershipfee from "./pages/naya_admin/js/Membershipfee";
import Employees from "./pages/naya_admin/js/Employees";
import AddEmployee from "./pages/naya_admin/js/AddEmployee";
import ViewPracticeSessions from "./pages/Coach/js/ViewPracticeSessions";
import BloomFieldCricketRanking from "./pages/Coach/js/BloomFieldCricketRanking";
import AchievementCV from "./pages/Coach/js/AchievementsCoachView";



import APlayerRanking from "./pages/admin/js/APlayerRanking";
import EditEmployee from "./pages/naya_admin/js/EditEmployee";
import UserView from "./component/UserView/UserView";
import UpdateDeleteUser from "./pages/naya_admin/js/UpdateDeleteUser";
import Achivements from "./pages/naya_admin/js/Achivements";
import Accounts from "./pages/naya_admin/js/Accounts";
import PlayerDetail from "./pages/naya_admin/js/PlayerDetail";
import AnnualMembership from "./pages/naya_admin/js/AnnualMembership";
import Feedback from "./pages/naya_admin/js/Feedback";
import Ranking from "./pages/naya_admin/js/Ranking";
import PlayerRankings from "./pages/naya_admin/js/PlayerRankings";
import Profile from "./pages/Profile/Profile";
// import AProgress from "./pages/admin/js/AProgress"
// import APrivateProgress from "./pages/admin/js/APrivateProgress"


import LoginN from "./pages/login/js/LoginN";

import EditPracticeSessions from "./pages/Coach/js/EditPracticeSessions";
import EditRowDetailsWithButton from "./component/EditRowDetailsWithButton/EditRowDetailsWithButton";
import PlayerDetails_1 from "./pages/Coach/js/PlayerDetails_1";
import PlayerProgress_1 from "./pages/Coach/js/PlayerProgress_1";
import PlayerFeedback from "./pages/Coach/js/PlayerFeedback";
import Teams from "./pages/Coach/js/Teams";

import FileUpload from "./component/Form/FileUpload";
import Achivementss from "./pages/player/js/Achivements"
import Appointments from "./pages/player/js/Appointments"

import PendingMatches from "./pages/player/js/PendingMatches"
import MPendingMatches from "./pages/Manager/js/MPendingMatches"


import AddPracticeMatch from "./pages/Manager/js/AddPracticeMatch";
import ViewTeam from "./pages/Coach/js/ViewTeam";
import CreateTeam from "./pages/Coach/js/CreateTeam";
import DashboardP from "./pages/player/js/DashboardP";

import ForgotPassword from "./pages/login/js/ForgotPassword";


//redux store

import store , {persistor} from "./redux/store";
import {Provider} from 'react-redux';
import {PersistGate } from 'redux-persist/integration/react'
import TeamToMatch from "./pages/Coach/js/TeamToMatch";
import FutureTeams from "./pages/Coach/js/FutureTeams";
import ResetPassword from "./pages/login/js/ResetPassword";
import GiveFeedback from "./pages/player/js/GiveFeedback";





const List = [
  {id:1, name: "John Doe" , Age: 27},
  {id:1, name: "John Doe" , Age: 27},
  {id:1, name: "John Doe" , Age: <Button variant="secondary">View</Button>},
]

const colNames = ['id','Name','Age']



function App() {

 let sidebar 


  const [login, setLogin] = useState("");
  // console.log(login.role)
  // if(login.role=="manager"){
  //   sidebar=SidebarData
  //   // console.log(sidebar)
  //   localStorage.setItem('sidebar',sidebar)
  //   window.location.assign("/manager/Players")
  // }
  // else if(login.role=="Player"){
  //   sidebar=SidebarDataPlayer
  //   console.log(sidebar)
  // }
  // else if(login.role=="coach"){
  //   sidebar=SidebarDataPlayer
  //   console.log(sidebar)
  // }
  // else if(login.role=="Admin"){
  //   sidebar=SidebarDataAdmin
  //   console.log(sidebar)
  // }
  return (
    <div className="App">
      <BrowserRouter>
        {/* <FogotPassForm /> */}
        {/* <ResetPassForm /> */}

        <Provider store={store}>
          <PersistGate persistor={persistor}>

        <Routes>

          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path='/:user_id/:token' element={<ResetPassword />} />


          <Route path="/ResetPassword" element={<ResetPassForm />} />
          <Route path="/FogotPassword" element={<FogotPassForm/>} />
          <Route path="/" element={<LoginN/>} />
          <Route path="/client" element={<Home/>} />
          <Route path="/Navbar" element={<Navbar user={sidebar}/>} />
          <Route path="/Table" element={<Tables list={List} colNames={colNames} />} />
          <Route path="/manager/Players" element={<Protected_route role="manager"><Players /></Protected_route>} />
          <Route path="/manager/FormData" element={<Protected_route role="manager"><FormData /></Protected_route>} />
          <Route path="/manager/CricketRanking"  element={<Protected_route role="manager"><CricketRanking/></Protected_route>}/>
          <Route path="/manager/Session"  element={<Protected_route role="manager"><Session/></Protected_route>}/>
          <Route path="/manager/Membership"  element={<Protected_route role="manager"><Membership/></Protected_route>}/>
          <Route path="/manager/SampleForm" element={<Protected_route role="manager"><SampleForm /></Protected_route>} />
          {/* <Protected_route path="/player/playerRanking" component={PlayerRanking } /> */}
          <Route path="/player/playerRanking" element={<Protected_route role="player"> <PlayerRanking/> </Protected_route>}/>
          <Route path="/manager/playerRanking/:id" element={<Protected_route role="manager"><PlayerRankingM/></Protected_route>}></Route>
          <Route path="/player/Progress" element={<Protected_route role="player"><Progress /></Protected_route>} />
          <Route path="/player/PrivateProgress/:id" element={<Protected_route role="player"><PrivateProgress /></Protected_route>} />
          <Route path="/player/Matches" element={<Protected_route role="player"><Matches /></Protected_route>} />


          <Route path="/player/MatchDetails/:id" element={<Protected_route role="player"><MatchDetails /></Protected_route>} />
          <Route path="/manager/MMatchDetails/:id" element={<Protected_route role="manager"><MMatchDetails /></Protected_route>} />
          {/* add new router here */}


          <Route path="/player/Psession/PSessionDetails" element={<Protected_route role="player"><PSessionDetails /></Protected_route>} />
          <Route path="/player/CSessionDetails" element={<Protected_route role="player"><CSessionDetails /></Protected_route>} />
          <Route path="/player/EventDetails" element={<Protected_route role="player"><EventDetails /></Protected_route>} />
          <Route path="/player/EventDetails" element={<Protected_route role="player"><EventDetails /></Protected_route>} />
          <Route path="/player/Achivements" element={<Protected_route role="player"><Achivementss /></Protected_route>} />
          <Route path="/player/giveFeedback" element={<Protected_route role="player"><GiveFeedback /></Protected_route>} />
          {/* <Route path="/admin/AProgress" element={<AProgress />} /> */}
          {/* <Route path="/admin/APrivateProgress" element={<APrivateProgress />} /> */}

          <Route path="/test" element={<Test />} />
          <Route path="/manager/PlayerRegistration" element={<Protected_route role="manager"><PlayerRegistration /></Protected_route>} />
          <Route path="/manager/EditPlayerDetails/:id" element={<Protected_route role="manager"><EditPlayerDetails /></Protected_route>} />/
          <Route path="/manager/AddCouncellingSession" element={<Protected_route role="manager"><AddCouncellingSession /></Protected_route>} />
          <Route path="/manager/EditCouncellingSession/:id" element={<Protected_route role="manager"><EditCouncellingSession /></Protected_route>} />
          <Route path="/manager/AddEvent" element={<Protected_route role="manager"><AddEvent /></Protected_route>} />
          <Route path="/manager/EditEvent/:id" element={<Protected_route role="manager"><EditEvent /></Protected_route>} />
          <Route path="/manager/Achivement" element = {<Protected_route role="manager"><Achivement/></Protected_route>} />
          <Route path="/card" element = {<SampleCard/>} />
          <Route path="/manager/AddTeamAchivement" element={<Protected_route role="manager"><AddTeamAchivement/></Protected_route>}  />
          <Route path="/player/I" element={<Protected_route role="player"><IntroTable /></Protected_route>} />
          <Route path="/C" element={<Calander />} />
          <Route path="/manager/MatchDetail" element={<Protected_route role="manager"><MatchDetail /></Protected_route>} />
          <Route path="/manager/AddMatch" element={<Protected_route role="manager"><AddMatch /></Protected_route>} />
          <Route path="/manager/AddTournamentMatch/:type" element={<Protected_route role="manager"><AddTournamentMatch /></Protected_route>} />
          <Route path="/manager/AddPracticeMatch" element={<Protected_route role="manager">< AddPracticeMatch/></Protected_route>} />

          
          <Route path="/coach/CreateTeam" element={<Protected_route role="coach"><CreateTeam/></Protected_route>} />
          <Route path="/coach/Ap" element={<Protected_route role="coach"><ViewAppoinments/></Protected_route>} />
          <Route path="/coach/PlayerD" element={<Protected_route role="coach"><PlayerDetails /></Protected_route>} />
          <Route path="/coach/M1" element={<Protected_route role="coach"><Matches_1 /></Protected_route>} />
          <Route path="/coach/M" element={<Protected_route role="coach"><MatchesTeams /></Protected_route>} />
          <Route path="/coach/CD" element={<Protected_route role="coach"><CalanderDetails /></Protected_route>} />
          <Route path="/coach/PSessions" element={<Protected_route role="coach"><PracticeSessions /></Protected_route>} />
          <Route path="/coach/APS" element={<Protected_route role="coach"><AddPracticeSession /></Protected_route>} />
          <Route path="/coach/CB" element={<Protected_route role="coach"><CheckBox /></Protected_route>} />
          <Route path="/coach/MPP/:id/:match_id/:type" element={<Protected_route role="coach"><MarkPlayerProgress /></Protected_route>} />
          <Route path="/coach/MC" element={<Protected_route role="coach"><AddMultipleSelections /></Protected_route>} />
          <Route path="/coach/VPS/:id" element={<Protected_route role="coach"><ViewPracticeSessions /></Protected_route>} />
          <Route path="/coach/PD1" element={<Protected_route role="coach"><PlayerDetails_1 /></Protected_route>} />
          <Route path="/coach/PPr1" element={<Protected_route role="coach"><PlayerProgress_1 /></Protected_route>} />
          <Route path="/coach/PFeedback" element={<Protected_route role="coach"><PlayerFeedback /></Protected_route>} />
          <Route path="/coach/m_1" element={<Protected_route role="coach"><Matches_1 /></Protected_route>} />
          <Route path="/coach/matches4/:id" element={<Protected_route role="coach"><Matches_4 /></Protected_route>} />
          <Route path="/coach/bloomfieldCricketRanking" element={<Protected_route role="coach"><BloomFieldCricketRanking /></Protected_route>} />
          <Route path="/coach/players" element={<Protected_route role="coach"><Players1 /></Protected_route>} />
          <Route path="/coach/appoinments" element={<Protected_route role="coach"><Appoinments /></Protected_route>} />
          <Route path="/coach/matches" element={<Protected_route role="coach"><Matches_2 /></Protected_route>} />
          <Route path="/coach/matches3/:id/:Tid" element={<Protected_route role="coach"><Macthes_3 /></Protected_route>} />
          <Route path="/coach/playerPerformance/:id/:player/:team" element={<Protected_route role="coach"><PlayerPerformance /></Protected_route>} />
          <Route path="/coach/editPlayerPerformance/:id/:player/:team" element={<Protected_route role="coach"><EditPlayerPerformance /></Protected_route>} />
          <Route path="/coach/practiceSessions" element={<Protected_route role="coach"><PracticeSessions /></Protected_route>} />
          <Route path="/coach/editPracticeSession/:id" element={<Protected_route role="coach"><EditPracticeSessions /></Protected_route>} />
          <Route path="/coach/teams" element={<Protected_route role="coach"><Teams /></Protected_route>} />
          <Route path="/coach/viewTeams/:id" element={<Protected_route role="coach"><ViewTeam /></Protected_route>} />
          <Route path="/coach/achievement" element={<Protected_route role="coach"><AchievementCV /></Protected_route>} />
          <Route path="/coach/profile" element={<Protected_route role="coach"><Profile /></Protected_route>} />
          <Route path="/coach/TeamToMatch/:id" element={<Protected_route role="coach"><TeamToMatch /></Protected_route>} />
          <Route path="/coach/FutureTeams/:id/:name" element={<Protected_route role="coach"><FutureTeams /></Protected_route>} />



          <Route path="/player/Psession" element={<Protected_route role="player"><Psession /></Protected_route>} />
          <Route path="/player/PEvents" element={<Protected_route role="player"><PEvents /></Protected_route>} />
          <Route path="/player/PlayerRankingList" element={<Protected_route role="player"><PlayerRankingList /></Protected_route>} />
          <Route path="/player/Payments" element={<Protected_route role="player"><Payments /></Protected_route>} />
          <Route path="/player/Appointments" element={<Protected_route role="player"><Appointments /></Protected_route>} />
    
          
          

          <Route path="/manager/AddTournamentDetail" element={<Protected_route role="manager"><AddTournamentDetail /></Protected_route>} />
          <Route path="/admin/Membershipfee" element={<Protected_route role="admin"><Membershipfee/></Protected_route>}  />
          <Route path="/admin/Employees" element={<Protected_route role="admin"><Employees/></Protected_route>}  />
          <Route path="/admin/AddEmployee" element={<Protected_route role="admin"><AddEmployee/></Protected_route>}  />
          <Route path="/admin/EditEmployee/:id" element={<Protected_route role="admin"><EditEmployee /></Protected_route>}  />
          <Route path="/admin/UserView" element={<Protected_route role="admin">< UpdateDeleteUser/></Protected_route>} />
          <Route path="/admin/Achivements" element={<Protected_route role="admin">< Achivements /></Protected_route>} />
          <Route path="/admin/Accounts" element={<Protected_route role="admin">< Accounts /></Protected_route>} />
          <Route path="/admin/PlayerDetail" element={<Protected_route role="admin"><PlayerDetail /></Protected_route>} />

          <Route path="/admin/AddTeamAchivement" element={<Protected_route role="admin"><AddTeamAchivements /></Protected_route>} />


          <Route path="/admin/AnnualMembership" element={<Protected_route role="admin"><AnnualMembership /></Protected_route>} />
          <Route path="/admin/Feedback" element={<Protected_route role="admin"><Feedback /></Protected_route>} />


          <Route path="/admin/Raking" element={<Protected_route role="admin"><Ranking /></Protected_route>} />
          <Route path="/admin/PlayerRanking/:id" element={<Protected_route role="admin"><PlayerRankings /></Protected_route>} />
          {/* <Route path="/manager/profile" element={<Profile />} /> */}
          <Route path="/admin/profile" element={<Protected_route role="admin"><Profile /></Protected_route>} />

          {/* <Route path="/couch/profile" element={<Profile />} /> */}
          <Route path="/player/Dashboard" element={<Protected_route role="player"><DashboardP /></Protected_route>} />

          {/* <Route path="/player/profile" element={<Profile />} /> */}

          <Route path="/player/Matches/PendingMatches/:id/:team" element={<Protected_route role="player"><PendingMatches /></Protected_route>} />
          <Route path="/manager/Matches/PendingMatches/:id" element={<Protected_route role="manager"><MPendingMatches /></Protected_route>} />




          <Route path="/file" element={<FileUpload />}  />
          

        
          </Routes>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
    
  );

  

}

export default App;
