import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import { Linkedin, Github, AlignJustify} from 'lucide-react';
const Navbar = () => {
   
   
    function botao() {
        
        let menuMobile = document.querySelector(".menus")
        if(menuMobile.classList.contains("open")){
            menuMobile.classList.remove("open")
        }else {
            menuMobile.classList.add("open")
        }
    }
   
    return (
        <div>
            <nav>
                <img src="../public/gif.gif" alt="" />
                <div className="menus-desktop">
                    <ul>
                        <li><Link to="/" > <p>Home</p> </Link></li>
                        <li><Link to="about" > <p>PROJECTS</p> </Link></li>
                        <li><Link to="contact" ><p> ConTacT</p> </Link></li>
                        <li><p><a target="_blank" href="https://www.linkedin.com/in/ruan-pablo-522a42300/"><Linkedin /></a></p></li>
                        <li><p><a target="_blank" href="https://github.com/ruanpablo-777"><Github /></a></p></li>
                    </ul>
                </div>
    
                <AlignJustify onClick={botao} className="menu-icon"></AlignJustify>
            
            </nav>
                    <div className="menus">
                    <ul>
                        <li><Link to="/" > <p>Home</p> </Link></li>
                        <li><Link to="about" > <p>PROJECTS</p> </Link></li>
                        <li><Link to="contact" ><p> ConTacT</p> </Link></li>
                        <li><p><a target="_blank" href="https://www.linkedin.com/in/ruan-pablo-522a42300/"><Linkedin /></a></p></li>
                        <li><p><a target="_blank" href="https://github.com/ruanpablo-777"><Github /></a></p></li>
                    </ul>
                    </div>
        </div>
    )
}

export default Navbar

