import "../css/login.css"
import cricket from "../../../component/Login/cricket.png"
import validator from "validator";
import React ,{useState } from 'react'

const axios = require('axios').default;




function LoginN(){
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };



    


    const [emailError, setEmailError] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPw] = useState("");
    const [invalid, setInvalid] = useState("err-G");
    
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
        
    };

    const submitForm = async(e) =>{
        e.preventDefault();
        console.log(Email+Password)


        let payload = { email: Email, password: Password };

        let res = await axios.post('/api/user/login', payload);

        let data = res.data;
        console.log(data);
        if(data.data=="Invalid username or password"){
            setInvalid("err-G-active")
        }
        else{
            console.log("hey john")
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