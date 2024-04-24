import React from "react";
import './Header.css';
// import logoIF from "../../assets/images/LogoIf.svg";
import menuHamburger from "../../assets/images/menuHamburger.svg";

function Header() {
    return (
        <header className="headerContainer">
            <nav className="navMenuContainer">
                <a href="#" className="navLogo">
                    Logo IF
                    {/* <img src={logoIF} alt="Logo do Intituto Federal do Paraná - IFPR" /> */}
                </a>

                <ul className="navMenu">
                    <li>
                        <a href="#" className="item">Evento</a>
                    </li>
                    <li>
                        <a href="#" className="item">Palestrantes</a>
                    </li>
                    <li>
                        <a href="#" className="item">Oficinas</a>
                    </li>
                    <li>
                        <a href="#" className="item">Cronograma</a>
                    </li>
                </ul>

                <a href="" className="navSign">
                    <button href="#">Inscreva-se</button>
                </a>

                <picture className="navMenuHamburger">
                    <img src={menuHamburger} alt="Botão menu hambuguer" />
                </picture>
            </nav>
        </header>
    );
}

export default Header;