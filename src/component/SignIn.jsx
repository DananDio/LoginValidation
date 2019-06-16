import React, { Component }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const txtFieldState = {
    value: '',
    valid: true,
    typeMismatch: false,
    errMsg: '' //this is where our error message gets across
};

export default class SignIn extends Component {
    state = {
        email: { ...txtFieldState, fieldName: 'Email', required: true, requiredTxt: 'Email is required', formatErrorTxt: 'Incorrect email format' },
        firstname: { ...txtFieldState, fieldName: 'First Name', required: true, requiredTxt: 'First Name is required' },
        lastname: { ...txtFieldState, fieldName: 'Last Name', required: false, requiredTxt: 'Last Name is required' },
        allFieldsValid: false
    };
    
  render() {
      return (
          <span className='border border-dark rounded'>
              <h2>FORM REGISTRASI</h2>
              <form action="" method="get" onSubmit="">
                  <div className='group'>
                      <label htmlFor="name">Name</label><br/>
                      <input type="text" name="txtname" id="" required/>
                  </div>
                  <div className='group'>
                      <label htmlFor="password">Password</label><br/>
                      <input type="password" name="txtpassword" id="" required />
                  </div>
                  <input type="submit" value="Register" id='register'/>
        </form>
        </span>
    )
  }
}
