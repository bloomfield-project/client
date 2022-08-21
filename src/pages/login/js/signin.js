import '../css/signin.css';




function signin() {
  return (
    <div className="ZZmain">
     <div className="ZZsub-main">
       <div>
         <div className="ZZimgs">
           <div className="ZZcontainer-image">
             {/* <img src={profile} alt="profile" className="ZZprofile"/> */}

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             {/* <img src={email} alt="email" className="ZZemail"/> */}
             <input type="text" placeholder="user name" className="ZZname"/>
           </div>
           <div className="ZZsecond-input">
             {/* <img src={pass} alt="pass" className="ZZemail"/> */}
             <input type="password" placeholder="user name" className="ZZname"/>
           </div>
          <div className="ZZlogin-button">
          <button className='ZZbtn-login'>Login</button>
          </div>
           
            <p className="ZZlink">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default signin;