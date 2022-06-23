import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from "../hooks/useAuthContext";
import React from 'react';

//styles
import styles from './Navbar.module.css'

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    return(
        <nav className={styles.navbar}>
            <ul>
                <li><img src="https://img.icons8.com/fluency/344/chance-of-storm.png" alt="" width="45" height="45"></img></li>
                <li className={styles.title}>ClimatePrep</li>

                {!user && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}
                
                {user && (
                    <>
                        <li>hello, {user.displayName}</li>
                        <li>
                            <button className="btn" onClick={logout}>Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}