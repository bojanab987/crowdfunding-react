import { useState } from 'react';
import { ReactComponent as MastercraftLogo } from '../../assets/logo-mastercraft.svg';
import './Main.css';
import { useMyContext } from '../../context/Context';

export default function Main() {

    const [isBookmarked, setIsBookmarked] = useState(false);
    const handleBookmarkedClick = () => {
        setIsBookmarked(!isBookmarked);
    }

    const totalDonationAmount = useMyContext()[0],
        totalBackers = useMyContext()[2],
        setModalVisible = useMyContext()[5],
        setOverlayVisible = useMyContext()[9];

    return (
        <main className="container">
            <div className="top__container">
                <MastercraftLogo className="top__logo-img" alt="logo-mastercraft" />
                <h1 className="top__title">Mastercraft Bamboo Monitor Riser</h1>
                <p className="top__text">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className="top__button">
                    <button className="top__button-left js-back-this-project" onClick={() => { setModalVisible(true); setOverlayVisible(true) }}>Back this project
                    </button>
                    <button className={isBookmarked === true ? "top__button-right bookmarked" : "top__button-right"} onClick={handleBookmarkedClick}>
                        <span className={isBookmarked === true ? "bookmark-icon bookmarked" : "bookmark-icon"}></span>
                    </button>
                </div>
            </div>

            <div className="progress__container">
                <div className="progress__stats">
                    <div className="progress__stats-money">
                        <p className="number js-total-donation">${totalDonationAmount}</p>
                        <p className="text">of $100,000 backed</p>
                    </div>
                    <div className="progress__stats-backers">
                        <p className="number js-total-backers">{totalBackers}</p>
                        <p className="text">total backers</p>
                    </div>
                    <div className="progress__stats-days">
                        <p className="number">56</p>
                        <p className="text">days left</p>
                    </div>
                </div>
                <div className="progress__bar">
                    <label className="progress__bar-label" htmlFor="progress"></label>
                    <meter className="progres__bar-level js-progress-bar" id="progress" min="0" max="100000" value={totalDonationAmount}></meter>
                </div>
            </div>

            <div className="options__container">
                <div className="about" id="about">
                    <h2 className="about__title">
                        About this project
                    </h2>
                    <p className="about__text text">
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                        to a more comfortable viewing height. Placing your monitor at eye level has the potential to
                        improve your posture and make you more comfortable while at work, helping you stay focused on
                        the task at hand.
                        <br />
                        <br />
                        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your
                        computer to allow notepads, pens, and USB sticks to be stored under the stand.
                    </p>
                </div>
                <div className="options-subcontainer" id="discover">
                    <div className="options options-bamboo">
                        <div className="options-top">
                            <h3 className="options__title">Bamboo Stand</h3>
                            <h4 className="options__pledge">Pledge $25 or more</h4>
                        </div>
                        <p className="options__text text">You get an ergonomic stand made of natural bamboo. You've helped us launch
                            our promotional campaign, and you’ll be added to a special Backer member list.</p>
                        <div className="options__bottom">
                            <p className="number options__bottom-left">101 <span className="text small">left</span></p>
                            <button className="options-button bamboo options__bottom-right js-select-reward-bamboo" onClick={() => setModalVisible(true)}>Select reward</button>
                        </div>
                    </div>

                    <div className="options options-black">
                        <div className="options-top">
                            <h3 className="options__title">Black Edition Stand</h3>
                            <h4 className="options__pledge">Pledge $75 or more</h4>
                        </div>
                        <p className="options__text text">You get a Black Special Edition computer stand and a personal thank you.
                            You’ll be added to our Backer member list. Shipping is included.</p>
                        <div className="options__bottom">
                            <p className="number options__bottom-left">64 <span className="small text">left</span></p>
                            <button className="options-button black options__bottom-right js-select-reward-black" onClick={() => setModalVisible(true)}>Select reward</button>
                        </div>
                    </div>

                    <div className="options options-mahagony">
                        <div className="options-top">
                            <h3 className="options__title">Mahagony Special Edition</h3>
                            <h4 className="options__pledge">Pledge $200 or more</h4>
                        </div>
                        <p className="options__text text">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
                            personal thank you. You’ll be added to our Backer member list. Shipping is included. </p>
                        <div className="options__bottom">
                            <p className="number options__bottom-left">0 <span className="small text">left</span></p>
                            <button className="options-button out-of-stocks options__bottom-right">Out of stock</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}