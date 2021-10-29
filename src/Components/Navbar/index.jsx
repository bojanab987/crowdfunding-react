import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as HamburgerLogo } from "../../assets/icon-hamburger.svg";
import { ReactComponent as IconCloseMenu } from "../../assets/icon-close-menu.svg";
import "./Navbar.css";
import { useMyContext } from '../../context/Context';

export default function Navbar() {

    const setModalVisible = useMyContext()[5],
        responsiveMenuVisible = useMyContext()[10],
        setResponsiveMenuVisible = useMyContext()[11],
        setOverlayVisible = useMyContext()[9];

    return (
        <div className="nav__container">
            <div className="logo">
                <Logo className="logo-img" alt="crowdfund-logo" />
            </div>
            <nav className="topnav">
                <div className={responsiveMenuVisible ? "topnav__icon hide" : "topnav__icon"} onClick={() => { setResponsiveMenuVisible(true); setOverlayVisible(true) }}>
                    <i className="topnav__icon-open">
                        <HamburgerLogo alt="humburger" />
                    </i>
                </div>
                <ul className={responsiveMenuVisible ? "topnav__links show" : "topnav__links"}>
                    <li className="topnav__icon-close" onClick={() => { setResponsiveMenuVisible(false); setOverlayVisible(false) }}>
                        <span><IconCloseMenu alt="close" /></span>
                    </li>
                    <li><a className="nav-link border-top" onClick={() => { setResponsiveMenuVisible(false); setOverlayVisible(false) }} href="#about">About</a></li>
                    <li><a className="nav-link" onClick={() => { setResponsiveMenuVisible(false); setOverlayVisible(false) }} href="/#discover">Discover</a></li>
                    <li><a className="nav-link border-bottom" onClick={() => { setResponsiveMenuVisible(false); setModalVisible(true) }} href="/#">Get Started</a></li>
                </ul>
            </nav>
        </div>
    );
}