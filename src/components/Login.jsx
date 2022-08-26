import React from "react";

function Login(){
    const [status, setStatus]    = React.useState(''); 
    const [email, setEmail]      = React.useState('');
    const [password, setPassword]    =React.useState('');
    
    function validate(field, label){
            if(!field){
                setStatus('Error:' + label); 
                setTimeout(() => setStatus(''), 3000); 
                return false; 
            }
            return true; 
        }
        function submit(){
            if(!validate(email,     'email'))   return; 
            if(!validate(password,  'password')) return; 
            console.log('login successful');
        }

        function clearForm(){
            setEmail('');
            setPassword('');  
        }

return (
    <div className = "Login" >
        <>
        Email address<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter email"/><br/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password"/>
        <br/>
    
        <button type="submit" className="btn btn-light" onClick={submit}>Login</button>
        <button type="submit" className="btn btn-light" onClick={submit}>Sign In</button>
        </>
    
</div>
)
    }
export default Login;