import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
export const Navbar = () =>{

    const [user] = useAuthState(auth);

    const signUserOut = async() =>{
        await signOut(auth);
    };






    return (<>
    <div>
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        {!user ? (
            <>
            <Link to="/login"></Link>
            </>

        ):(
            <>
            <Link to="/createpost">Create new post</Link>
            
            </>

        )}
    </div>

    <div>
        
    </div>

    <div className="user">
        {user && (
            <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""}  height="100" width="80"/>
            <button onClick={signUserOut}>Log Out</button>

            </>
        )}
    </div>
    </>
    
    

    
    )
};