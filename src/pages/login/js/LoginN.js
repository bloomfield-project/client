import "../css/login.css"
import cricket from "../../../component/Login/cricket.png"
import validator from "validator";
import React ,{useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {logIn,logout} from "../../../redux/actions/authAction"
import {useNavigate} from "react-router-dom"

const axios = require('axios').default;




function LoginN({ setLogin }){
    // redux


    const dispatch = useDispatch()



    const history = useNavigate()
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };
    const [emailError, setEmailError] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPw] = useState("");
    const [invalid, setInvalid] = useState("err-G");
    //vall
    const validateEmail = (e) => {
        var Email = e.target.value;
        if (!validator.isEmail(Email)) {
            setEmailError("Enter valid Email!");
        } 
        else{
            setEmailError("");
            setEmail(Email)
        }
    };

    const handlepw = (e) => {
        var Password = e.target.value;
            setPw(Password)
            //setEmail(Email)
        
    };

    const submitForm = async(e) =>{
        e.preventDefault();
        console.log(Email+Password)


        let payload = { email: Email, password: Password };

        let res = await axios.post('/api/user/login', payload);

        let data = res.data;
        //redux
        dispatch(logIn(data))
        //end
        console.log(data);
        if(data.data=="Invalid username or password"){
            setInvalid("err-G-active")//val
        }
        else{
            console.log("hey john")
            if(data.data.role=='manager'){
                history('/manager/MatchDetail',{state: data.data})
            }
            else if(data.data.role=='player'){
                history('/player/Dashboard',{state: data.data})
            }
            else if(data.data.role=='couch'){
                history('/coach/matches',{state: data.data})
            }
            else if(data.data.role=='admin'){
                history('/admin/Employees',{state: data.data})
            }
            // history('/player/playerRanking',{state: data.data})
            
        }

    }
    
    return(
        <div className="login-main-box-G">

            {/* left part */}
            <div className="login-left-G">
                <div className="left-1-G">
                    BLOOMFIELD
                </div>
                <div className="left-2-G">
                    Bloomfield Cricket & Athletic club
                </div>
                <div className="left-3-G">
                    Member management System
                </div>
                
                <img className="left-4-G" src={cricket} alt="cricket" ></img>
                
            </div>

            {/* right part */}
            <div className="login-right-G">
                <div className="right-box-G">
                    <div className="login-topic-G">
                        Log in
                    </div>
                    <div className={invalid}>
                        Invalid login or password. Please try again.
                    </div>
                        <span className="validate-msg">{emailError}</span>
                        <form className="form-g-g-G" onSubmit={submitForm}>
                        <div className="log-in-G">
                         
                            <label>
                            <input type="email" name="email" className="in-G-G" placeholder="Email" onChange={(e) => validateEmail(e)} />
                            </label>
                            
                        </div>
                        <div className="log-in-G">
                            <label>
                                <input type="password" name="password" className="in-G-G" placeholder="Password"  onChange={(e) => handlepw(e)}/>
                            </label>
                        </div>
                        
                        <div className="log-btn-G">
                            <div className="forgot-G">
                                <a href="#">Forgot your password?</a>
                            </div>
                            <div className="log-G">
                                <button type="submit" className="log-G-btn-G" >Log In</button>
                            </div>
                        </div>
                        </form>
                </div>
            </div>
            
        </div>
    );
    

    


}

export default LoginN;