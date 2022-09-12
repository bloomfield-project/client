import axios from "axios";

export const fetchData =(authRequest)=>{
    console.log(authRequest.data)
    if(authRequest.method=="get"){
        return axios.get(`http://localhost:3001/api/${authRequest.url}`,authRequest.data);
    }else if(authRequest.method=="post"){
        return axios.post(`http://localhost:3001/api/${authRequest.url}`,authRequest.data);
    }else if(authRequest.method=="put"){
        return axios.put(`http://localhost:3001/api/${authRequest.url}`);
    }else if(authRequest.method=="delete"){
        return axios.delete(`http://localhost:3001/api/${authRequest.url}`);
    }
}