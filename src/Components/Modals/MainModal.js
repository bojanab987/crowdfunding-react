import { useState } from 'react';
import { ReactComponent as IconClose } from '../../assets/icon-close-modal.svg';
import { useMyContext } from '../../context/Context';
import '../Modals/Modals.css';
import Option from './Option';

export default function MainModal() {

    const [selectedOption, setSelectedOption] = useState("");

    const isModalVisible = useMyContext()[4],
        setModalVisible = useMyContext()[5];

    let visible = {
        visibility: "visible",
        opacity: "1"
    };
    let hidden = {
        visibility: "hidden",
        opacity: "0"
    }

    const options = [
        { pledgeName: "noreward", title: "Pledge with no reward", minDonation: 1, description: " Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email." },
        { pledgeName: "bamboo", title: "Bamboo Stand", minDonation: 25, itemsLeft: 101, description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added  to a special Backer member list." },
        { pledgeName: "black", title: "Black Edition Stand", minDonation: 75, itemsLeft: 64, description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list.    Shipping is included." },
        { pledgeName: "mahagony", title: "Mahagony Special Edition", minDonation: 200, itemsLeft: 0, description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included." }
    ]


    return (
        <div className={isModalVisible === false ? "modal-default" : "modal-default modal-visible"} style={isModalVisible === true ? { visible } : { hidden }}>
            <div className="modal-content">
                <div className="close-modal js-close-modal">
                    <IconClose alt="close-modal" onClick={() => setModalVisible(false)} />
                </div>
                <div className="modal__top">
                    <h2 className="modal__top-title">Back this project</h2>
                    <p className="modal__top-text text">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                    </p>
                </div>
                <div className="modal__options-form">
                    {options.map((option, i) => {
                        return (
                            <Option key={i} {...option} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};