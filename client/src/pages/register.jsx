// import { useState } from "react";
// import './register.css';
// import { Header } from '../Components/header';
// export const Register = () =>{
//     const [user, setUser]= useState({
//         username: "",
//         email: "",
//         password: "",
//     });

//     // handling input variable
//     const handleInput = (e)=>{
//         let name= e.target.name;
//         let value= e.target.value;

//         setUser({
//             ... user,
//             [name] : value,
//         });
//     };
// // form submit
// const handleSubmit = (e)=>{
//     e.preventDefault();
//     alert(user);

// };

   
//     return<>
    
//     <section>
//         <main>
//             <div className="registration">
//                 <div className="image">
 
                    

                   

//                 </div>
//                 <div className="form">
//                     <h1>Register</h1>
//                     <br />
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <label htmlFor="username">Username</label>
//                             <input type="text" name="username" placeholder="Username" id="username" required autoComplete="off" value={user.username} onChange={handleInput}/>
//                         </div>
//                         <br />
//                         <div>
//                             <label htmlFor="email">Email</label>
//                             <input type="email" name="email" placeholder="Email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}/>
//                         </div>
// <br />
//                         <div>
//                             <label htmlFor="password">Password</label>
//                             <input type="password" name="password" placeholder="password" id="password" required autoComplete="off"  value={user.password} onChange={handleInput}/>
//                         </div>
// <br />
//                         <button type="submit"> REGISTER </button>
//                     </form>
//                 </div>
//             </div>
//         </main>
//     </section>
//     </>

    

// };


import './register.css';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { Header } from '../Components/header';
// import { useAuth } from '../store/auth';


// import { use } from '../../../server/router/auth-router';

export const Register = () =>
{
    const navigate = useNavigate();
    const [user, setUser]= useState({
        username: "",
        email: "",
        password: "",
    });

    // const {storetokeninLS}=useAuth();

    // handling input variable
    const handleInput = (e)=>{
        let name= e.target.name;
        let value= e.target.value;

        setUser({
            ... user,
            [name] : value,
        });
    };
// form submit
const handleSubmit = async(e)=>{
    e.preventDefault();
    // alert(user);
try {
    const response = await fetch(`http://localhost:3000/api/auth/register`,{
    method:"POST",
    headers:{
        'Content-Type':'application/json',

    },
    body: JSON.stringify(user),

});
if(response.ok)
{
    // const res_data= await respose.json();
    // console.log("response from server",res_data);
    // storetokeninLS(res_data.token);
    // localStorage.setItem("token",res_data.token);
    setUser(
        {username: "",
        email: "",
        password: ""});
        navigate("/login");
        alert("User Created ! Please login!");
    
}
else {
    const responseData = await response.json();
    if (responseData.msg === "user already exists") {
        alert("User already exists. Please log in.");
        navigate("/login");
    } 
    else
    {
        console.log(response);
    }

}
} catch (error) {
    console.log("register",error);
    
}


};

    return <>
    <Header></Header>
    <div className="block">
        <div className="block-1">
        <h5><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#A01022" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg><label htmlFor="user" className='usertext'>USER SIGN IN</label></h5><br /><br />

<form className="login-form" onSubmit={handleSubmit}>

<input type="text" name="username" placeholder="Username" id="usernamereg" className="Custom-Field" required autoComplete="off" value={user.username} onChange={handleInput}/>       
<input type="email" name="email" placeholder="Email ID" id="email" className="Custom-Field" required autoComplete="off" value={user.email} onChange={handleInput}/> <br />
<input type="password" name="password" placeholder="password" className="Custom-Field" id="password" required autoComplete="off"  value={user.password} onChange={handleInput}/>
<br /><br />        <input type="submit"  className='Submit' value='REGISTER' />
</form>
            
        </div>
    </div>

    
   
    <div>
        <div className="block-2">
            <div className="text">
            <h5>Contact Info</h5>
          {/* <br /><br /><br /> */}
          <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>  0836-2350711</h6>
          <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>  socse@kletech.ac.in</h6>
          <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>                                        @socse_kletech</h6>
          <h6></h6>
            </div>
        </div>
    </div>
    </>
};