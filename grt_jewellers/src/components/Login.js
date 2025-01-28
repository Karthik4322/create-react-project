import React from 'react'

function Login() {
    return (
        <div>
            <form className='form-group'>
                <div className="col-md-4">
                <label className='form-label'>Username:</label>
                <input type="text" className='form-control' id="uname" name="uname" value={this.state.UserName}/>
                </div>
                <div className="col-md-4">
                <label className='form-label'>Password:</label>
                <input type="text" className='form-control' id="passkey" name="passkey" value={this.state.Passcode}/>
                </div>
            </form>
        </div>
    )
}

export default Login
