import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { BsFillTrophyFill,BsFillDiagram3Fill,BsPersonLinesFill ,BsFillCreditCardFill,BsCalendar2EventFill } from "react-icons/bs";
import { MdSportsCricket , MdEventAvailable} from "react-icons/md";
import { GiTrophyCup , GiAchievement} from "react-icons/gi";
import { BsDistributeVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export const SidebarDataManager = [
    // {
    //     title:'Dashboard',
    //     path:'/manager/Profile',
    //     icon:<AiIcons.AiFillHome />,
    //     cName:'nav-text'
    // },
    {
        title:'Match',
        path:'/manager/MatchDetail',
        icon:<MdSportsCricket />,
        cName:'nav-text'
    },
    {
        title:'Achivement',
        path:'/manager/Achivement',
        icon:<BsFillTrophyFill />,
        cName:'nav-text'
    },
    {
        title:'Ranking',
        path:'/manager/CricketRanking',
        icon:<BsFillDiagram3Fill />,
        cName:'nav-text'
    },
    {
        title:'Player',
        path:'/manager/Players',
        icon:<BsPersonLinesFill />,
        // BsPerson
        cName:'nav-text'
    },
    {
        title:'Payments',
        path:'/manager/Membership',
        icon:<BsFillCreditCardFill />, 
        cName:'nav-text'
    },
    {
        title:'Events',
        path:'/manager/Session',
        icon:<BsCalendar2EventFill />,
        cName:'nav-text'
    },
    {
        title:'Logout',
        path:'/',
        icon:<FaIcons.FaPowerOff />,
        cName:'nav-text'
    },
]


export const SidebarDataPlayer = [
    // {
    //     title:'Dashboard',
    //     path:'/player/Dashboard',
    //     icon:<AiIcons.AiFillHome />,
    //     cName:'nav-text'
    // },
    {
        title:'Performance',
        path:'/player/playerRanking',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Sessions',
        path:'/player/Psession',
        icon:<IoIcons.IoIosPaper />,
        cName:'nav-text'
    },
    {
        title:'Matches',
        path:'/player/Matches',
        // MdSportsCricket
        icon:<MdSportsCricket/>,
        cName:'nav-text'
    },
    {
        title:'Events',
        path:'/player/PEvents',
        // MdEventAvailable
        icon:<MdEventAvailable />,
        cName:'nav-text'
    },
    {
        title:'Ranking',
        path:'/player/PlayerRankingList',
        icon:<BsFillDiagram3Fill />,
        cName:'nav-text'
    },
    {
        title:'Attendance',
        path:'/player/Progress',
        icon:<BsDistributeVertical />,
        cName:'nav-text'
    },
    {
        title:'Feedback',
        path:'/player/giveFeedback',
        icon:<FiEdit />,
        cName:'nav-text'
    },
    // {
    //     title:'Appointments',
    //     path:'/player/Appointments',
    //     icon:<AiIcons.AiFillHome />,
    //     cName:'nav-text'
    // },
    {
        title:'Payments',
        path:'/player/Payments',
        // FaMoneyBillAlt
        icon:<FaIcons.FaMoneyBillAlt/>, 
        cName:'nav-text'
    },
    // {
    //     title:'Achivements',
    //     path:'/player/Achivements',
    //     icon:<AiIcons.AiFillHome />,
    //     cName:'nav-text'
    // },
    {
        title:'Logout',
        path:'/',
        icon:<FaIcons.FaPowerOff />,
        cName:'nav-text'
    },

    

    
]

export const SidebarDataAdmin = [
    // {
    //     title:'Dashboard',
    //     path:'/admin/profile',
    //     icon:<AiIcons.AiFillHome />,
    //     cName:'nav-text'
    // },
    {
        title:'Employees',
        path:'/admin/Employees',
        icon:<IoIcons.IoIosPaper />,
        cName:'nav-text'
    },
    // {
    //     title:'Accounts',
    //     path:'/admin/Accounts',
    //     icon:<FaIcons.FaCartPlus />,
    //     cName:'nav-text'
    // },
    {
        title:'Payments',
        path:'/admin/AnnualMembership',
        icon:<FaIcons.FaMoneyBillAlt/>,
        cName:'nav-text'
    },
    {
        title:'Feedbacks',
        path:'/admin/Feedback',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Achivements',
        path:'/admin/Achivements',
        // GiTrophyCup
        icon:<BsFillTrophyFill />,
        cName:'nav-text'
    },
    {
        title:'Ranking',
        path:'/admin/Raking',
        icon:<GiAchievement />,
        // GiAchievement
        cName:'nav-text'
    },
    {
        title:'Logout',
        path:'/',
        icon:<FaIcons.FaPowerOff />,
        cName:'nav-text'
    },
        
]

export const SidebarDataCoach = [

    // {
    //     title:'Dashboard',
    //     path:'/coach/profile',
    //     icon:<AiIcons.AiFillHome />,
    //     cName:'nav-text'
    // },

    {
        title:'Matches',
        path:'/coach/matches',
        icon:<MdSportsCricket/>,
        cName:'nav-text'
    },

    {
        title:'Sessions',
        path:'/coach/practiceSessions',
        icon:<IoIcons.IoIosPaper />,
        cName:'nav-text'
    },
    
    {
        title:'Teams',
        path:'/coach/Teams',
        icon:<FaIcons.FaSquarespace />,
        cName:'nav-text'
    },
    // {
    //     title:'Appoinments',
    //     path:'/coach/appoinments',
    //     icon:<AiIcons.AiFillHome />,
    //     cName:'nav-text'
    // },
    {
        title:'Players',
        path:'/coach/players',
        icon:<BsPersonLinesFill />,
        cName:'nav-text'
    },
    {
        title:'Ranking',
        path:'/coach/bloomfieldCricketRanking',
        icon:<BsFillDiagram3Fill />,
        cName:'nav-text'
    },
    {
        title:'Achievements',
        path:'/coach/achievement',
        icon:<BsFillTrophyFill />,
        cName:'nav-text'
    },
    // {
    //     title:'Calender',
    //     path:'',
    //     icon:<AiIcons.AiFillHome />,
    //     cName:'nav-text'
    // },
    {
        title:'Logout',
        path:'/',
        icon:<FaIcons.FaPowerOff />,
        cName:'nav-text'
    },
     
]