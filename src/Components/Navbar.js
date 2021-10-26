import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as HamburgerLogo } from "../assets/icon-hamburger.svg";
import { ReactComponent as IconCloseMenu } from "../assets/icon-close-menu.svg";
import "./Navbar.css";

export default function Navbar() {

    return (
        <div className="nav__container">
            <div className="logo">
                <Logo className="logo-img" alt="crowdfund-logo" />
            </div>
            <nav className="topnav">
                <div className="topnav__icon js-humburger">
                    <i className="topnav__icon-open">
                        <HamburgerLogo alt="humburger" />
                    </i>
                </div>
                <ul className="topnav__links js-navlinks">
                    <li className="topnav__icon-close js-close">
                        <span><IconCloseMenu alt="close" /></span>
                    </li>
                    <li><a className="nav-link border-top js-nav-link" href="#about">About</a></li>
                    <li><a className="nav-link js-nav-link" href="#discover">Discover</a></li>
                    <li><a className="nav-link border-bottom js-nav-link js-start" href="#getstarted">Get Started</a></li>
                </ul>
            </nav>
        </div>
    );
}