import {React,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {
     const nav = useNavigate();
     const unameRef = useRef();
     const upassRef = useRef();

    const checkUser =()=>{
        console.log(unameRef.current.value);
        console.log(upassRef.current.value);
        let userdetails={
            FirstName: unameRef,
            Password: upassRef
        }
        axios.get("http://localhost:8888/user")
        .then((res)=>{
            let currentUser = res.data.filter((val)=>{
                return val.FirstName === unameRef.current.value && val.Password == upassRef.current.value;
            });
            if(currentUser.length > 0){
                window.alert("login success");
                sessionStorage.setItem("users",unameRef.current.value);
                nav("/Profile");
            }
            else{
                window.alert("wrong credentials");
                unameRef.current.value="";
                upassRef.current.value="";
            }
        })
        .catch((error)=>{
            console.error("Error fetching users:",error);
        });
    };
    return (
        <div>
            <br/>
            <br/>
            <br/>
             <form className='form-group'>
                <div className="col-md-4">
                <label htmlFor="uname" className='form-label'>Username:</label>
                <input type="text" className='form-control' id="uname" name="uname" ref={unameRef} />
                </div>
                <div className="col-md-4">
                <label htmlFor="passkey" className='form-label'>Password:</label>
                <input type="text" className='form-control' id="passkey" name="passkey"  ref={upassRef} />
                <button type="button" onClick={()=>{checkUser()}}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Login
