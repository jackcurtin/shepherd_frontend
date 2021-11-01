import React, {useState} from "react";
import LoginForm from "../forms/LoginForm";
import useToken from "../useToken";



export default function Home() {
    const { token, setToken } = useToken();
    return ( 
        <div>
            <LoginForm setToken={setToken}/>
        </div>
     );
}