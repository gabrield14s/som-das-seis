import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export default function Auth(){
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user){
                setUser(user)
                navigate("/ficha")
            }
            else{
                setUser(null)
                navigate("/")
            }
        });
    }, []);

    return(
        <></>
    );
}