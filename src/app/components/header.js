"use client"
import React, {useState, useEffect} from "react";
export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const[navbar, setNavbar] = useState(false);

    const openMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
      const moveDown = () => {
        if(window.scrollY >= 200){
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      }

      window.addEventListener('scroll', moveDown);
      
    });

    return(
        <nav className={navbar? "dynamic-header visible" : "dynamic-header"}>
            <span>Jakub Przychodzki</span>
        </nav>
        
    );
}


    