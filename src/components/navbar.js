import React, { useState, useEffect } from 'react'; //useState di panggil dalam function component untuk menambahkan suatu state lokal. React akan menyimpan state antar render. useState memberikan dua hal: nilai state saat ini dan fungsi untuk memperbarui nilai tersebut
import { Link } from 'react-router-dom'; //install react router dom dl pake npm install react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //manggil asset dalam fontawesome yang udah di install di terminal
import { faCubes, faWindowMinimize, faBars, faHome, faUser, faQuestion } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from './button';
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1000) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    //useeffect biar pas setiap di refresh buttonnya gak muncul ditengah navbar

    window.addEventListener('resize', showButton);

    return (
        <>
            {/* ^^ fragment */}
            <nav className="navbar" >
                <div className="navbar-container">

                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        {/* untuk buat logo nya bisa di klik dan yang close biar pas menu di click dia ketutup otomatis*/}
                        DocsPal <FontAwesomeIcon icon={faCubes} />
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa-bars' : 'fa-window-minimize'}>
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </i>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/afterConnect' className='nav-links' onClick={closeMobileMenu}>
                                {/* <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> */}
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                {/* <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon> */}
                                About
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={event => window.location.href = 'https://github.com/'}>
                                {/* <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> */}
                                Github
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    );
}

export default Navbar;