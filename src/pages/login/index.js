import React from "react";
import Header from "../../components/header";
import LoginForm from "../../components/LoginForm";




const Login=()=>{

    return(
        <div className="login-page">
            <Header page="login"/>
            <LoginForm />
        </div>
    )
}

export default Login;