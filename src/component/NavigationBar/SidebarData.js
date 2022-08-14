import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title:'Dashboard',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Player',
        path:'/Fogotpassword',
        icon:<IoIcons.IoIosPaper />,
        cName:'nav-text'
    },
    {
        title:'අසිත',
        path:'/Search',
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
    },
    {
        title:'SampleForm',
        path:'/manager/SampleForm',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Ranking',
        path:'/manager/CricketRanking',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Player',
        path:'/manager/Players',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Payments',
        path:'/manager/Membership',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Events',
        path:'/manager/Session',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
]
