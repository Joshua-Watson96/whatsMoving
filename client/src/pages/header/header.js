import React from "react"
import { Link } from "react-router-dom"
import { Logo } from "../logo/logo"
import "./header.css"

export const Headermain = () => {
    return(
        <header>
            <div className="fixed-Header">
                <Logo />
                <Link to="/"> <button type="submit"  className="logOut">  Start again
                </button></Link>
                

            </div>
        </header>
    )

}
