import axios from 'axios'
import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
             FirstName:"",
             LastName: "",
             Password: "",
             ConfirmPassword: ""
        }
    }
    // handler for firstname
    changeFirstName=(event)=>{
        this.setState({
            FirstName: event.target.value
        })
    }
    // handler for lastname
    changeLastName=(event)=>{
        this.setState({
            LastName: event.target.value
        })
    }
    // handler for password
    changePassword=(event)=>{
        this.setState({
            Password: event.target.value
        })
    }
    changeConfirmPassword=(event)=>{
        this.setState({
            ConfirmPassword : event.target.value
        })
    }
    handleSubmit= (event) =>{
        const confirmpassword = this.state.ConfirmPassword
        if(confirmpassword===this.state.Password){
        this.setState({
            ConfirmPassword : confirmpassword
        })
        alert(`${this.state.FirstName} details successfully registered`)
        axios.post("http://localhost:8888/user",this.state).then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
        else{
            alert("The Password is mismatching")  
        }
    }
    
    render() {
        return (
            <div>
                 <div className='container-fluid align-items-center"'>
            <br/>
            <br/>
            <br/>
      
      <form  onSubmit={this.handleSubmit} className='form-group'>

        <div className="col-md-4">
        <label for="fname" className="form-label">First Name:</label>
        <input type="text" className="form-control" id="fname" name="fname" value={this.state.FirstName} onChange={this.changeFirstName}/>
        </div>
        
        <div className="col-md-4">
        <label for="lname" className="form-label">Last Name:</label>
        <input type="text" className="form-control" id="lname" name="lname" value={this.state.LastName} onChange={this.changeLastName}/>
        </div>

        <div className="col-md-4">
        <label for="pass" className="form-label">Password:</label>
        <input type="password" className="form-control" id="pass" name="pass" value={this.state.Password} onChange={this.changePassword}/>
        </div>

        <div className="col-md-4">
        <label for="cpass" className="form-label">Confirm Password:</label>
        <input type="password" className="form-control" id="cpass" name="cpass" value={this.state.ConfirmPassword} onChange={this.changeConfirmPassword}/>
        <br/>
        <button type="submit" onClick={this.handleSubmit} className='btn btn-primary'>Submit</button>
        </div>
        </form>
     
     </div>
    </div>
        )
    }
}

export default Signup
