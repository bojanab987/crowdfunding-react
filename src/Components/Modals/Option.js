import { useState } from 'react';
import { useMyContext } from '../../context/Context';

export default function Option({ pledgeName, title, minDonation, itemsLeft, description, radioChecked }) {
    let [isSelectedOption, setSelectedOption] = useState(radioChecked);
    const [donationAmount, setDonationAmount] = useState(minDonation);

    let totalDonationAmount = useMyContext()[0],
        setTotalDonationAmount = useMyContext()[1],
        totalBackers = useMyContext()[2],
        setTotalBackers = useMyContext()[3],
        setModalVisible = useMyContext()[5],
        setCompletedModalVisible = useMyContext()[7];

    let optionsBottomClass = "options__bottom-left modal-number";
    if (pledgeName === "noreward") {
        optionsBottomClass = "hidden"
    } else if (pledgeName === "bamboo") {
        optionsBottomClass += " first"
    } else if (pledgeName === "black") {
        optionsBottomClass += " second"
    } else {
        optionsBottomClass += " third"
    }

    let divModalOptionClass = "modal__option";
    let divDonationOpenClass = "";
    if (pledgeName === "mahagony") {
        divModalOptionClass += " options-mahagony"
        divDonationOpenClass = "hidden";
    }


    const handleChange = (e) => {
        if (pledgeName === e.target.value) {
            setSelectedOption(true)
        }
    }

    if (isSelectedOption === true) {
        divModalOptionClass += " selected-pledge";
        divDonationOpenClass = "on-selected";
    } else {
        divModalOptionClass = "modal__option";
        divDonationOpenClass = "hidden";
    }

    const handleDonation = () => {
        if (parseInt(donationAmount) < minDonation || parseInt(donationAmount) === 0) {
            alert(`Donation amount have to be higher than ${minDonation}. Thank you!`)
        } else {
            setTotalDonationAmount(totalDonationAmount += parseInt(donationAmount));
            setTotalBackers(totalBackers += 1);
            setModalVisible(false);
            setCompletedModalVisible(true);
            setDonationAmount(minDonation);
        }
    }

    return (
        <div className={divModalOptionClass}>
            <div className="modal__option-top">
                <input className="default-input" type="radio" name="pledge" id={pledgeName}
                    onChange={handleChange} value={pledgeName} checked={isSelectedOption} disabled={pledgeName === "mahagony" ? true : false} />
                <span className="modal__option-input"></span>
                <label className="modal__option-label" htmlFor={pledgeName}>{title}</label>
                <h3 className={pledgeName === "noreward" ? "hidden" : "options__pledge modal-pledge"}>Pledge ${minDonation} or more</h3>
                <p className={optionsBottomClass}>{itemsLeft} <span className="small text">left</span>
                </p>
                <p className="modal__option-text text">
                    {description}
                </p>
            </div>
            {isSelectedOption &&
                <div className={divDonationOpenClass}>
                <hr className="hr-line" />
                <div className="modal__option-bottom">
                    <label className="text" htmlFor={pledgeName + "-amount"}>Enter your pledge</label>
                    <div className="modal__option-bottom-right">
                        <div className="input-box">
                            <input className="amount-input" type="number" name={pledgeName + "-amount"} id={pledgeName + "-amount"} value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} />
                            <span className="dolar-sign">&#36; </span>
                        </div>
                        <button className="continue-btn" onClick={handleDonation}>Continue</button>
                    </div>
                </div>
                </div>}
        </div>
    );
}