import { useState } from 'react';

export default function Option({ pledgeName, title, minDonation, itemsLeft, description }) {
    const [selectedOption, setSelectedOption] = useState(0);
    let optionsBottomClass = "options__bottom-left modal-number"
    if (pledgeName === "noreward") {
        optionsBottomClass = "hidden"
    } else if (pledgeName === "bamboo") {
        optionsBottomClass += " first"
    } else if (pledgeName === "black") {
        optionsBottomClass += " second"
    } else {
        optionsBottomClass += " third"
    }

    return (
        <div className={pledgeName === "mahagony" ? "modal__option options-mahagony" : "modal__option"}>
            <div className="modal__option-top">
                <input className="default-input js-radio-btn" type="radio" name="pledge" id={pledgeName}
                    onChange={() => { setSelectedOption(pledgeName) }} checked={selectedOption === pledgeName} />
                <span className="modal__option-input"></span>
                <label className="modal__option-label" htmlFor={pledgeName}>{title}</label>
                <h3 className={pledgeName === "noreward" ? "hidden" : "options__pledge modal-pledge"}>Pledge ${minDonation} or more</h3>
                <p className={optionsBottomClass}>{itemsLeft} <span className="small text">left</span>
                </p>
                <p className="modal__option-text text">
                    {description}
                </p>
            </div>
            <div className="on-selected hidden">
                <hr className="hr-line" />
                <div className="modal__option-bottom">
                    <label className="text" htmlFor={{ pledgeName } + "-amount"}>Enter your pledge</label>
                    <div className="modal__option-bottom-right">
                        <div className="input-box">
                            <input className="amount-input js-amount js-amount-0" type="text" name={{ pledgeName } + "-amount"} id={{ pledgeName } + "-amount"} onkeypress="return validateNumber(event)" />
                            <span className="dolar-sign">&#36; </span>
                        </div>
                        <button className="continue-btn js-continue" onclick="handleDonation()">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}